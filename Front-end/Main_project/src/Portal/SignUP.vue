<template>
  <div class="container">
    <div class="center-content">
      <h2>Create New Account</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="fullName">Full Name:</label>
          <el-input
            v-model="formData.fullName"
            type="text"
            id="fullName"
          ></el-input>
        </div>
        <div>
          <label for="username">Username:</label>
          <el-input
            v-model="formData.username"
            type="text"
            id="username"
            required
          ></el-input>
        </div>
        <div>
          <label for="password">Password:</label>
          <el-input
            v-model="formData.password"
            type="password"
            id="password"
            required
          ></el-input>
        </div>
        <div>
          <label for="confirmPassword">Confirm Password:</label>
          <el-input
            v-model="confirmPassword"
            type="password"
            id="confirmPassword"
            required
          ></el-input>
        </div>
        <el-button type="submit">Create Account</el-button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "SignUp",
  mounted() {
    document.body.className = "login-page";
  },
  setup() {
    const formData = reactive({
      fullName: "",
      username: "",
      password: "",
    });

    let confirmPassword = "";

    const submitForm = () => {
      if (formData.password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // 在此处添加提交表单的逻辑，例如发送创建账户请求到服务器

      // 打印表单数据
      console.log(formData);
    };

    return {
      formData,
      confirmPassword,
      submitForm,
    };
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
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

.container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
</style>
