<template>
    <div class="login-page-container">

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
      <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="Server Address ">
        <div>
          <p>message</p>
        </div>
        <div>
          <el-input
        type="text"
        id="username"
        placeholder="Enter server address"
      />
        </div>
      </el-collapse-item>

    </el-collapse>
  </div>
    <div class="form-group">
      <el-button @click="login">Login</el-button>
      <!-- <el-button @click="switchThemes()">暗黑模式</el-button> -->
    </div>
  </div>
 </div>
 
</template>

<script>
import { useDark } from "@vueuse/core";
export default {
  name: "LoginForm",
  data() {
    return {
      token: "",
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
      this.$store.dispatch('updateToken', this.token);
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
      console.log("checkDarkMode() ok");
    }
    //添加一个类 刷新时修改当前body的class
    document.body.className = "login-page";
  },
};
</script>

<style>
:root {
  --bg-color-light: #ccc;
  --bg-color-dark: #333;
}

@media (prefers-color-scheme: light) {
  :root {
    --bg-color: var(--bg-color-light);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: var(--bg-color-dark);
  }
}

.login-page {
  background-image: url("../assets/background/Logins_HDR.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
}


.login-page-container {
  max-width: 45%;
  margin: 150px 0 5% 7.5%;
  padding: 45px;
  border: 1px solid #1999ef;
  border-radius: 1%;
  opacity: 0.9;
  background-color: var(--bg-color);
}

el-input[type="text"],
el-input[type="password"] {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>

