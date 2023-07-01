<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
import { useDark } from "@vueuse/core";

export default {
  data() {
    return {
    };
  },
    methods: {
    switchThemes() {
      // Switch themes
      useDark().value = !useDark().value;
      
    },
    checkDarkMode() {
      // Check if dark mode is enabled
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  },
    mounted() {
    if (this.checkDarkMode() === true && useDark().value === false) {
      // only allowed to switch at first load
      // otherwise it will load switch repeatedly
      this.switchThemes();
      console.log("Dark mode is enabled.");
    } else {
      console.log("checkDarkMode() ok");
    }
  },
};

</script>
<style>

</style>