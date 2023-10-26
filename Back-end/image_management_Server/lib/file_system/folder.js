const fs = require('fs').promises;
const path = require('path');
const query = require('../datasource/mysql_connection_promise');
const { create_dir, check_dir_exists } = require('./file');

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
        await check_dir_exists(Path);
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

module.exports = {
    createFolder
}
