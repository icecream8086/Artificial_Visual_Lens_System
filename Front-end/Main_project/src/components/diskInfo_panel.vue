<template>
  <el-card class="box-card">
    <div class="chart-container">
      <div ref="chart" class="chart"></div>
    </div>
    <el-text class="mx-4"><p>DiskName: {{ chartData.diskName }}</p></el-text>
    <el-text class="mx-4"><p>Path: {{ chartData.mountPoint }}</p></el-text>
    <el-text class="mx-4"><p>FileSystem Type: {{ chartData.fstype }}</p></el-text>
    <el-text class="mx-4"><p>TotalSize: {{ chartData.totalSize }}</p></el-text>
    <el-text class="mx-4"><p>freeSize: {{ chartData.freeSize }}</p></el-text>
    <el-text class="mx-4"><p>usedSize: {{ chartData.usedSize }}</p></el-text>


  </el-card>
</template>
  
<script>
import * as echarts from "echarts";
import axios from 'axios';

export default {
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
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    this.initChart();

    setInterval(() => {
      axios.get('/api' + '/api/host/diskInfo').then(res => {
        this.diskName=res.data.diskName;
        this.mountPoint=res.data.mountPoint;
        this.fstype=res.data.fstype;
        this.totalSize=res.data.totalSize;
        this.freeSize=res.data.freeSize;
        this.usedSize=res.data.usedSize;

        this.chartData = res.data;
        this.initChart();
      })
        .catch(err => {
          console.log(err);

        })
    }, 100);
  },
  methods: {
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