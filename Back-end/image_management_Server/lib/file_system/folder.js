// @ts-nocheck
const fs = require('fs').promises;
const path = require('path');
const query = require('../datasource/mysql_connection_promise');
const { create_dir, check_dir_not_exists, check_dir_exists, rename_dir, delete_dir } = require('./file');
const { get_str_sha256 } = require('../hash/str_sha256');
const { reject, result } = require('lodash');
/**
 * Creates a new folder with the given folder name and path, and inserts its details into the Folders table in the database.
 * @param {string} sha256 - The sha256 hash of the folder.
 * @param {string} folderName - The name of the folder to be created.
 * @param {string } Path - The path where the folder is to be created.
 * @param {string} dataset_zone - The dataset zone where the folder belongs.
 * @returns {Promise} - A Promise that resolves with the result of the database query.
 * @throws {Error} - If there is an error while creating the folder or inserting its details into the database.
 */
async function createFolder(sha256, folderName, Path, dataset_zone) {
    try {
        await check_dir_not_exists(Path);
        await create_dir(Path);
        let sql = `INSERT INTO Folders (sha256,FolderName,Path,dataset_zone) VALUES (?,?,?,?)`;
        let params = [sha256, folderName, Path, dataset_zone];
        let result = await query(sql, params);
        return result;
    }
    catch (err) {
        throw err;
    }
}

/**
 * Retrieves the folder name from the database based on the sha256 hash or path.
 * @async
 * @function
 * @param {string} sha256 - The sha256 hash of the file.
 * @param {string} path - The path of the file.
 * @throws {Error} Will throw an error if sha256 or path is empty.
 * @returns {Promise<string>} The folder name associated with the sha256 hash or path.
 */
async function get_folder_name(sha256, path) {
    try {
        if (sha256 === '' || path === '') {
            throw new Error('sha256 cannot be empty');
        }
        let sql = `SELECT FolderName FROM Folders WHERE sha256 = ? OR Path = ?`;
        let params = [sha256, path];
        let result = await query(sql, params);
        return result;
    } catch (err) {
        throw err;
    }
}

/**
 * Retrieves the path of a folder from the database based on its sha256 hash or path.
 * @async
 * @function get_folder_path
 * @param {string} sha256 - The sha256 hash of the folder.
 * @param {string} path - The path of the folder.
 * @returns {Promise<Array>} - A promise that resolves to an array of objects containing the folder path.
 * @throws {Error} - Throws an error if there was a problem with the database query.
 */
async function get_folder_path(sha256, path) {
    try {
        let sql = `SELECT Path FROM Folders WHERE sha256 = ? OR Path = ?`;
        let params = [sha256, path];
        let result = await query(sql, params);
        return result;
    } catch (err) {
        throw err;
    }
}

/**
 * Modifies a folder in the database with the given sha256 hash.
 * @async
 * @function modify_folder
 * @param {string} sha256 - The sha256 hash of the folder to modify.
 * @param {string} folderName - The new name for the folder.
 * @param {string} Path - The new path for the folder.
 * @param {string} dataset_zone - The new dataset zone for the folder.
 * @throws {Error} If sha256 is empty.
 * @returns {Promise} A Promise that resolves with the result of the database query.
 */
async function modify_folder(sha256, folderName, Path, dataset_zone) {
    try {
        if (sha256 === '') {
            throw new Error('sha256 cannot be empty');
        }
        if (Path !== '') {
            await check_dir_not_exists(Path);
            await create_dir(Path);
        }
        await rename_dir(Path, folderName);
        let sql = `UPDATE Folders SET FolderName = ?, Path = ?, dataset_zone = ? WHERE sha256 = ?`;
        let params = [folderName, Path, dataset_zone, sha256];
        let result = await query(sql, params);
        return result;
    } catch (err) {
        throw err;
    }
}


/**
 * Removes a folder from the specified path and deletes its entry from the database.
 * @async
 * @function Remove_Folder
 * @param {string} FolderName - The name of the folder to be removed.
 * @param {string} Path - The path of the folder to be removed.
 * @throws {Error} Throws an error if the folder does not exist or if there is an error deleting the folder from the database.
 * @returns {Promise} Returns a Promise that resolves with the result of the query to delete the folder from the database.
 */
/**
 * Removes a folder from the specified path.
 * @async
 * @function Remove_Folder
 * @param {string} FolderName - The name of the folder to be removed.
 * @param {string} Path - The path of the folder to be removed.
 * @throws {Error} If an error occurs while removing the folder.
 * @returns {Promise} A Promise that resolves with the result of the removal operation.
 */
async function Remove_Folder(FolderName, Path) {
    try {
        await check_dir_exists(Path);
        await delete_dir(Path);
        let sql = `DELETE FROM Folders WHERE FolderName = ? OR Path = ?`;
        let params = [FolderName, Path];
        let result = await query(sql, params);
        return result;
    }
    catch (err) {
        throw err;
    }
}

/**
 * Modify folder permission for a given sha256 hash
 * @async
 * @function modify_Folder_Permission
 * @param {string} sha256 - The sha256 hash of the folder
 * @param {number} UID - The user ID to set permission for
 * @param {number} GroupID - The group ID to set permission for
 * @param {number} PermissionID - The permission ID to set
 * @param {number} Priority - The priority of the permission
 * @throws {Error} If sha256 is empty or folder does not exist
 * @returns {Promise} Resolves with the result of the update query
 */
async function modify_Folder_Permission(sha256, UID, GroupID, PermissionID, Priority) {
    try {
        if (sha256 === '') {
            throw new Error('sha256 cannot be empty');
        }
        const result = await
            query(`
            UPDATE Folder_Permission
            SET UID = ?, GroupID = ?, PermissionID = ?, Priority = ?
            WHERE sha256 = ? 
        `, [UID, GroupID, PermissionID, Priority, sha256]);
        if (result.length === 0) {
            throw new Error('Folder does not exist');
        }

        return result;
    }
    catch (err) {
        throw err;
    }
}


/**
 * Retrieves the folder permission for a given sha256 value.
 * @async
 * @function get_Folder_Permission
 * @param {string} sha256 - The sha256 value of the folder.
 * @throws {Error} If sha256 is empty or folder does not exist.
 * @returns {Promise<Array>} An array of folder permission objects.
 * @throws {Error} If an error occurs while querying the database.
 */
async function get_Folder_Permission(sha256) {
    try {
        if (sha256 === '') {
            throw new Error('sha256 cannot be empty');
        }
        const result = await
            query(`
            SELECT * FROM Folder_Permission
            WHERE sha256 = ? 
        `, [sha256]);
        if (result.length === 0) {
            throw new Error('Folder does not exist');
        }

        return result;
    }
    catch (err) {
        throw err;
    }
}


/**
 * Retrieves information about a folder to be deleted based on its sha256 hash.
 * @async
 * @function
 * @param {string} sha256 - The sha256 hash of the folder to be deleted.
 * @throws {Error} Will throw an error if sha256 is empty or if the folder does not exist.
 * @returns {Promise<Array>} Returns a promise that resolves to an array of folder permission objects.
 */
async function get_delete_info_folder(sha256) {
    try {
        if (sha256 === '') {
            throw new Error('sha256 cannot be empty');
        }
        await check_dir_exists();
        const result = await
            query(`
            SELECT * FROM Folder_Permission
            WHERE sha256 = ? 
        `, [sha256]);
        if (result.length === 0) {
            throw new Error('Folder does not exist');
        }

        return result;
    }
    catch (err) {
        throw err;
    }
}

/**
 * Sets the delete info for a folder with the given sha256 hash.
 * @async
 * @function set_delete_info_folder
 * @param {string} sha256 - The sha256 hash of the folder to set delete info for.
 * @param {boolean} delete_info - The delete info to set for the folder.
 * @throws {Error} If sha256 is empty or folder does not exist.
 * @returns {Promise} A Promise that resolves with the result of the update query.
 */
async function set_delete_info_folder(sha256, delete_info) {
    try {
        if (sha256 === '') {
            throw new Error('sha256 cannot be empty');
        }
        await check_dir_exists();
        const result = await
            query(`
            UPDATE delete_info_folder
            SET isdelete = ?
            WHERE sha256 = ? 
        `, [delete_info, sha256]);
        if (result.length === 0) {
            throw new Error('Folder does not exist');
        }

        return result;
    }
    catch (err) {
        throw err;
    }
}

async function link_info_folder(sha256, unlink) {
    try {
        if (sha256 === '') {
            throw new Error('sha256 cannot be empty');
        }
        await check_dir_exists();
        const result = await
            query(`
                UPDATE link_info_folder
                SET unlink = ?
                WHERE sha256 = ? 
            `, [unlink, sha256]);
        if (result.length === 0) {
            throw new Error('Folder does not exist');
        }
        return result;
    }
    catch (err) {
        throw err;
    }
}

async function get_link_info_folder(sha256) {
    try {
        if (sha256 === '') {
            throw new Error('sha256 cannot be empty');
        }
        await check_dir_exists();
        const result = await
            query(`
            SELECT * FROM link_info_folder
            WHERE sha256 = ? 
        `, [sha256]);
        if (result.length === 0) {
            throw new Error('Folder does not exist');
        }
        return result;
    }
    catch (err) {
        throw err;
    }
}

/**
 * Modifies the documents folder with the given sha256 hash.
 * @async
 * @function modify_documents_folder
 * @param {string} sha256 - The sha256 hash of the folder to modify.
 * @param {string} title - The new title of the folder.
 * @param {string} subject - The new subject of the folder.
 * @param {string} classification - The new classification of the folder.
 * @param {string} label - The new label of the folder.
 * @param {string} remarks - The new remarks of the folder.
 * @throws {Error} If sha256 is empty or folder does not exist.
 * @returns {Promise} A Promise that resolves with the result of the update query.
 */
async function modify_documents_folder(sha256, title, subject, classification, label, remarks) {
    try {
        if (sha256 === '') {
            throw new Error('sha256 cannot be empty');
        }
        const result = await
            query(`
            UPDATE documents_folder
            SET title = ?, subject = ?, classification = ?, label = ?, remarks = ?
            WHERE sha256 = ? 
        `, [title, subject, classification, label, remarks, sha256]);
        if (result.length === 0) {
            throw new Error('Folder does not exist');
        }

        return result;
    }
    catch (err) {
        throw err;
    }
}

/**
 * Retrieves the documents folder with the given sha256 hash.
 * @async
 * @function
 * @param {string} sha256 - The sha256 hash of the folder to retrieve.
 * @throws {Error} If sha256 is empty or if the folder does not exist.
 * @returns {Promise<Object[]>} A promise that resolves to an array of objects representing the retrieved folder.
 */
async function get_documents_folder(sha256) {
    try {
        if (sha256 === '') {
            throw new Error('sha256 cannot be empty');
        }
        const result = await
            query(`
            SELECT * FROM documents_folder
            WHERE sha256 = ? 
        `, [sha256]);
        if (result.length === 0) {
            throw new Error('Folder does not exist');
        }

        return result;
    }
    catch (err) {
        throw err;
    }
}


/**
 * Checks if the given SHA256 values exist in the folders.
 * @param {Object} dict_kv_sha256 - The key-value pairs of file names and their corresponding SHA256 values.
 * @returns {Object} - The key-value pairs of file names and their corresponding SHA256 values that do not exist in the folders.
 * @throws {Error} - If an error occurs during the process.
 */
async function check_folder_sha256_exists(dict_kv_sha256) {
    try {
        let values = Object.values(dict_kv_sha256);
        if (values.length === 0) {
            return {};
        }
        //临时视图,上传list中的sha256

        let viewName = `View_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
        let valuesSql = values.map(value => `SELECT '${value}' AS sha256`).join(' UNION ALL ');

        let createSql = `CREATE VIEW ${viewName} AS ${valuesSql}`;
        await query(createSql);

        let selectSql = `SELECT V.sha256 FROM ${viewName} V LEFT JOIN Folders F ON F.sha256 = V.sha256 WHERE F.sha256 IS NULL`;
        let result = await query(selectSql);

        let dropSql = `DROP VIEW ${viewName}`;
        await query(dropSql);
        let notExistInFolders = {};
        let resultSet = new Set(result.map(item => item.sha256));
        for (let key in dict_kv_sha256) {
            if (resultSet.has(dict_kv_sha256[key])) {
                notExistInFolders[key] = dict_kv_sha256[key];
            }
        }
        return notExistInFolders;

    } catch (err) {
        reject(err);
    }
}


/**
 * Splits the folder information from the given file path.
 * @param {string} file_path - The file path to split.
 * @returns {Promise<Object>} - A promise that resolves to an object containing the folder information.
 */
async function split_folder_info( file_path) {
    let paths = file_path.split('/');
    let path_head = paths.slice(0, 3);
    path_head = path_head.join('/');
    paths = paths.slice(3, -1);
    let result={};
    let dict_kv_folder_absolute = {};
    let fullPath = "";

    for (let path of paths) {
        fullPath += "/" + path;
        if (!dict_kv_folder_absolute[path]) {
            dict_kv_folder_absolute[path] = path_head + fullPath;
        }
    }
    let promises_get_sha = Object.entries(dict_kv_folder_absolute).map(async ([key, value]) => {
        let sha256 = await get_str_sha256(value);
        return [key, sha256];
    });
    try {
    
        let newDictEntries = await Promise.all(promises_get_sha);
        let dict_kv_sha256 = Object.fromEntries(newDictEntries);
        let difference= await check_folder_sha256_exists(dict_kv_sha256);
        for (let key in difference){
           if(key in dict_kv_folder_absolute){
               result[key]=dict_kv_folder_absolute[key];
           }
        }
        dict_kv_folder_absolute = result;
        result={};
        for(let key in difference){
            if(key in dict_kv_sha256){
                result[key]=[dict_kv_folder_absolute[key],dict_kv_sha256[key]];
            }
        }        
        return result;
    }
    catch (err) {
        reject(err);
    }
}

async function register_folder(file_path,UID,GroupID,permission,Priority) {
    /*权限默认继承自父级文件夹 */
  
    let reg_sql=`INSERT INTO Folders (sha256,FolderName,Path) VALUES (?,?,?)`;
    let mod_sql=`UPDATE Folder_Permission SET UID=?,GroupID=?,PermissionID=?,Priority=? WHERE sha256=?`;
    if (result.length === 0) {
       reject(new Error('Folder does not exist'));
    }
    if(UID===undefined||GroupID===undefined){
        reject(new Error('UID or GroupID cannot be empty'));
    }
    try {
        for(let key in file_path){
            let path=file_path[key][0];
            let sha256=file_path[key][1];
            let folderName=key;
            await query(reg_sql,[sha256,folderName,path]);
            await query(mod_sql,[UID,GroupID,permission,Priority,sha256]);
        }
    }
    catch (err) {
        reject(err);
    }
}


module.exports = {
    createFolder,
    Remove_Folder,
    modify_folder,
    get_folder_name,
    get_folder_path,
    modify_Folder_Permission,
    get_Folder_Permission,
    get_delete_info_folder,
    set_delete_info_folder,
    link_info_folder,
    get_link_info_folder,
    modify_documents_folder,
    get_documents_folder,
    split_folder_info,
    check_folder_sha256_exists,
    register_folder

}
