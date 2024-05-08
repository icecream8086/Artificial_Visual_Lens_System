// @ts-nocheck

const os = require('os');
const exec = require('child_process').exec;
let DISTRO = 'Unknown Linux Distro';

/**
 * 获取操作系统发行版信息
 * @returns {Promise<string>} 返回一个Promise对象，resolve时返回操作系统发行版信息，reject时返回错误信息
 */
function getDistro() {
    return new Promise((resolve, reject) => {
        exec('lsb_release -a', (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else {
                const lines = stdout.split('\n');
                const descriptionLine = lines.find(line => line.startsWith('Description:'));
                if (descriptionLine) {
                    const distro = descriptionLine.split(':').pop().trim();
                    DISTRO = distro;
                    resolve(distro);
                } else {
                    resolve('无法获取发行版信息');
                }
            }
        });
    });
}

/**
 * 获取操作系统信息
 * @param {boolean} logable - 是否打印日志
 * @returns {Promise<Object>} - 包含主机名、操作系统名、操作系统版本、服务器当前时间、操作系统开机以来的运行时长、操作系统的发行版名称的对象
 */
function monitorOs_Info(logable = false) {
    return new Promise(async (resolve, reject) => {
        const hostname = os.hostname();
        const osName = os.platform();
        const osRelease = os.release();
        const currentTime = new Date().toLocaleString();
        const uptime = os.uptime();
        const osVersion = os.release();
        let distro;
        try {
            distro = DISTRO === 'Unknown Linux Distro' ? await getDistro() : DISTRO;
        } catch (error) {
            distro = '无法获取发行版信息';
        }

        if (logable) {
            console.log("—————— DEBUG LOG ——————");
            console.log('               ');
            console.log("module :", module.exports.name);
            console.log("主机名：", hostname);
            console.log("操作系统名：", osName, osRelease);
            console.log("服务器当前时间：", currentTime);
            console.log("操作系统开机以来的运行时长：", uptime, "秒");
            console.log("操作系统的发行版：", osVersion);
            console.log("操作系统的发行版名称：", distro);
            console.log('               ');
            console.log("———————————————");
            console.log('               ');
        }

        resolve({
            hostname: hostname,
            osName: osName,
            osRelease: osRelease,
            currentTime: currentTime,
            uptime: uptime,
            distro: distro
        });
    });
}

module.exports = monitorOs_Info;