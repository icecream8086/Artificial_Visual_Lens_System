<template>
    <el-card>
        <el-row>
        <el-col :span="24"><el-progress type="circle" :percentage="process_bar" /></el-col>
        <el-col :span="8"><el-text style="font-size: 12px;">{{ titles }}</el-text></el-col>
        <el-col :span="16"><el-text style="font-size: 14px;">{{ messages }}</el-text></el-col>
    </el-row>
    </el-card>
</template>
  
<script>
export default {
    name: 'gpu_status',
    data() {
        return {
            titles: this.title,
            process_bar:this.process,
            messages: this.message,
        }
    },
    props: {
        /**
         * The title of the GPU status component.
         * @type {String}
         */
        title: String,

        /**
         * The process number of the GPU status component.
         * @type {Number}
         */
        process: Number,

        /**
         * The message to be displayed in the GPU status component.
         * @type {String}
         */
        message: String,
    },
}
</script>
  

  