<template>
  <p>eachart test</p>
  <div ref="chart" style="width: 600px; height: 400px"></div>
</template>

<script>
export default {
  data() {
    return {
      chartData: [30, 40, 25, 50, 49, 60, 37, 40, 26, 35]
    };
  },
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
          data: this.chartData,
          type: 'bar'
        }
      ]
    };

    chart.setOption(options);

    setInterval(() => {
      // Generate new random data
      const newData = [];
      for (let i = 0; i < 10; i++) {
        newData.push(Math.floor(Math.random() * 50) + 1);
      }

      // Update chart data
      this.chartData = newData;
      chart.setOption({
        series: [
          {
            data: this.chartData
          }
        ]
      });
    }, 1000);
  }
};
</script>
