<template>
    <el-row>
        <el-col :span="24" style="overflow: hidden; width: 800px; height: 550px;">
            <Progress_Area  ></Progress_Area>
        </el-col>
    </el-row>
</template>
  
<script>
import Progress_Area from '@/components/sub_components/Progress_Area.vue';
export default {
    name: 'CardComponent',
    components: {
        Progress_Area,
    },
}

</script>
  

  