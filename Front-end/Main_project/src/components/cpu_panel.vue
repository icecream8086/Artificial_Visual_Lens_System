<template>
    <el-card class="box-card">
      <div class="chart-container">
    <div ref="chart" class="chart"></div>
  </div>
</el-card>

</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      chartData: {
        cpuPercent: 'N/A',
        memoryPercent: '24.94',
        coresPercent: '1.36, 1.20, 1.06, 0.99, 1.06, 1.10, 0.84, 1.03, 1.01, 1.02, 1.06, 0.97',
        cpuFreq: 3.7,
        cpuTemp: '44.00'
      },
      chart: null,
      timer: null,
      xAxisData: [],
      series1Data: [],
      series2Data: []
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    this.initChart();
    this.startUpdatingData();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    initChart() {
      const option = {
        title: {
          text: 'System Monitoring',
          left: 'center',
          textStyle: {
    color: '#409EFF' // 设置文本颜色为白色
  },
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['CPU Percent', 'Memory Percent'],
          top: 'bottom',
          textStyle: {
    color: 'aqua' // 设置文本颜色为白色
  },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xAxisData
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          min: 0,
          max: 100,
          axisLabel: {
            formatter: '{value}%'
          }
        },
        series: [
          {
            name: 'CPU Percent',
            type: 'line',
            data: this.series1Data,
            smooth: true
          },
          {
            name: 'Memory Percent',
            type: 'line',
            data: this.series2Data,
            smooth: true
          }
        ]
      };

      this.chart.setOption(option);
    },
    startUpdatingData() {
      this.timer = setInterval(() => {
        this.updateChartData();
      }, 1000);
    },
    updateChartData() {
      const cpuPercent = Math.random() * 100;
      const memoryPercent = Math.random() * 100;

      this.chartData.cpuPercent = cpuPercent.toFixed(2);
      this.chartData.memoryPercent = memoryPercent.toFixed(2);

      const xAxisData = new Date().toLocaleTimeString();
      const series1Data = parseFloat(this.chartData.cpuPercent);
      const series2Data = parseFloat(this.chartData.memoryPercent);

      this.xAxisData.push(xAxisData);
      this.series1Data.push(series1Data);
      this.series2Data.push(series2Data);

      if (this.xAxisData.length > 10) {
        this.xAxisData.shift();
        this.series1Data.shift();
        this.series2Data.shift();
      }

      this.chart.setOption({
        xAxis: {
          data: this.xAxisData
        },
        series: [
          {
            data: this.series1Data
          },
          {
            data: this.series2Data
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
.chart-container {
  width: 600px;
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
  width: auto;
}
</style>