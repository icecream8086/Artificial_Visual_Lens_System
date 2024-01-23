<template>
  <div ref="chart" style="width: 100%; height: 400px;"></div>
</template>

<script>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

export default {
  setup() {
    const chart = ref(null);

    onMounted(() => {
      const myChart = echarts.init(chart.value);
    // 假设这是你的 CPU 占用率数据
    const cpuData = [
    { cpu: 'CPU1', day: '周一', usage: 10 },
    { cpu: 'CPU1', day: '周二', usage: 20 },
    { cpu: 'CPU1', day: '周三', usage: 30},
    { cpu: 'CPU1', day: '周四', usage: 40},
    { cpu: 'CPU1', day: '周五', usage: 50},
    { cpu: 'CPU1', day: '周六', usage: 60},
    { cpu: 'CPU1', day: '周日', usage: 70},
    // ...
    { cpu: 'CPU2', day: '周一', usage: 70 },
    { cpu: 'CPU2', day: '周二', usage: 60 },
    { cpu: 'CPU2', day: '周三', usage: 50},
    { cpu: 'CPU2', day: '周四', usage: 40},
    { cpu: 'CPU2', day: '周五', usage: 30},
    { cpu: 'CPU2', day: '周六', usage: 20},
    { cpu: 'CPU2', day: '周日', usage: 10},

    { cpu: 'CPU3', day: '周一', usage: 10 },
    { cpu: 'CPU3', day: '周二', usage: 20 },
    { cpu: 'CPU3', day: '周三', usage: 30},
    { cpu: 'CPU3', day: '周四', usage: 40},
    { cpu: 'CPU3', day: '周五', usage: 50},
    { cpu: 'CPU3', day: '周六', usage: 60},
    { cpu: 'CPU3', day: '周日', usage: 70},

    { cpu: 'CPU4', day: '周一', usage: 70 },
    { cpu: 'CPU4', day: '周二', usage: 60 },
    { cpu: 'CPU4', day: '周三', usage: 50},
    { cpu: 'CPU4', day: '周四', usage: 40},
    { cpu: 'CPU4', day: '周五', usage: 30},
    { cpu: 'CPU4', day: '周六', usage: 20},
    { cpu: 'CPU4', day: '周日', usage: 10},
    // ...
    // 请确保每个 CPU 在每一天都有数据
  ];
  const data = cpuData.map(item => {
    return [
      ['周一', '周二', '周三', '周四', '周五', '周六', '周日'].indexOf(item.day),
      ['CPU1', 'CPU2', 'CPU3', 'CPU4'].indexOf(item.cpu),
      item.usage
    ];
  });

      const option = {
        tooltip: {
          position: 'top'
        },
        grid: {
          height: '50%',
          y: '10%'
        },
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'category',
          data: ['CPU1', 'CPU2', 'CPU3', 'CPU4']
        },
        visualMap: {
          min: 0,
          max: 100,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '15%',
          inRange: {
            // color: ['#121122', '#1d4877', '#4482c3', '#7ad7f0']
            color: ['#7ad7f0', '#4482c3', '#1d4877','#121122']
          }
          
        },
        series: [{
          name: 'CPU 使用率',
          type: 'heatmap',
          data: data,
          label: {
            show: true
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      };

      myChart.setOption(option);
    });

    return {
      chart
    };
  }
};
</script>