<template>
    <p>eachart test</p>
    <div ref="chart" style="width: 600px; height: 400px"></div>
  </template>
  
  <script>
  export default {
    mounted() {
      // 在 mounted 钩子中使用 $echarts 创建图表
      const chart = this.$echarts.init(this.$refs.chart);
  
      const options = {
        xAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [30, 40, 25, 50, 49, 60, 37, 40, 26, 35],
            type: 'bar'
          }
        ]
      };
  
      chart.setOption(options);
    }
  };
  </script>
  