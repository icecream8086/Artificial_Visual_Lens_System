<template>
<el-card class="login-page-container">
  <el-text class="mx-1" size="large">Login</el-text>
    <div class="form-group">
      <el-text class="mx-2" size="large">Username</el-text>
      <el-input type="text" id="username" v-model="username" placeholder="Enter your username" />
    </div>
    <div class="form-group">
      <el-text class="mx-2" size="large">Password</el-text>
      <el-input type="password" id="password" v-model="password" placeholder="Enter your password" />
      <div class="demo-collapse">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="Other">
            <div>
              <p>token</p>
            </div>
            <div>
              <el-input type="text" id="username" placeholder="Enter token" />
            </div>
            <el-collapse-item title="forget passowrd">
              <span>foget password ?(按钮)</span>
            </el-collapse-item>          
          </el-collapse-item>

        </el-collapse>
      </div>
      <el-button :icon="ArrowRightBold" @click="login" class="form-group-button" >登录</el-button>
    </div>
</el-card>
</template>

<script setup>
import { ArrowRightBold } from '@element-plus/icons-vue'

</script>
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

      //添加一个类 刷新时修改当前body的class
      document.body.className = "login-page";
    },
  };
</script>

<style>
  /* :root {
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
  } */

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
    /* background-color: var(--bg-color); */
  }
  .mx-1{
    margin: 0 5px;
    /* text size */
    font-size: 2rem;
  }
  .mx-2{
    margin: 0 10px;
    /* text size */
    font-size: 1.5rem;
  }
  .form-group{
    width: 100%;
    margin: 0 auto;
    padding: 5px;
  }
  .form-group-button{
    width: 50%;
    margin: 0 auto;
    padding: 5px;
    left: 50%;
  }
  el-input[type="text"],
  el-input[type="password"] {
    width: 100%;
    padding: 5px;
    /* border: 1px solid #ccc; */
    border-radius: 4px;
  }
</style>