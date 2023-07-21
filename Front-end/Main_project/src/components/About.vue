<template>
  <div>
    <h1>About</h1>
    <p>This is the about page.</p>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'AboutPage', // 修改为多个单词的组件名
  data() {
    return {
      msg: ''
    }
  },
  mounted() {

    axios.get('/api'+'/users/select_test')
      .then(response => {
        this.msg = response;
      })
      .catch(error => {
        console.error(error);
      });
  },
}
</script>
