<template>
  <view class="content">
    <view class="login_bg_containe">
      <!-- 如果是设置background-image则写成：<view class="content" :style="{backgroundImage: 'url('+imageURL+')'}"> -->
      <div class="login_bg_containers">
        <!-- <div class="element1">1234</div>
		<div class="element2">12345678</div> -->

        <p
          style="
            text-align: center;
            padding: 10px;
            margin-top: 10px;
            color: #fff;
            font-size: 35px;
            font-family: 'Segoe UI';
          "
        >
          登陆到 {{ App_Name }}
        </p>

        <view class="text">
          <view style="padding: 10px">
            <p style="color: #fff; font-weight: ">发送电子邮件给管理员</p>
          </view>
        </view>

        <view style="padding: 20px">
          <image
            class="mail_forgetpwd"
            src="../../static/kiee_afraid.png"
          ></image>

          <u-button type="primary" text="确认" @click="login"></u-button>
        </view>
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
  onLoad() {},
  onReady() {},
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

.mail_forgetpwd {
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  left: 18%;
}

.content {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
}

.login_bg_containers {
  position: relative;
  width: 350px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #171717;
  border: 1px solid #1999ef;
  padding: 1px color #1999ef;
}
.input_box {
  width: 320px;
  height: 200px;
  padding: 10px;
  margin-top: 10px;
  color: #fff;
  font-size: 35px;
  font-family: "Segoe UI";
}
</style>