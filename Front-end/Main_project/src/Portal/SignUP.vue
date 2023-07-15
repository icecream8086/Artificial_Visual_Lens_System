<template>
  <div class="container">
    <div class="center-content">
      <h2>Create New Account</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="full_name">Full Name:</label>
          <el-input
            v-model="formData.full_name"
            type="text"
            id="full_name"
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
          <label for="email">Email:</label>
          <el-input
            v-model="formData.email"
            type="email"
            id="email"
            required
            :class="{'is-invalid': !isEmailValid}"
          ></el-input>
          <div v-if="!isEmailValid" class="invalid-feedback">Please enter a valid email address.</div>
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
        <el-button type="primary" @click="submitForm">Create Account</el-button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive, ref } from "vue";
import md5 from "md5";
import router from "@/router";

const SignUp = {
  name: "SignUp",
  mounted() {
    document.body.className = "login-page";
  },
  setup() {
    const formData = reactive({
      full_name: "",
      username: "",
      password: "",
      email: "",
    });

    const confirmPassword = ref("");

    const isEmailValid = ref(true);

    const submitForm = () => {
      if (formData.password !== confirmPassword.value) {
        alert("Passwords do not match.");
        return;
      }

      if (!isEmailValid.value) {
        return;
      }

      formData.password = md5(formData.password);

      console.log("formData already submitted: ");
      console.log(formData);
      axios
        .post('/api'+"/api/auth/signup", formData)
        .then((response) => {
          console.log(response.data);
          router.push("/login");
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isEmailValid.value = emailRegex.test(formData.email);
    };

    return {
      formData,
      confirmPassword,
      isEmailValid,
      submitForm,
      validateEmail,
    };
  },
};

export default SignUp;
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

.is-invalid {
  border-color: red;
}

.invalid-feedback {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.2rem;
}
</style>
