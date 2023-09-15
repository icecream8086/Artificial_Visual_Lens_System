<template>
  <view class="login_bg_containe" id="1" @touchmove.stop.prevent="() => {}">

    <image class="logo" src="../../static/kiee_afraid.png" id="2"></image>
    <el-card class="box-card_login">
      <p style="
        text-align: center;
        padding: 10px;
        margin-top: 10px;
        font-size: 18px;
        font-family: 'Segoe UI';
      ">
        登陆到 {{ "App_Name" }}
      </p>

      <view>
        <view style="padding: 10px">
          <label for="username">用户名</label>
          <el-input type="text" style="text-align: center; margin-top: 5px" />
          <view style="margin-top: 10px">
            <label for="username">密码</label>
            <el-input type="password" style="text-align: center; margin-top: 5px" />
          </view>
          <!-- 添加这行代码来增加间距 -->
        </view>

        <view style="text-align: center; margin-top: 10px">
          <el-button type="primary" plain icon="Right" class="input">确认登录</el-button>
        </view>
        <view style="
          text-align: center;
          padding: 10px;
          margin-top: 10px;
          font-family: 'Segoe UI';
        ">
          <div>
            <el-text>忘记密码?</el-text>
          </div>
          <div>
            <el-text>其他登录方式</el-text>
          </div>
        </view>
      </view>
    </el-card>

  </view>
</template>
<script>
  export default {
    data() {
      return {
        title: "Hello",
        LOGO: "https://img1.imgtp.com/2023/09/15/FQzHXRec.png",
      };
    },
    onLoad() { },
    methods: {},
    mounted() { },
  };
</script>
<style scoped>
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

  .back_ground {
    background-color: #1999ef;
    background-image: linear-gradient(120deg, #1999ef 0%, #1999ef 100%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .text {
    font-size: 14px;
  }

  .logo {
    width: 150px;
    height: 150px;
    position: relative;
    left: 50%;
    top: 15%;
    transform: translate(-50%, -50%);
  }

  .item {
    padding: 18px 0;
  }

  .input {
    width: 240px;
    height: 40px;
    /* margin-top: 5px;
    margin-right: 50px; */
  }

  .input_area {
    width: 360px;
    height: 30px;
    /* margin-top: 5px;
    margin-right: 50px; */
  }

  .box-card_login {
    min-width: 240px;
    min-height: 360px;
    width: calc(100vw - 50px);
    height: calc((100vw - 50px) * 240 / 360);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #1999ef;
    padding: 1px color #1999ef;
  }
</style>