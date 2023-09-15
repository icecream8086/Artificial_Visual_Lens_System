<template>
  <view class="content">

    <view class="login_bg_containe">
      <image class="logo" src="../../static/kiee_afraid.png"></image>

      <!-- 如果是设置background-image则写成：<view class="content" :style="{backgroundImage: 'url('+imageURL+')'}"> -->
      <div class="login_bg_containers">

        <!-- <div class="element1">1234</div>
      <div class="element2">12345678</div> -->

        <p style="
          text-align: center;
          padding: 10px;
          margin-top: 10px;
          color: #fff;
          font-size: 18px;
          font-family: 'Segoe UI';
        ">
          登陆到 {{ App_Name }}
        </p>
        <view class="text">
          <view style="padding: 10px">
            <p style="color: #fff; font-weight: ">用户名</p>
            <uni-easyinput class="uni-mt-5" trim="all" v-model="form.username" placeholder="请输入内容">
            </uni-easyinput>
            <view style="margin-top: 10px">
              <p style="color: #fff">密码</p>
            </view>
            <!-- 添加这行代码来增加间距 -->
            <uni-easyinput type="password" v-model="form.password" placeholder="请输入密码"></uni-easyinput>
          </view>
        </view>

        <view style="padding: 20px">
          <u-button type="primary" text="确认登录" @click="login"></u-button>
        </view>
        <p style="
          text-align: center;
          margin-top: 10px;
          color: #fff;
          font-size: 20px;
          font-family: 'Segoe UI';
        ">
          忘记密码
        </p>
        <p style="
          text-align: center;
          margin-top: 10px;
          color: #fff;
          font-size: 20px;
          font-family: 'Segoe UI';
        ">
          其他登录方式
        </p>
        <p style="
          margin: 20px;
          text-align: center;
          margin-top: 10px;
          color: #fff;
          font-size: 20px;
          font-family: 'Segoe UI';
          text-decoration: underline;
        ">
          重设服务器地址
        </p>
      </div>

      <view>
        <u-toast ref="uToast" />
      </view>
    </view>
  </view>
</template>

<script>
  // #ifndef VUE3
  import Vue from "vue"; // 引入Vue
  // #endif

  // #ifdef VUE3
  import { defineComponent } from "vue"; // 引入Vue
  import { data } from "../../uni_modules/uview-ui/libs/mixin/mixin";
  // #endif

  export default {
    data() {
      return {
        imageURL: "/static/bokeh-hex.jpg",
        App_Name: "Visual_lens_System",
        loginmessage: " ",
        show: true,
        form: {
          username: "",
          password: "",
        },
        placeholderStyle: "color:#2979FF;font-size:14px",
        styles: {
          color: "#2979FF",
          borderColor: "#2979FF",
        },
      };
    },
    onLoad() { },
    onReady() { },
    mounted() {
      document.body.className = "login_bg_container";
    },
    methods: {
      login() {
        //判断此页数据对象是否有一部分为空
        if (
          this.form.username == "" ||
          this.form.password == "" ||
          (this.form.username == "" && this.form.password == "")
        ) {
          console.log("Incomplete information entered");
          this.$toast("请输入完整信息");
        } else {
          console.log("Sending login request...");
          this.$request({
            url: "/user/login",
            method: "POST",
            data: this.form,
          }).then((res) => {
            if (res.data.code != 200) {
              console.log("Invalid username or password");
              this.$toast("用户名或密码错误");
            } else if (res.data.code == 200) {
              console.log("Login successful");
              //缓存当前用户对象状态
              uni.setStorageSync("storage_key", "hello");
              uni.setStorageSync("token", res.data.data.token);
              uni.setStorageSync("username", res.data.data.username);
              uni.setStorageSync("nickname", res.data.data.nickname);
              uni.setStorageSync("avatarUrl", res.data.data.avatarUrl);
              uni.setStorageSync("role", res.data.data.role);
              uni.getStorage({
                key: "token",
                success: function (res) {
                  console.log(res.data);
                },
              });
              this.$toast("登录成功");
              setTimeout(() => {
                uni.switchTab({
                  url: "/pages/common/setting",
                });
              }, 3000); // 等待两秒后再执行切换操作
            } else {
              console.log("Unknown error");
              this.$toast("未知错误");
            }
          });
        }
      },
    },
  };
</script>

<style lang="scss">
  .uni-mt-5 {
    margin-top: 5px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .input {
    width: 200px;
    height: 30px;
    margin-top: 5px;
  }
</style>

<style lang="scss">
  .uni-mt-5 {
    margin-top: 5px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .input {
    width: 200px;
    height: 30px;
    margin-top: 5px;
  }
</style>

<style lang="css">
  .login_bg_containe {
    flex: 1;
    background-image: url("../../static/bokeh-hex.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: blue;
  }

  .logo {
    width: 200px;
    height: 200px;
    position: relative;
    left: 50%;
    top: 10%;
    transform: translate(-50%, -50%);
  }

  

  .content {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }

  .login_bg_containers {
  position: relative;
  min-width: 350px;
  min-height: 500px;
  width: calc(100vw - 50px);
  height: calc((100vw - 50px) * 350 / 500);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #171717;
  border: 1px solid #1999ef;
  padding: 1px color #1999ef;
  }

  .element1 {
    position: absolute;
    top: 100px;
    left: 100px;
    background-color: red;
    z-index: 2;
  }

  .element2 {
    position: absolute;
    top: 100px;
    left: 100px;
    background-color: blue;
    z-index: 1;
  }
</style>