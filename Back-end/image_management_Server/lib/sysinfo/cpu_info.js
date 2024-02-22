// @ts-nocheck
const os = require('os');
const si = require('systeminformation');
const osu = require('os-utils');
const axios = require('axios');
const { apiTarget } = require('../config');
function cpuUsage() {
  return new Promise((resolve) => {
    osu.cpuUsage((v) => {
      resolve(v * 100);
    });
  });
}

async function organizeGPUInfo(gpuInfo) {
  // 将GPU信息转换为JSON对象
  const gpuData = JSON.parse(gpuInfo.gpu_info);

  // 重新整理GPU信息
  const organizedInfo = gpuData.map((gpu) => {
    return {
      name: gpu.name,
      gpu_id: gpu.gpu_id,
      total_memory: gpu.total_memory,
      free_memory: gpu.free_memory,
      used_memory: gpu.used_memory,
      temperature: gpu.temperature,
      utilization: gpu.utilization
    };
  });

  return organizedInfo;
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
  const gpu_info = await axios.get(apiTarget + '/get_all_gpus').then(response => {
    return organizeGPUInfo(response.data);
  }).catch(error => {
    console.error(error);
  });

  // append vram info

  if (logable == true) {
    console.log("—————— DEBUG LOG ——————");
    console.log('               ');
    console.log("module :", module.exports.name);
    /*area */
    console.log(`CPU使用率: ${cpuPercent ? cpuPercent.toFixed(2) : 'N/A'}%`);
    console.log(`内存使用率: ${memoryPercent.toFixed(2)}%`);
    console.log(`核心使用率: ${coresPercent.map(percent => percent.toFixed(2)).join(', ')}`);
    console.log(`CPU频率: ${cpuFreq}MHz`);
    console.log(`CPU温度: ${cpuTemp.main ? cpuTemp.main.toFixed(2) : 'N/A'}°C`);
    console.log(`CPU名称: ${cpuBrand}`); // 打印CPU名称
    console.log('               ');
    console.log(gpu_info);
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
    cpuBrand: cpuBrand, // 返回CPU名称
    gpu_info: gpu_info
  };
}
module.exports = cpu_statu_info;