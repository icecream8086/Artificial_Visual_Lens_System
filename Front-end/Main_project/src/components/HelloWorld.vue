<template>
  <div class="hello">
    <h1>home</h1>
    <el-button @click="switchThemes()">暗黑模式</el-button>
  </div>
</template>

<script>
import { useDark, useToggle } from '@vueuse/core'

export default {
  name: 'App',
  methods: {
    switchThemes() {
      //switch themes
      const isDark = useDark()
      const toggleDark = useToggle(isDark)
      // debug log
      console.log(toggleDark())
    },
    checkDarkMode() {
      // check if dark mode is enabled
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      console.log(isDarkMode)
    }
  },
  mounted() {
    // debug log
    this.checkDarkMode()
    this.switchThemes()
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
