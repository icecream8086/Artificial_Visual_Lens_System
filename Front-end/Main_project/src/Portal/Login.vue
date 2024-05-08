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
              <el-input type="text" id="username" v-model="token" placeholder="Enter token" />
            </div>
            <el-collapse-item title="forget passowrd">
              <span>foget password ?(按钮)</span>
            </el-collapse-item>
          </el-collapse-item>

        </el-collapse>
      </div>
      <el-button :icon="ArrowRightBold" @click="login" class="form-group-button">登录</el-button>
    </div>
  </el-card>
</template>

<script setup>
import { ArrowRightBold } from '@element-plus/icons-vue'
import { publicEncrypt, privateDecrypt } from 'crypto';
import Cookies from "js-cookie";

</script>
<script>
import { useDark } from "@vueuse/core";
import axios from 'axios';
export default {
  name: "LoginForm",
  data() {
    return {
      token: "",
      username: "Avatar@mail.com",
      password: "MzIwMzYwMDVkMWY2ZWQ1OTgwM2JhM2UxM2M4MDk5M2U=",
      pub_key: "",
      pri_key: "",
    };
  },
  // 公钥使用了Subject Public Key Info (SPKI)格式，私钥使用了PKCS#8格式.
  methods: {
    switchThemes() {
      // Switch themes
      useDark().value = !useDark().value;

    },
    encrypt(data, publicKey) {

      const bufferData = new Uint8Array([...atob(data)].map(char => char.charCodeAt(0)));
      const encrypted = publicEncrypt(publicKey, bufferData);
      return encrypted.toString('base64');
    },
    decrypt(data, privateKey) {
      const bufferData = new Uint8Array([...atob(data)].map(char => char.charCodeAt(0)));
      console.log("bufferData \n" + bufferData);
      const decrypted = privateDecrypt(privateKey, bufferData);
      return decrypted.toString('utf8');
    }
    ,
    checkDarkMode() {
      // Check if dark mode is enabled
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    },
    login() {
      if (this.username == "" || this.password == "") {
        //check token is valid
        if (this.token == "") {
          alert("please input username and password");
          return;
        }
        //if token is valid, then navigate to home page
        document.body.className = "";
        this.$router.push("/dashboard");
      }
      this.password = this.encrypt(this.password, this.pub_key);
      // ! 本地密码需要先转换为MD5,随后转换为base64，再进行加密
      axios.post('/api' + '/api/auth/login', {
        usernameOrEmail: this.username,
        password: this.password,
        flag: 'rsa',
      }).then(res => {
        // console.log(res);
        // this.$store.dispatch('updateToken', res.data.token);
        //将token塞进coookie
        Cookies.set('token', res.data.token);
        Cookies.set('UID', res.data.UID);
        document.body.className = "";
        // console.log(Cookies.get('token'));
        // console.log(Cookies.get('UID'));
        this.$router.push("/dashboard");

      })
        .catch(err => {
          console.log(err);
          document.body.className = "";
          this.$router.push("/host/Error");
        })

    },
  },
  mounted() {

    //添加一个类 刷新时修改当前body的class
    document.body.className = "login-page";

    //get public key
    axios.get('/api' + '/api/auth/get_public_key').then(res => {
      let str_pub_key = res.data.publicKey;
      console.log("basic public key (cypto) \n" + str_pub_key);
      let str_pri_key = res.data.privateKey;
      this.pub_key = str_pub_key;
      this.pri_key = str_pri_key;
      console.log(this.pub_key, this.pri_key);
    })
      .catch(err => {
        console.log(err);
      })

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

.mx-1 {
  margin: 0 5px;
  /* text size */
  font-size: 2rem;
}

.mx-2 {
  margin: 0 10px;
  /* text size */
  font-size: 1.5rem;
}

.form-group {
  width: 100%;
  margin: 0 auto;
  padding: 5px;
}

.form-group-button {
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