<template>
  <el-card class="box-card">
    <div class="chart-container">
      <div ref="chart" class="chart"></div>
    </div>
  </el-card>
</template>

<script>
import { onMounted, ref, onUnmounted, watch } from 'vue';
import * as echarts from 'echarts';

export default {
  props: {
    isRunning: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const chart = ref(null);
    let myChart = null;
    let data = [120, 132, 101, 134, 90, 230, 210];
    let timer = null;

    onMounted(() => {
      myChart = echarts.init(chart.value);

      const option = {
        title: {
          text: 'ECharts 折线图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['销量']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 1000 ,
          axisLabel: {
    formatter: '{value} '
  }
        },
        series: [
          {
            name: '销量',
            type: 'line',
            stack: '总量',
            data: data
          }
        ]
      };

      myChart.setOption(option);

      if (props.isRunning) {
        timer = setInterval(() => {
          data.shift();
          data.push(Math.round(Math.random() * 1000));
          myChart.setOption({
            series: [{
              data: data
            }]
          });
        }, 2000);
      }
    });

    watch(() => props.isRunning, (newVal) => {
      if (!newVal && timer) {
        clearInterval(timer);
        timer = null;
      } else if (newVal && !timer) {
        timer = setInterval(() => {
          data.shift();
          data.push(Math.round(Math.random() * 1000));
          myChart.setOption({
            series: [{
              data: data
            }]
          });
        }, 2000);
      }
    });

    onUnmounted(() => {
      if (timer) {
        clearInterval(timer);
      }
    });

    return {
      chart
    };
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