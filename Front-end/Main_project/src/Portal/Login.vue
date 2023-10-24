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
      <el-button :icon="ArrowRightBold" @click="login" class="form-group-button">登录</el-button>
    </div>
  </el-card>
</template>

<script setup>
import { ArrowRightBold } from '@element-plus/icons-vue'

</script>
<script>
import { useDark } from "@vueuse/core";
import JSEncrypt from 'jsencrypt';
// import md5 from 'js-md5';
import axios from 'axios';
export default {
  name: "LoginForm",
  data() {
    return {
      token: "",
      username: "Avatar@mail.com",
      password: "32036005d1f6ed59803ba3e13c80993e",
      pub_key: "",
      pri_key: "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDU+IAtmjENw5Hxky7D/166CstfaYbMlTmhJ6gSLa3XHn4okU4vT74JPCMVgp47iPlaYjExr3fH8JZNUWqNRvHvGy5ndXEAQ0sHczS+KEvgjDT4ZPyqjo0Wr4XnSWEy8NY7jdjL3/TRKTliwwuq8V3Q3Zj/3h8Vn8xwHonD9MBJmJJpHE+SRCiUEVv2PCuwq0lnoFKXanW78+6v0PXqzBr5KB65QiqbqbkeWfqid4O1bdmrVbe0/LipHuwPh1I/C1fB2CtW1ul9IvMbfCFB2KO8pJxxAU+dbC4R+SKSDe5FRCaU/3wzoyjF8ITsWY5uJSUtw8mtNr3U1C+L3sLLpFYJAgMBAAECggEAFp2IY/9Plff2faYc5VaPCTfH+qrus/clOmQnDH4iC5na+QUcHblMs3eZvKklEyqjmwnaEj4BPN/DIDUE+Plni9Xxtq4RmL7snt8IouhNzWuqHNYBgD2YxSfQsvu3eQS65TJWCylOOq9TXxXZ/XY52YoMmyAr4hyY5a+Sftb02+OokJMBqt33emQndhZgiy7NPmv1Qm1BdFCfki+gbhvrszXrrFaSmWiNTdS90P8LabCyf3SzrMmUgDWW5JoXWkYIUt+nEYEgGLKK4e55BSVEhIcVeHYJF7Z1Un5TWR2vwO9JGWstCdQ8K2SdwWuimGtG4HGI0B9bLj9JUm6kMDJAAQKBgQDtYcF6fnzY1MYNu6E0LL0jw08ZU/uoRP1/WHkU/TDuAYoOnfxOAtgwm80NZ4AwLCGsw+mpTYau9+y9ENPiIjxP8/BKZBYVzWqiBUHBqiX/Lzv4KCUKh778KCwV3XkFmILPv4biTncud3INx7KbTm3munjEsqP6XrlHVbwm5kXAAQKBgQDlrJvA34n/K6cua2NZDGAzjCt1EhqL6VCbrucJYNcjMi8LtLBqheVy9VOynl5gxAG/fadNgSQwpVyceA89r3XpLgMHMbZx+6Xr3WoZWPD95rkv3QHAcDdUifKmTrtvymEi3h+yvRbTlMi4L859AWs+oE16rPET/SmA6COD1LCWCQKBgQCUf8Dvhk1Hv+OeF7CC2TIBO18yMw2NeIs0rP4iGToQyjm5Zy+9BZ6E2hJuvj684/60+2IjHXKR5lrc87f5EP217p51iyMdxIFelfdK1cwrVTsoxMRXUBAz4lWh4AijbYL3v5L746Y/FU3uPO0Ipwmtex2tvytBpxw0+fdYRlmAAQKBgQCoVqpWZMG9gJ5pvJY1t4dvYMadaSaB9AF8CmcWjZ9CEc8/sjE38mnpp3ywR7l/DUsGsq+EdCo1aY6GtMze9pLi1TGs/TfvNXY4ebIBYBpKzuhe94sIJHe5g96RHNXvKxOlPc9X75YigEPaFFgxcW/MmCwRxV5xuzXHYN5fCu5fGQKBgQC1bDnRvopHeBIpoSbTejTpm7A9pCwHYlkQEbUgZqgv5tPy1dq/hadrGaRi5NYTNER55ebR+Rxb/f8r9LKpznu374PqB2ZiE6TktnhRUWxDG9TD2bxIOJiqVH2HGB/QSunTltKOEScu8BqjFfjfFr2r8nG5HPHj3Sh5zkJWSBUxtg==",
    };
  },

  methods: {
    switchThemes() {
      // Switch themes
      useDark().value = !useDark().value;

    },
    encrypt(data, publicKey) {
      const encryptor = new JSEncrypt();
      encryptor.setPublicKey(publicKey);
      // 获取转换后的公钥
      let converted_pub_key = encryptor.getPublicKey();
      // 存储转换后的公钥
      console.log(converted_pub_key);
      encryptor.setPublicKey(converted_pub_key);
      const encrypted = encryptor.encrypt(data);
      return encrypted;
    },
    decrypt(data, privateKey) {
      const decryptor = new JSEncrypt();
      decryptor.setPrivateKey(privateKey);
      const decrypted = decryptor.decrypt(data);
      return decrypted;
    }
    ,
    checkDarkMode() {
      // Check if dark mode is enabled
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    },
    login() {
      // Login
      // this.$router.push("/dashboard");
      // this.$store.dispatch('updateToken', this.token);
      // let encryptedPassword = this.password ? md5(this.password) : null;

      this.password = this.encrypt(this.password, this.pub_key);
      console.log(this.username + '\n' + this.password + '\n');
      
      let decryptedPassword = this.decrypt(this.password, this.pri_key);
      console.log("decryptedPassword \n"+decryptedPassword);

      axios.post('/api' + '/api/auth/login', {
        usernameOrEmail: this.username,
        password: this.password,
        flag: 'rsa',
      }).then(res => {
        console.log(res);
        this.$store.dispatch('updateToken', res.data.token);
        this.$router.push("/dashboard");
      })
        .catch(err => {
          console.log(err);
        })

    },
  },
  mounted() {

    //添加一个类 刷新时修改当前body的class
    document.body.className = "login-page";

    //get public key
    axios.get('/api' + '/api/auth/get_public_key').then(res => {
      let str_pub_key = res.data.publicKey;
      this.pub_key = str_pub_key;
      console.log(this.pub_key);
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