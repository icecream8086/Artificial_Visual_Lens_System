const publicPath = './File_Stream/File_Block';
const fs = require('fs');
const { reject } = require('lodash');
const multer = require('multer');
const path = require('path');

async function listFiles(dirPath) {
    let fileList = [];
    try {
        let files = fs.readdirSync(dirPath);

        for (let file of files) {
            let filePath = path.join(dirPath, file);
            let stats = fs.statSync(filePath);

            if (stats.isFile()) {
                fileList.push({
                    type: 'file',
                    name: file,
                    path: filePath
                });
            }
        }
    } catch (error) {
        reject(error);
        console.error(`Error while listing files in ${dirPath}: ${error.message}`);
    }

    return fileList;
}

async function listFolders(dirPath) {
    let folderList = [];

    try {
        let items = fs.readdirSync(dirPath);

        for (let item of items) {
            let itemPath = path.join(dirPath, item);
            let stats = fs.statSync(itemPath);

            if (stats.isDirectory()) {
                folderList.push({
                    type: 'folder',
                    name: item,
                    path: itemPath
                });
                folderList = folderList.concat(await listFolders(itemPath)); // Recursively list subfolders
            }
        }
    } catch (error) {
        reject(error);
        console.error(`Error while listing folders in ${dirPath}: ${error.message}`);
    }

    return folderList;
}

module.exports = {
    listFiles,
    listFolders
}
