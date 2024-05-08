<template>
    <el-row>
      <el-col :span="size"> 
        <el-card class="box-cards">
        </el-card>
      </el-col>
      
    </el-row>
  </template>
  <script>
  export default {
    name: "add_image",
    data() {
      return {
        size:4
      };
    },
    props: {
  
    },
  };
  
  </script>
  <style scoped>
  .text {
    font-size: 16px;
  }
  
  .item {
    padding: 12px 0;
  }
  
  .box-cards {
    width: 120px;
    height: 120px;
  }
  </style>
    