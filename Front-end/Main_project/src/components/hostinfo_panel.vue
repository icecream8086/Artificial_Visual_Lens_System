<template>
  <el-card class="box-card">
    <p><el-text class="mx-2">Default {{ Default }}</el-text></p>
    <p><el-text class="mx-2">osName {{ osName }}</el-text></p>
    <p><el-text class="mx-2">osRelease {{ osRelease }}</el-text></p>
    <p><el-text class="mx-2">currentTime {{ currentTime }}</el-text></p>
    <p><el-text class="mx-2">runTime {{ runTime }}</el-text></p>
  </el-card>
</template>
    
<script>
export default {
  name: 'Hostinfo_panel',
  data() {
    return {
      Default: 'Default Depolyment',
      osName: 'Red Hat Enterprise Linux',
      osRelease: 'Linux 5.4.0-80-generic x86_64',
      currentTime: '2021-08-01 12:00:00',
      runTime: '3h 30m',

    }
  },
};
</script>
    
<style scoped>
.box-card {
  width: 600px;
  height: 600px;
}
</style>