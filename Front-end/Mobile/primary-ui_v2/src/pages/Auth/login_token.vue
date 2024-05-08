<template>
    <view class="login_bg_containe" id="1" @touchmove.stop.prevent="() => {}">
        <el-card class="box-card_login">
            <p style="
          text-align: center;
          padding: 10px;
          margin-top: 10px;
          font-family: 'Segoe UI';
        ">
                登陆到 {{ "App_Name" }}
            </p>

            <view>
                <view style="padding: 10px">
                    <label for="username">用户名</label>
                    <el-input type="textarea" style="text-align: center; margin-top: 5px" />
                </view>

                <view style="text-align: center; margin-top: 10px">
                    <el-button type="primary" plain icon="Right" class="input">确认登录</el-button>
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


    .input {
        width: 240px;
        height: 40px;
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