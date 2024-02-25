<template>
  <!-- doc: 内存状态面板 -->
  <el-card class="box-card chart-container">
    <div class="chart-container box-card ">
      <el-scrollbar :height="400">
        <div> 
        <!-- 主界面 -->
        <el-row>
        <el-col :span="12">
          <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="9">
              <p>主机内存消耗状态</p>
            </el-col>
            <el-col :span="12">
            </el-col>
            <el-col :span="24">
              <el-progress type="dashboard" :percentage="percentages" :color="colors" :width="255" />
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="9">
              <p>GPU 内存消耗状态</p>
            </el-col>
            <el-col :span="12">
            </el-col>
            <el-col :span="24">
              <el-progress type="dashboard" :percentage="vram_useage" :color="colors" :width="255" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      </div>
      <el-divider></el-divider>
        <el-row>
          <el-col :span="4">
            <div>
              gpu_id {{ gpu_id }}
            </div>
          </el-col>
          <el-col :span="12">
            <div> {{ name }}
            </div>
          </el-col>
          <el-col :span="8">
              <div>
                GPU Temp {{ temperature }}°C
              </div>
          </el-col>
        </el-row>
      </el-scrollbar>
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
      gpu_infos:[],
      vram_useage: 0,
      utilization: 0,
      gpu_id: 0,
      name: '',
      temperature: 0,
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
          // {
          //   "cpuPercent": "2.22",
          //     "memoryPercent": "21.18",
          //       "coresPercent": "12.14, 12.08, 11.80, 12.12, 11.70, 11.71, 11.94, 11.63, 11.66, 11.21, 11.64, 11.62",
          //         "cpuFreq": 3.7,
          //           "cpuTemp": "25.00",
          //             "cpuBrand": "Core™ i7-8700K",
          //               "gpu_info": [
          //                 {
          //                   "name": "NVIDIA GeForce RTX 2070 SUPER",
          //                   "gpu_id": 0,
          //                   "total_memory": 8589934592,
          //                   "free_memory": 8287289344,
          //                   "used_memory": 302645248,
          //                   "temperature": 19,
          //                   "utilization": 0
          //                 }
          //               ]
          // }
          this.percentages = parseFloat(res.data.memoryPercent);
          this.gpu_info = res.data.gpu_info;
          // console.log(this.gpu_info[0].used_memory);
          this.vram_useage = this.gpu_info[0].used_memory/this.gpu_info[0].total_memory*100;
          this.vram_useage = parseFloat(this.vram_useage.toFixed(2));
          this.utilization = this.gpu_info[0].utilization;
          this.gpu_id = this.gpu_info[0].gpu_id;
          this.name = this.gpu_info[0].name;
          this.temperature = this.gpu_info[0].temperature;

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
  height: fit-content;
}
</style>