<template>
  <!-- doc: 内存状态面板 -->
  <el-card class="box-card">
    <div class="chart-container">
      <el-row>
        <el-col :span="6"></el-col>
        <el-col :span="18"><p>主机内存消耗状态</p></el-col>
      </el-row>
      <div ref="chart" class="chart">
        <div>
          <el-progress type="dashboard" :percentage="percentages" :color="colors" :width="255"/>
          <div>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup>


const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]



</script>

<script>
import { PausableInterval } from '@/lib/Interval2.js';
import axios from 'axios';

export default {
  name: 'Memory_panel',
  data() {
    return {
      pausableInterval: false,
      percentages: 0,
    }
  },
  watch: {
    percentage: function (val) {
      this.percentages = val;
    },
    paused: function (val) {
      if (val) {
        this.pauseInterval();
      } else {
        this.startInterval();
      }
    }
  },
  methods: {
    startInterval() {
      this.pausableInterval = new PausableInterval(() => {
        axios.get('/api' + '/api/host/cpu_statu_info').then(res => {
          // console.log(res);
          // {
          //     "cpuPercent": "0.25",
          //     "memoryPercent": "8.01",
          //     "coresPercent": "3.44, 3.83, 3.18, 3.27, 3.12, 2.96, 2.90, 3.01, 3.10, 3.28, 3.56, 2.94",
          //     "cpuFreq": 3.7,
          //     "cpuTemp": "24.00"
          // }
          this.percentages = parseFloat(res.data.memoryPercent);


        }).catch(err => {
          console.log(err);
        });
        // console.log('interval loop...');
      }, 1000);
    },
    pauseInterval() {
      if (this.pausableInterval) {
        this.pausableInterval.pause();
      }
    },
    clearInterval() {
      if (this.pausableInterval) {
        this.pausableInterval.clear();
      }
    },
  },
  mounted() {
    this.startInterval();
  },
  props: {
    paused: {
      type: Boolean,
      default: true,
    },
  },

}
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