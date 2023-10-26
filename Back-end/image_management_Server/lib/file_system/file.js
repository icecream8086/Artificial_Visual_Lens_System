const fs = require('fs').promises;
const path = require('path');
const query = require('../datasource/mysql_connection_promise');

/**
 * Creates directories at the specified paths.
 * @param  {...string} dir_paths - The paths of the directories to create.
 * @throws {Error} If a directory already exists at the specified path.
 */
async function create_dir(...dir_paths) {
    for (const dir_path of dir_paths) {
        if (path.relative(process.cwd(), dir_path).startsWith('..')) {
            //add a check to make sure the directory is not outside the current working directory
            throw new Error(`Directory '${dir_path}' is not allowed to access parent directories`);
        }
        try {
            await fs.access(dir_path);
            throw new Error(`Directory '${dir_path}' already exists`);
        } catch (error) {
            if (error.code === 'ENOENT') {
                await fs.mkdir(dir_path, { recursive: true });
            } else {
                throw error;
            }
        }
    }
}
// useage:
//   const paths = ['/path/to/dir1', '/path/to/dir2', '/path/to/dir3'];
//   paths.forEach(async (path) => {
//     await create_dir(path);
//   });

/**
 * Checks if the specified directories exist.
 * @param  {...string} dir_paths - The paths of the directories to check.
 * @returns {Promise<boolean>} - A Promise that resolves to true if all directories exist, false otherwise.
 */
async function check_dir_exists(...dir_paths) {
    try {
        for (const dir_path of dir_paths) {
            await fs.access(dir_path);
        }
        return true;
    } catch (error) {
        return false;
    }
}


async function check_dir_not_exists(...dir_paths) {
    try {
      for (const dir_path of dir_paths) {
        await fs.access(dir_path);
        throw new Error(`Directory ${dir_path} already exists`);
      }
      return true;
    } catch (error) {
      if (error.code === 'ENOENT') {
        return true;
      } else {
        throw new Error(`Directory ${dir_paths} already exists`);
      }
    }
  }

/**
 * Checks if the given file paths exist.
 * @param  {...string} file_paths - The file paths to check.
 * @returns {Promise<boolean>} - A Promise that resolves to true if all file paths exist, false otherwise.
 */
async function check_file_exists(...file_paths) {
    try {
        for (const file_path of file_paths) {
            await fs.access(file_path);
        }
        return true;
    } catch (error) {
        return false;
    }
}

async function copy_file(source, target) {
    try {
        await fs.copyFile(source, target);
    } catch (error) {
        throw error;
    }
}

/**
 * Deletes one or more files from the file system.
 * @param {...string} file_paths - The path(s) of the file(s) to be deleted.
 * @throws {Error} If any error occurs while deleting the file(s).
 */
async function delete_file(...file_paths) {
    try {
        for (const file_path of file_paths) {
            await fs.unlink(file_path);
        }
    } catch (error) {
        throw error;
    }
}

/**
 * Deletes one or more directories recursively.
 * @async
 * @function delete_dir
 * @param {...string} dir_paths - One or more directory paths to delete.
 * @throws {Error} If an error occurs while deleting the directory.
 */
async function delete_dir(...dir_paths) {
    try {
        for (const dir_path of dir_paths) {
            await fs.rmdir(dir_path, { recursive: true });
        }
    } catch (error) {
        throw error;
    }
}


/**
 * Returns a list of file names in the specified directory path.
 *
 * @async
 * @function get_file_list
 * @param {string} dir_path - The path of the directory to get the file list from.
 * @returns {Promise<Array<string>>} - A promise that resolves with an array of file names in the directory.
 * @throws {Error} - If there was an error reading the directory or getting file stats.
 */
async function get_file_list(dir_path) {
    try {
        const files = await fs.readdir(dir_path);
        const file_names = [];
        for (const file of files) {
            const file_path = path.join(dir_path, file);
            const stat = await fs.stat(file_path);
            if (stat.isFile()) {
                file_names.push(file);
            }
        }

        return file_names;
    } catch (error) {
        throw error;
    }
}

/**
 * Registers a file in the database.
 * @async
 * @function
 * @param {string} sha_256 - The SHA-256 hash of the file.
 * @param {string} file_name - The name of the file.
 * @param {string} file_path - The path of the file.
 * @throws {Error} If sha_256 is empty.
 * @returns {Promise<number>} The ID of the inserted file.
 */
async function register_file(sha_256, file_name, file_path) {
    try {
        if (sha_256 === '') {
            throw new Error('sha256 is empty');
        }
        const result = await query({
            sql: `
            INSERT INTO Files (sha256, FileName, Path)
            VALUES (?, ?, ?);
            `,
            values: [sha_256, file_name, file_path,],
        });
        return result.insertId;
    } catch (error) {
        throw error;
    }
}

/**
 * Unregisters a file with the given sha256 hash from the database.
 * @async
 * @function unregister_file
 * @param {string} sha_256 - The sha256 hash of the file to unregister.
 * @throws {Error} If sha256 is empty.
 * @throws {Error} If there is an error unregistering the file.
 * @returns {Promise} A Promise that resolves with the result of the query.
 */
async function unregister_file(sha_256) {
    try {
        if (sha_256 === '') {
            throw new Error('sha256 is empty');
        }
        const result = await query({
            sql: `
            DELETE FROM Files
            WHERE sha256 = ?;
            `,
            values: [sha_256],
        });
        return result;
    } catch (error) {
        throw error;
    }
}


/**
 * Modifies the permission of a file with the given sha256 hash.
 * @async
 * @function modify_file_permission
 * @param {string} sha_256 - The sha256 hash of the file to modify.
 * @param {number} UID - The user ID to set for the file.
 * @param {number} GroupID - The group ID to set for the file.
 * @param {number} PermissionID - The permission ID to set for the file.
 * @param {number} Priority - The priority to set for the file.
 * @throws {Error} If sha256 is empty.
 * @throws {Error} If there is an error executing the SQL query.
 * @returns {Promise<number>} The ID of the inserted row.
 */
async function modify_file_permission(sha_256, UID, GroupID, PermissionID, Priority) {
    if (sha_256 === '') {
        throw new Error('sha256 is empty');
    }
    try {
        const result = await query({
            sql: `
            UPDATE File_Permission
            SET UID = IF(sha256 <> '', ?, UID),
                GroupID = IF(sha256 <> '', ?, GroupID),
                PermissionID = IF(sha256 <> '', ?, PermissionID),
                Priority = IF(sha256 <> '', ?, Priority)
            WHERE sha256 = ?;            
            `,
            values: [UID, GroupID, PermissionID, Priority, sha_256],
        });
        return result.insertId;

    } catch (error) {
        throw error;
    }
}

async function get_file_permission(sha_256) {
    try {
        if (sha_256 === '') {
            throw new Error('sha256 is empty');
        }
        const result = await query({
            sql: `
            SELECT UID, GroupID, PermissionID, Priority
            FROM File_Permission
            WHERE sha256 = ?;
            `,
            values: [sha_256],
        });
        return result;
    } catch (error) {
        throw error;
    }
}

/**
 * Returns a list of folders in the specified directory path.
 * @param {string} dir_path - The path of the directory to search for folders.
 * @returns {Promise<Array<string>>} - A promise that resolves to an array of folder names.
 * @throws {Error} - If there was an error reading the directory.
 */
async function get_folder_list(dir_path) {
    try {
        const files = await fs.readdir(dir_path);
        const folders = [];

        for (const file of files) {
            const file_path = path.join(dir_path, file);
            const stat = await fs.stat(file_path);

            if (stat.isDirectory()) {
                folders.push(file);
            }
        }

        return folders;
    } catch (error) {
        throw error;
    }
}

/**
 * Modifies the file information in the database for a given sha256 hash.
 * @async
 * @function modify_file_info
 * @param {string} sha_256 - The sha256 hash of the file.
 * @param {string} format - The format of the file.
 * @param {number} size - The size of the file.
 * @param {number} mode - The mode of the file.
 * @param {Date} mod_time - The modification time of the file.
 * @param {Date} access_time - The access time of the file.
 * @param {Date} create_time - The creation time of the file.
 * @param {number} file_size - The file size of the file.
 * @param {number} disk_usage - The disk usage of the file.
 * @param {string} path - The path of the file.
 * @param {number} owner_uid - The owner uid of the file.
 * @returns {Promise} - Returns a Promise that resolves with the result of the query.
 * @throws {Error} - Throws an error if sha256 is empty.
 */
async function modify_file_info(sha_256, format, size, mode, mod_time, access_time, create_time, file_size, disk_usage, path, owner_uid) {
    try {
        if (sha_256 === '') {
            throw new Error('sha256 is empty');
        }
        const result = await query({
            sql: `
                    UPDATE file_info 
                    SET format = IF(sha256 <> '', ?, format),
                        size = IF(sha256 <> '', ?, size),
                        mode = IF(sha256 <> '', ?, mode),
                        mod_time = IF(sha256 <> '', ?, mod_time),
                        access_time = IF(sha256 <> '', ?, access_time),
                        create_time = IF(sha256 <> '', ?, create_time),
                        file_size = IF(sha256 <> '', ?, file_size),
                        disk_usage = IF(sha256 <> '', ?, disk_usage),
                        path = IF(sha256 <> '', ?, path),
                        owner_uid = IF(sha256 <> '', ?, owner_uid)
                    WHERE sha256 = ?;
                `
            ,
            values: [format, size, mode, mod_time, access_time, create_time, file_size, disk_usage, path, owner_uid, sha_256],
        });
        // if without sha256, throw error
        return result;


    }
    catch (error) {
        throw error;
    }
}

/**
 * Retrieves file information from the database based on the SHA-256 hash value.
 * @async
 * @function get_file_info
 * @param {string} sha_256 - The SHA-256 hash value of the file.
 * @throws {Error} If the sha_256 parameter is empty.
 * @returns {Promise<Object>} An object containing the file information, including format, size, mode, mod_time, access_time, create_time, file_size, disk_usage, path, and owner_uid.
 */
async function get_file_info(sha_256) {
    try {
        if (sha_256 === '') {
            throw new Error('sha256 is empty');
        }
        const result = await query({
            sql: `
            SELECT format, size, mode, mod_time, access_time, create_time, file_size, disk_usage, path, owner_uid
            FROM file_info
            WHERE sha256 = ?;
            `,
            values: [sha_256],
        });
        return result;
    } catch (error) {
        throw error;
    }
}


/**
 * Modifies the link info file with the given sha256 and status.
 * @async
 * @function modify_link_info_file
 * @param {string} sha_256 - The sha256 value of the file to modify.
 * @param {string} statu - The status to set for the file.
 * @throws {Error} If sha256 is empty.
 * @returns {Promise} A Promise that resolves with the result of the update query.
 */
async function modify_link_info_file(sha_256, statu) {
    try {
        if (sha_256 === '') {
            throw new Error('sha256 is empty');
        }
        const result = await query({
            sql: `
                    UPDATE link_info_file 
                    SET unlink = IF(sha256 <> '', ?, unlink)
                    WHERE sha256 = ?;
                `
            ,
            values: [statu, sha_256],
        });
        return result;
    }

    catch (error) {
        throw error;
    }
}

/**
 * Retrieves the unlink information for a file with the given SHA-256 hash.
 * @async
 * @function get_link_info_file
 * @param {string} sha_256 - The SHA-256 hash of the file to retrieve unlink information for.
 * @throws {Error} If the SHA-256 hash is empty.
 * @returns {Promise<Object>} A Promise that resolves with the unlink information for the file.
 */
async function get_link_info_file(sha_256) {
    try {
        if (sha_256 === '') {
            throw new Error('sha256 is empty');
        }
        const result = await query({
            sql: `
            SELECT unlink
            FROM link_info_file
            WHERE sha256 = ?;
            `,
            values: [sha_256],
        });
        return result;
    }
    catch (error) {
        throw error;
    }
}

/**
 * Modifies the metadata of a source file in the database.
 * @async
 * @function modify_source_file
 * @param {string} sha_256 - The SHA-256 hash of the file to modify.
 * @param {string} author_uid - The UID of the author of the file.
 * @param {string} capture_date - The date the file was captured.
 * @param {string} program_name - The name of the program used to capture the file.
 * @param {string} acquire_date - The date the file was acquired.
 * @param {string} copy_right - The copyright information of the file.
 * @throws {Error} If sha_256 is empty.
 * @returns {Promise<Object>} The result of the query.
 */
async function modify_source_file(sha_256, author_uid, capture_date, program_name, acquire_date, copy_right) {
    try {
        if (sha_256 === '') {
            throw new Error('sha256 is empty');
        }
        const result = await query({
            sql: `
                    UPDATE sources_file 
                    SET author_uid = IF(sha256 <> '', ?, author_uid),
                        capture_date = IF(sha256 <> '', ?, capture_date),
                        program_name = IF(sha256 <> '', ?, program_name),
                        acquire_date = IF(sha256 <> '', ?, acquire_date),
                        copy_right = IF(sha256 <> '', ?, copy_right)
                    WHERE sha256 = ?;
                `
            ,
            values: [author_uid, capture_date, program_name, acquire_date, copy_right, sha_256],
        });
        return result;
    }
    catch (error) {
        throw error;
    }
}

/**
 * Retrieves source file information from the database based on the provided SHA-256 hash.
 * @async
 * @function get_source_file
 * @param {string} sha_256 - The SHA-256 hash of the source file to retrieve.
 * @throws {Error} Will throw an error if the provided SHA-256 hash is empty.
 * @returns {Promise<Object>} Returns a Promise that resolves with an object containing the author UID, capture date, program name, acquire date, and copy right of the source file.
 */
async function get_source_file(sha_256) {
    try {
        if (sha_256 === '') {
            throw new Error('sha256 is empty');
        }
        const result = await query({
            sql: `
            SELECT author_uid, capture_date, program_name, acquire_date, copy_right
            FROM sources_file
            WHERE sha256 = ?;
            `,
            values: [sha_256],
        });
        return result;
    }
    catch (error) {
        throw error;
    }
}


/**
 * Moves a file from the source path to the target path.
 * @async
 * @function move_file
 * @param {string} source - The path of the source file.
 * @param {string} target - The path of the target file.
 * @throws {Error} If there is an error while renaming the file.
 */
async function move_file(source, target) {
    try {
        await fs.rename(source, target);
    } catch (error) {
        throw error;
    }
}

/**
 * Modifies the delete info file with the given sha256 and status.
 * @async
 * @function modify_delete_info_file
 * @param {string} sha_256 - The sha256 of the file to modify.
 * @param {boolean} status - The status to set for the file.
 * @throws {Error} If sha256 is empty.
 * @returns {Promise} A Promise that resolves with the result of the update query.
 */
async function modify_delete_info_file(sha_256,status) {
    try {
        if (sha_256 === '') {
            throw new Error('sha256 is empty');
        }
        const result = await query({
            sql: `
                    UPDATE delete_info_file 
                    SET isdelete = IF(sha256 <> '', ?, isdelete)
                    WHERE sha256 = ?;
                `
            ,
            values: [status, sha_256],
        });
        return result;
    }
    catch (error) {
        throw error;
    }
}

/**
 * Retrieves the delete information for a file with the given SHA-256 hash.
 * @async
 * @function
 * @param {string} sha_256 - The SHA-256 hash of the file to retrieve delete information for.
 * @throws {Error} Will throw an error if the sha_256 parameter is empty.
 * @returns {Promise<Object>} A Promise that resolves with the delete information for the file.
 */
async function get_delete_info_file(sha_256) {
    try {
        if (sha_256 === '') {
            throw new Error('sha256 is empty');
        }
        const result = await query({
            sql: `
            SELECT isdelete
            FROM delete_info_file
            WHERE sha256 = ?;
            `,
            values: [sha_256],
        });
        return result;
    }
    catch (error) {
        throw error;
    }
}


/**
 * Modifies the documents file with the given sha256 hash.
 * @async
 * @function modify_documents_file
 * @param {string} sha_256 - The sha256 hash of the file to modify.
 * @param {string} title - The new title of the file.
 * @param {string} subject - The new subject of the file.
 * @param {string} classification - The new classification of the file.
 * @param {string} label - The new label of the file.
 * @param {string} remarks - The new remarks of the file.
 * @throws {Error} If sha256 is empty.
 * @returns {Promise} A Promise that resolves with the result of the query.
 */
async function modify_documents_file(sha_256, title, subject, classification, label, remarks) {
    try {
        if (sha_256 === '') {
            throw new Error('sha256 is empty');
        }
        const result = await query({
            sql: `
                    UPDATE documents_file 
                    SET title = IF(sha256 <> '', ?, title),
                        subject = IF(sha256 <> '', ?, subject),
                        classification = IF(sha256 <> '', ?, classification),
                        label = IF(sha256 <> '', ?, label),
                        remarks = IF(sha256 <> '', ?, remarks)
                    WHERE sha256 = ?;
                `
            ,
            values: [title, subject, classification, label, remarks, sha_256],
        });
        return result;
    }
    catch (error) {
        throw error;
    }
}

/**
 * Retrieves document file information from the database based on the provided sha256 hash.
 * @async
 * @function
 * @param {string} sha_256 - The sha256 hash of the document file to retrieve.
 * @throws {Error} Will throw an error if the sha256 parameter is empty.
 * @returns {Promise<Object>} Returns a Promise that resolves with an object containing the title, subject, classification, label, and remarks of the document file.
 */
async function get_documents_file(sha_256) {
    try {
        if (sha_256 === '') {
            throw new Error('sha256 is empty');
        }
        
        const result = await query({
            sql: `
            SELECT title, subject, classification, label, remarks
            FROM documents_file
            WHERE sha256 = ?;
            `,
            values: [sha_256],
        });
        return result;
    }
    catch (error) {
        throw error;
    }
}


/**
 * Moves a file from a source directory to a target directory.
 * @param {string} source - The path to the source file.
 * @param {string} target_dir - The path to the target directory.
 * @throws {Error} If there is an error moving the file.
 */
async function cut_file(source, target_dir) {
    try {
        const file_name = path.basename(source);
        const target = path.join(target_dir, file_name);

        await move_file(source, target);
    } catch (error) {
        throw error;
    }
}

/**
 * Moves a folder from the source path to the target path.
 * @param {string} source - The path of the folder to be moved.
 * @param {string} target - The path where the folder will be moved to.
 * @throws {Error} If an error occurs while moving the folder.
 */
async function move_folder(source, target) {
    try {
        await fs.rename(source, target);
    } catch (error) {
        throw error;
    }
}

/**
 * Moves a folder from the source directory to the target directory.
 * @param {string} source - The path to the source folder.
 * @param {string} target_dir - The path to the target directory.
 * @throws {Error} If an error occurs while moving the folder.
 */
async function cut_folder(source, target_dir) {
    try {
        const folder_name = path.basename(source);
        const target = path.join(target_dir, folder_name);

        await move_folder(source, target);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create_dir,
    check_dir_exists,
    check_file_exists,
    
    copy_file,
    delete_file,
    delete_dir,
    get_file_list,
    move_file,
    move_folder,
    get_folder_list,
    cut_file,
    cut_folder,
    // file access
    register_file,
    unregister_file,
    modify_file_permission,
    get_file_permission,
    modify_file_info,
    get_file_info,
    modify_link_info_file,
    get_link_info_file,
    modify_delete_info_file,
    get_delete_info_file,
    modify_documents_file,
    get_documents_file,
    modify_source_file,
    get_source_file,
};