<template>
  <div class="container">
    <h2>Login</h2>
    <div class="form-group">
      <label for="username">Username</label>
      <el-input
        type="text"
        id="username"
        v-model="username"
        placeholder="Enter your username"
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <el-input
        type="password"
        id="password"
        v-model="password"
        placeholder="Enter your password"
      />
    </div>
    <div class="form-group">
      <el-button @click="login">Login</el-button>
      <!-- <el-button @click="switchThemes()">暗黑模式</el-button> -->
    </div>
  </div>
</template>

<script>
import { useDark } from "@vueuse/core";

export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
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
    },
    login() {
      // Login
      if (this.username === "admin" && this.password === "admin") {
        this.$router.push("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    },
  },
  mounted() {
    if (this.checkDarkMode() === true && useDark().value === false) {
      // only allowed to switch at first load
      // otherwise it will load switch repeatedly
      this.switchThemes();
      console.log("Dark mode is enabled.");
    } else {
      console.log("Light mode is enabled.");
    }
  },
};
</script>

<style>
body {
  /* background-image: url("../assets/background/Logins_HDR.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0;
  padding: 0; */
}

.container {
  background-color: inherit;
  max-width: 40%;
  margin: 150px 0 0 3%;
  padding: 45px;
  border: 1px solid #ccc;
  border-radius: 1%;
}

el-input[type="text"],
el-input[type="password"] {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>

