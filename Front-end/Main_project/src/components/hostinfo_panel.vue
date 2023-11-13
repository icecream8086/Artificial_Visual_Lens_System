<template>
  <el-card class="box-card">
    <p><el-text class="mx-2">hostname : {{ Default }}</el-text></p>
    <p><el-text class="mx-2">osName : {{ osName }}</el-text></p>
    <p><el-text class="mx-2">distro : {{ distro }}</el-text></p>
    <p><el-text class="mx-2">osRelease : {{ osRelease }}</el-text></p>
    <p><el-text class="mx-2">currentTime : {{ currentTime }}</el-text></p>
    <p><el-text class="mx-2">runTime : {{ runTime }}</el-text></p>
  </el-card>
</template>
    
<script>
import axios from 'axios';

export default {
  name: 'Hostinfo_panel',
  data() {
    return {
      Default: 'Onload ...',
      osName: 'Onload ...',
      distro: 'Onload ...',
      osRelease: 'Onload ...',
      currentTime: 'Onload ...',
      runTime: 'Onload ...',
    }
  },
  mounted() {
      setInterval(() => {
        axios.get('/api' + '/api/host/monitorOsInfo').then(res => {
          this.Default = res.data.hostname;
          this.osName = res.data.osName;
          this.osRelease = res.data.osRelease;
          this.currentTime = res.data.currentTime;
          let runTimes = res.data.uptime;
          this.runTime = runTimes + 's';
          this.distro = res.data.distro;
        })
          .catch(err => {
            console.log(err);

          })
      }, 1000)
  },
};
</script>
    
<style scoped>
.box-card {
  width: 600px;
  height: 600px;
}
</style>