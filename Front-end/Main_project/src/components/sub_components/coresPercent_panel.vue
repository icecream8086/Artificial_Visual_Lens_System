<template>
  <el-card class="box-card">
    <el-row>
      <el-col :span="16">
        <div ref="chart" style="height: 400px"></div>
      </el-col>
      <el-col :span="8" style="height: auto; width: auto;">
        <p><el-text class="mx-3">CPU Core percentage: </el-text></p>
        <div class="text-container">
          <el-text class="mx-2 wda" v-for="(item, index) in arrs" :key="index" style="overflow: hidden;">
            {{ item.name }}
          </el-text>
        </div>

      </el-col>
    </el-row>
  </el-card>
</template>
  
<script>
import * as echarts from 'echarts';
import axios from 'axios';
export default {
  data() {
    return {
      // coresPercent: '1.36, 1.20, 1.06, 0.99, 1.06, 1.10, 0.84, 1.03, 1.01, 1.02, 1.06, 0.97',
      coresPercent: '1, 1, 1, 1, 1, 1',
      arrs: [],

    };
  },
  methods: {
    convertToDictionary(str) {
      const arr = str.split(',').map(item => item.trim());
      const dictionary = arr.reduce((result, item, index) => {
        result[index] = { index: index, name: item };
        return result;
      }, {});
      return dictionary;
    },


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
      axios.get('/api' + '/api/host/cpu_statu_info').then(res => {
        this.coresPercent = res.data.coresPercent;
      })
        .catch(err => {
          console.log(err);
        })

      console.log(this.coresPercent);
      this.arrs = this.convertToDictionary(this.coresPercent);
      console.log(this.arrs);
      const data = this.coresPercent.split(',').map(num => (parseFloat(num) / 100).toFixed(2)).join(',');
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
.wda {
  color: aqua;
}

.text-container {
  display: flex;
  flex-wrap: wrap;
}

.text-container .mx-2 {
  flex-basis: calc(33.33% - 4px);
  /* 计算每个元素的宽度，减去margin的宽度 */
  margin: 2px;
}
</style>