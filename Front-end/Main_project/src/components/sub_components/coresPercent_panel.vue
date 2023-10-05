<template>
  <el-card class="box-card">

    <div ref="chart" style="height: 400px"></div>
    
  </el-card>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    data() {
      return {
        // coresPercent: '1.36, 1.20, 1.06, 0.99, 1.06, 1.10, 0.84, 1.03, 1.01, 1.02, 1.06, 0.97',
        coresPercent: '1.36, 1.20, 1.06, 0.99, 1.06, 1.10',

      };
    },
    mounted() {
      const chart = echarts.init(this.$refs.chart);

const option = {
  radar: {
    indicator: this.coresPercent.split(',').map((_, i) => ({
      name: `Core ${i + 1}`,
      max: 2,
    })),
    axisLine: {
      lineStyle: {
        color: 'green',
        width: 2,
        type: 'dashed',
      },
    },
    splitLine: {
      lineStyle: {
        color: 'red',
      },
    },
    name: {
      textStyle: {
        color: 'pink',
      },
    },
    splitArea: {
      areaStyle: {
        color: ['yellow', 'gray'],
      },
    },
  },
  series: [{
    type: 'radar',
    itemStyle: {
      color: 'aqua',
      type: 'dashed',
    },
    symbol: 'none',
    data: [{ value: this.coresPercent.split(',').map(Number) }],
    //get number of cores from the coresPercent string
  }],
};

chart.setOption(option);

      setInterval(() => {
        const data = Array.from({ length: this.coresPercent.split(',').length }, () => (Math.random() * (2 - 0.5) + 0.5).toFixed(2)).join(',');
        this.coresPercent = data;
        chart.setOption({
          radar: {
            indicator: data.split(',').map((_, i) => ({
              name: `Core ${i + 1}`,
              max: 2,
            })),
          },
          series: [{
            type: 'radar',
            data: [{ value: data.split(',').map(Number) }],
          }],
        });
      }, 1000);
    },
  };
  </script>
  <style>
 .wda{
  color:aqua;
 }
</style>