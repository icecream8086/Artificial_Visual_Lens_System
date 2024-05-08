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
import {  ref,onBeforeUnmount } from 'vue';

export default {
  name: 'Hostinfo_panel',
  setup() {
    const intervalId = ref(null);

    onBeforeUnmount(() => {
      if (intervalId.value) {
        clearInterval(intervalId.value);
        intervalId.value = null;
      }
    });

    return {
      intervalId,
    };
  },
  data() {
    return {
      Default: 'Onload ...',
      osName: 'Onload ...',
      distro: 'Onload ...',
      osRelease: 'Onload ...',
      currentTime: 'Onload ...',
      runTime: 'Onload ...',
      Movable: true,
    }
  },
  watch: {
    movable: function (val) {
      this.Movable = val;
    }
  },
  mounted() {
    console.log("mounted");
    this.Movable = this.movable;
    this.getdata();
  },
  props: {
    movable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    getdata() {
    // 如果已经有一个 interval 在运行，先停止它
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    if (this.Movable) {
      console.log('getdata called, Movable is', this.Movable);

      this.intervalId = setInterval(() => {
        // 如果 Movable 不为 true，立即停止定时器
        if (!this.Movable) {
          clearInterval(this.intervalId);
          this.intervalId = null;
          return;
        }
        /*
        reques data ...
        */
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
       //
      }, 1000);
    }
  },
  },
};
</script>
    
<style scoped>
.box-card {
  width: 600px;
  height: 600px;
}
</style>