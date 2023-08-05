<template>
  <el-row>
    <el-col :span="24"><div class="grid-content ep-bg-purple-dark" />text0</el-col>
  </el-row>
  <el-row>
    <el-col :span="12"><div class="grid-content ep-bg-purple" />text1</el-col>
    <el-col :span="12"><div class="grid-content ep-bg-purple-light" />text2</el-col>
  </el-row>
  <el-row>
    <el-col :span="8"><div class="grid-content ep-bg-purple" />text3</el-col>
    <el-col :span="8"><div class="grid-content ep-bg-purple-light" />text4</el-col>
    <el-col :span="8"><div class="grid-content ep-bg-purple" />text5</el-col>
  </el-row>
  <el-row>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />text6</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple-light" />text7</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" />text8</el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple-light" />text9</el-col>
  </el-row>
  <el-row>
    <el-col :span="4"><div class="grid-content ep-bg-purple" />text10</el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple-light" />text11</el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple" />text12</el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple-light" />text13</el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple" />text14</el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple-light" />text15</el-col>
  </el-row>
</template>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>


<script>
// import axios from "axios";

export default {
  name: 'AboutPage', // 修改为多个单词的组件名
  data() {
    return {
      msg: ''
    }
  },
  mounted() {

    // axios.get('/api'+'/users/select_test')
    //   .then(response => {
    //     this.msg = response;
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  },
}
</script>
