// @ts-nocheck
const os = require('os');
const si = require('systeminformation');
const osu = require('os-utils');

function cpuUsage() {
  return new Promise((resolve) => {
    osu.cpuUsage((v) => {
      resolve(v * 100);
    });
  });
}


async function cpu_statu_info(logable = false) {
  const cpuInfo = await si.cpu();
  const memInfo = await si.mem();
  const cpuTemp = await si.cpuTemperature();

  const cpuPercent = await cpuUsage();
  const actualUsedMemory = memInfo.used - memInfo.buffcache;
  const memoryPercent = actualUsedMemory / memInfo.total * 100;
  const coresPercent = await si.currentLoad().then(data => data.cpus.map(cpu => cpu.load)).catch(() => [0]);
  const cpuFreq = cpuInfo.speed;
  const cpuBrand = cpuInfo.brand; // 获取CPU名称
    // append vram info

  if (logable==true) {
    console.log("—————— DEBUG LOG ——————");
    console.log('               ');
    console.log("module :",module.exports.name);
    /*area */
    console.log(`CPU使用率: ${cpuPercent ? cpuPercent.toFixed(2) : 'N/A'}%`);
    console.log(`内存使用率: ${memoryPercent.toFixed(2)}%`);
    console.log(`核心使用率: ${coresPercent.map(percent => percent.toFixed(2)).join(', ')}`);
    console.log(`CPU频率: ${cpuFreq}MHz`);
    console.log(`CPU温度: ${cpuTemp.main ? cpuTemp.main.toFixed(2) : 'N/A'}°C`);
    console.log(`CPU名称: ${cpuBrand}`); // 打印CPU名称
    /*area */
    console.log('               ');
    console.log("———————————————");
    console.log('               ');

  }

  return {
    cpuPercent: cpuPercent ? cpuPercent.toFixed(2) : 'N/A',
    memoryPercent: memoryPercent.toFixed(2),
    coresPercent: coresPercent.map(percent => percent.toFixed(2)).join(', '),
    cpuFreq: cpuFreq,
    cpuTemp: cpuTemp.main ? cpuTemp.main.toFixed(2) : 'N/A',
    cpuBrand: cpuBrand // 返回CPU名称
  };
}
module.exports = cpu_statu_info;