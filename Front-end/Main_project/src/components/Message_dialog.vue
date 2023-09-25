<template>
    <el-card class="box-card">
      <div v-for="o in 100" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
  </template>
  <style scoped>
  .text {
    font-size: 16px;
  }
  
  .item {
    padding: 12px 0;
  }
  
  .box-card {
    width: 480px;
    margin: 0 auto;
    height: 300px;
    overflow: auto;

  }
  </style>
  