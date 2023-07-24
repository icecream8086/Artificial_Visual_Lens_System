const os = require('os');

function monitorOsInfo() {
    // 获取主机名
    const hostname = os.hostname();
    const osName = os.platform();
    const osRelease = os.release();

    // 获取服务器当前时间
    const currentTime = new Date().toLocaleString();

    // 获取程序运行时长
    const startTime = process.hrtime();
    // 模拟程序运行时长
    // ...
    const endTime = process.hrtime(startTime);
    const runTime = endTime[0] + endTime[1] / 1e9;

    console.log("主机名：", hostname);
    console.log("操作系统名：", osName, osRelease);
    console.log("服务器当前时间：", currentTime);
    console.log("程序运行时长：", runTime, "秒");
}

module.exports = monitorOsInfo;