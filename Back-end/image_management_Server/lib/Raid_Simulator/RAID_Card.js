/**
 * This module contains functions for simulating RAID cards and copying files from a source folder to multiple target folders.
 * @module RAID_Card
 */

/**
 * Copies all files from a source folder to multiple target folders.
 * @async
 * @function copyFiles
 * @returns {Promise<void>} - A Promise that resolves when all files have been copied successfully, or rejects with an error if the copy operation fails.
 */

/**
 * Simulates RAID 0 by copying files from a source folder to multiple target folders in chunks.
 * @async
 * @function raid_zero
 * @returns {Promise<void>} - A Promise that resolves when all files have been copied successfully, or rejects with an error if the copy operation fails.
 */

/**
 * Simulates RAID V by copying files from a source folder to multiple target folders in chunks and generating parity information.
 * @async
 * @function Raid_V
 * @returns {Promise<void>} - A Promise that resolves when all files have been copied successfully, or rejects with an error if the copy operation fails.
 */

/**
 * Simulates RAID I by copying files from a source folder to multiple target folders without any redundancy.
 * @async
 * @function raid_I
 * @returns {Promise<void>} - A Promise that resolves when all files have been copied successfully, or rejects with an error if the copy operation fails.
 */
/**
 * Copies all files from a source folder to a target folder.
 * @async
 * @function copyFiles
 * @returns {Promise<void>} - A Promise that resolves when all files have been copied successfully, or rejects with an error if the copy operation fails.
 */
const fs = require('fs').promises;
const path = require('path');

const sourceFolderPath_rz = '/path/source_folder';
const targetFolderPaths_rz = ['/path/target_folder1', '/path/target_folder2', '/path/target_folder3'];

async function raid_zero() {
  try {
    // 读取源文件夹中的所有文件
    const files = await fs.readdir(sourceFolderPath_rz);

    // 遍历文件列表
    for (const file of files) {
      const sourceFilePath = path.join(sourceFolderPath_rz, file);
      const targetFilePaths = targetFolderPaths_rz.map(targetFolder => path.join(targetFolder, file));

      // 读取源文件
      const data = await fs.readFile(sourceFilePath);

      // 分块写入目标文件夹
      const chunkSize = Math.ceil(data.length / targetFolderPaths_rz.length);
      let offset = 0;

      for (let i = 0; i < targetFolderPaths_rz.length; i++) {
        const chunk = data.slice(offset, offset + chunkSize);
        const targetFilePath = targetFilePaths[i];

        // 写入目标文件夹
        await fs.writeFile(targetFilePath, chunk);
        console.log(`Chunk ${i + 1} of file ${file} copied successfully.`);

        offset += chunkSize;
      }
    }
  } catch (err) {
    console.error('Failed to copy files:', err);
  }
}

// raid_zero();

const sourceFolderPath_RV = '/source/folder';
const targetFolders_RV = ['/target/folder1', '/target/folder2', '/target/folder3'];
const parityFolder_RV = '/parity/folder';

async function Raid_V() {
  try {
    // 读取源文件夹中的所有文件
    const files = await fs.readdir(sourceFolderPath_RV);

    // 遍历文件列表
    for (const file of files) {
      const sourceFilePath = path.join(sourceFolderPath_RV, file);
      const targetFilePaths = targetFolders_RV.map(targetFolder => path.join(targetFolder, file));
      const parityFilePath = path.join(parityFolder_RV, file);

      // 读取源文件
      const data = await fs.readFile(sourceFilePath);

      // 计算分块大小
      const chunkSize = Math.floor(data.length / (targetFolders_RV.length + 1));

      // 分块写入目标文件夹
      let offset = 0;

      for (let i = 0; i < targetFolders_RV.length; i++) {
        const chunk = data.slice(offset, offset + chunkSize);
        const targetFilePath = targetFilePaths[i];

        // 写入目标文件夹
        await fs.writeFile(targetFilePath, chunk);
        console.log(`Chunk ${i + 1} of file ${file} copied successfully.`);

        offset += chunkSize;
      }

      // 计算校验信息
      const parityChunk = Buffer.alloc(chunkSize);

      for (let i = 0; i < data.length; i++) {
        parityChunk[i % chunkSize] ^= data[i];
      }

      // 写入校验文件夹
      await fs.writeFile(parityFilePath, parityChunk);
      console.log(`Parity chunk of file ${file} copied successfully.`);
    }
  } catch (err) {
    console.error('Failed to copy files:', err);
  }
}

// Raid_V();


const sourceFolderPath_RI = '/path/source_folder';
const targetFolderPaths_RI = ['/path/target_folder1', '/path/target_folder2'];

async function raid_I() {
  try {
    // 读取源文件夹中的所有文件
    const files = await fs.readdir(sourceFolderPath_RI);

    // 遍历文件列表
    for (const file of files) {
      const sourceFilePath = path.join(sourceFolderPath_RI, file);

      // 读取源文件
      const data = await fs.readFile(sourceFilePath);

      // 写入目标文件夹
      for (const targetFolderPath of targetFolderPaths_RI) {
        const targetFilePath = path.join(targetFolderPath, file);
        await fs.writeFile(targetFilePath, data);
        console.log(`File ${file} copied to ${targetFolderPath} successfully.`);
      }
    }
  } catch (err) {
    console.error('Failed to copy files:', err);
  }
}

// raid_I();

module.exports = {
  raid_zero,
  Raid_V,
  raid_I
};