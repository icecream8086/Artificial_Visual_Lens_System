<template>
   <el-card shadow="always" style="width: 480px; height: 640px;">
    
    <el-scrollbar height="640px">
        <el-timeline>
      <el-timeline-item timestamp="2018/4/12" placement="top">
        <el-card>
          <h4>Update Github template</h4>
          <p>Tom committed 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      
    </el-timeline>
  </el-scrollbar>

   </el-card>
</template>
<script>
export default {
    name: 'MessageBox',
    data() {
        return {
          
        }
    }
}
</script>

<style>

</style>