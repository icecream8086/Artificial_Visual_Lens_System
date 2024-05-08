<template>
    <el-row>
        <el-col :span="24" style="overflow: hidden; width: 800px; height: 432px;">
            <Progress_Area ></Progress_Area>
        </el-col>
        <el-col :span="12">
            <gpu_status :process="75" :title="'GPU RAM'" :message="'OK'"></gpu_status>
        </el-col>
        <el-col :span="12">
            <gpu_status :process="50" :title="'GPU workload'" :message="'OK'"></gpu_status>
        </el-col>
    </el-row>
</template>
  
<script>
import gpu_status from '@/components/sub_components/gpu_status.vue';
import Progress_Area from '@/components/sub_components/Progress_Area.vue';
export default {
    name: 'CardComponent',
    components: {
        gpu_status,
        Progress_Area,
    },
}

</script>
  

  