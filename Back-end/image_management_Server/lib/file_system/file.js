const fs = require('fs').promises;
const path = require('path');


/**
 * Creates directories at the specified paths.
 * @param  {...string} dir_paths - The paths of the directories to create.
 * @throws {Error} If a directory already exists at the specified path.
 */
async function create_dir(...dir_paths) {
    for (const dir_path of dir_paths) {
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

async function move_file(source, target) {
    try {
        await fs.rename(source, target);
    } catch (error) {
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
    cut_folder
};