// @ts-nocheck
const cpu_statu_info = require('../../../lib/sysinfo/cpu_info');
const diskInfo = require('../../../lib/sysinfo/disk_info');
const monitorOsInfo = require('../../../lib/sysinfo/sys_info');

cpu_statu_info().then(data => {
  console.log(data);
}).catch(error => {
  console.error(error);
});

diskInfo().then(data => {
  console.log(data);
}).catch(error => {
  console.error(error);
});

monitorOsInfo(true).then(data => {
  console.log(data);
}).catch(error => {
  console.error(error);
});