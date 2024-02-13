<template>
  <!-- doc: cpu核心状态面板 -->
  <el-card class="box-card">
    <div class="chart-container">
      <div ref="chart" class="chart">
        <div class="chart-container">
          <el-row>
            <el-col :span="2"></el-col>
            <el-col :span="12">
              <div>
                <el-progress type="dashboard" :percentage="Cpu_Percent" :width="250">
                  <template #default="{ percentage }">
                    <span class="percentage-value">{{ percentage }}%</span>
                    <span class="percentage-label"></span>
                  </template>
                </el-progress>
              </div>
            </el-col>
            <el-col :span="10">
              <el-scrollbar :height="255">
                <el-divider></el-divider>
                <!-- cpu 每个核心的使用率 -->
                <!-- <div>
                  <cpu_progressbar :core_id="0" :percentages="1.2"></cpu_progressbar>
                </div> -->
                <div v-for="(item, index) in coresPercent" :key="index">
                  <cpu_progressbar :core_id="index" :percentages="item"></cpu_progressbar>
                </div>
                <el-divider></el-divider>
              </el-scrollbar>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <el-col :span="8">
              <div>
                CPU Temp {{ Cpu_Temp }}°C
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                CPU Freq {{ Cpu_Freq }}GHz
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                 {{ Cpu_Name }}
              </div>
            </el-col>
          </el-row>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>

import { PausableInterval } from '@/lib/Interval2.js';
import axios from 'axios';
import cpu_progressbar from '@/components/sub_components/coresPercent_panel/cpu_progressbar.vue';
export default {
  name: 'coresPercent_panel', // 修改为多个单词的组件名
  data() {
    return {
      pausableInterval: false,
      Cpu_Temp: 0.0,
      Cpu_Freq: 0.0,
      Cpu_Name: 'cpu',
      Cpu_Percent: 0.0,
      coresPercent: [],
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
          this.Cpu_Temp = parseFloat(res.data.cpuTemp);
          this.Cpu_Freq = parseFloat(res.data.cpuFreq);
          this.Cpu_Percent = parseFloat(res.data.cpuPercent);
          this.Cpu_Name = res.data.cpuBrand;
          this.coresPercent = res.data.coresPercent.split(',').map(item => {
            return parseFloat(item);
          });
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
  props: {
    paused: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    paused: function (val) {
      if (val) {
        this.pauseInterval();
      } else {
        this.startInterval();
      }
    }
  },

  components: {
    cpu_progressbar
  },
  mounted() {
    this.startInterval();
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