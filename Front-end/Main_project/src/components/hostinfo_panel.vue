<template>
  <el-card class="box-card">
    <el-text class="mx-1">Default {{  }}</el-text>
    <el-text class="mx-1">osName{{  }}</el-text>
    <el-text class="mx-1">osRelease {{  }}</el-text>
    <el-text class="mx-1">currentTime {{  }}</el-text>
    <el-text class="mx-1">runTime {{  }}</el-text>
  </el-card>
</template>
    
<script>
export default {
  name: 'Hostinfo_panel',
};
</script>
    
<style scoped>
.box-card {
  width: 600px;
  height: 600px;
}
</style>