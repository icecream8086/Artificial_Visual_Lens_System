<template>
  <el-card class="box-card">
    <div class="chart-container">
      <div ref="chart" class="chart"></div>
    </div>
    <p>path /home</p>
    <p>type xfs</p>
  </el-card>
</template>
  
  <script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      chartData: {
        diskName: "home",
        mountPoint: "/home",
        fstype: "xfs",
        totalSize: 61,
        freeSize: 14,
        usedSize: 47,
      },
      chart: null,
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    this.initChart();
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