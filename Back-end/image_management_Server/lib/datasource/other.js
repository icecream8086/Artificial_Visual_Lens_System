/**
 * @param {number} bytes
 */
function bytesToMB(bytes) {
    const MB = bytes / (1024 * 1024);
    return MB.toFixed(2);
}

// const fileSizeInBytes = 87163934;
// const fileSizeInMB = bytesToMB(fileSizeInBytes);

// console.log(`${fileSizeInBytes} bytes is equal to ${fileSizeInMB} MB`);

module.exports = {
    bytesToMB
};
