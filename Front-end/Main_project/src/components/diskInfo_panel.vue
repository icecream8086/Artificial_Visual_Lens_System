<template>
  <el-card class="box-card">
    <div class="chart-container">
      <div ref="chart" class="chart"></div>
    </div>
    <el-text class="mx-4">
      <p>DiskName: {{ chartData.diskName }}</p>
    </el-text>
    <el-text class="mx-4">
      <p>Mount directory: {{ chartData.mountPoint }}</p>
    </el-text>
    <el-text class="mx-4">
      <p>FileSystem Type: {{ chartData.fstype }}</p>
    </el-text>
    <el-text class="mx-4">
      <p>TotalSize: {{ chartData.totalSize }} GB</p>
    </el-text>
    <el-text class="mx-4">
      <p>freeSize: {{ chartData.freeSize }} GB</p>
    </el-text>
    <el-text class="mx-4">
      <p>usedSize: {{ chartData.usedSize }} GB</p>
    </el-text>


  </el-card>
</template>
  
<script>
import * as echarts from "echarts";
import axios from 'axios';
import {  ref,onBeforeUnmount } from 'vue';

export default {
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
      chartData: {
        diskName: "Unknown ...",
        mountPoint: "Unknown ...",
        fstype: "Unknown ...",
        totalSize: 1,
        freeSize: 1,
        usedSize: 1,
      },
      chart: null,
      Movable: false,
    };
  },

  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    this.initChart();
    this.Movable = this.movable;
    this.getdata();
  },
  props: {
    movable: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
  chartData: {
    handler() {
      this.initChart();
    },
    deep: true,
  },
  movable: {
    handler(newVal) {
      this.Movable = newVal;
      console.log('movable changed', this.Movable);
      this.getdata(); // 当 movable 改变时，调用 getdata
    },
    deep: true,
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
        axios.get('/api' + '/api/host/diskInfo')
          .then(res => {
            this.diskName = res.data.diskName;
            this.mountPoint = res.data.mountPoint;
            this.fstype = res.data.fstype;
            this.totalSize = res.data.totalSize;
            this.freeSize = res.data.freeSize;
            this.usedSize = res.data.usedSize;
            this.chartData = res.data;
            this.initChart();
          })
          .catch(err => {
            console.log(err);
          })
       //
      }, 1000);
    }
  },

    initChart() {
      const option = {
        title: {
          text: "Disk Usage",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["Free Size", "Used Size"],
        },
        series: [
          {
            name: "Disk Usage",
            type: "pie",
            radius: "50%",
            center: ["50%", "60%"],
            label: {
              formatter: "{b}: {c} ({d}%)",
            },
            data: [
              { value: this.chartData.freeSize, name: "Free Size" },
              { value: this.chartData.usedSize, name: "Used Size" },
            ],
          },
        ],
      };

      this.chart.setOption(option);
    },
  },
};
</script>
  
<style scoped>
.chart-container {
  width: 400px;
  height: 400px;
  margin: 0 auto;
}

.chart {
  width: 100%;
  height: 100%;
}
</style>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 600px;
  height: 600px;
}
</style>