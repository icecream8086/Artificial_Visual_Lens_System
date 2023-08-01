<template>
  <view>
    <uni-card :is-shadow="false" is-full>
      <text class="uni-h6">{{ loginmessage }}</text>
    </uni-card>


    <view class="content">
      <view class="text">
        <view style="padding: 20px">
          <uni-easyinput class="uni-mt-5" trim="all" v-model="form.username" placeholder="请输入内容" >
          </uni-easyinput>
          <view style="margin-top: 10px"></view>
          <!-- 添加这行代码来增加间距 -->

          <uni-easyinput type="password" v-model="form.password" placeholder="请输入密码"></uni-easyinput>
        </view>
      </view>
    </view>

    <view class="content">
      <view class="text">
        <view style="padding: 20px">
          <u-button type="primary" text="确认登录" @click="login"></u-button>
        </view>
      </view>
    </view>

    <view>
      <u-toast ref="uToast" />
    </view>
  </view>
</template>

<script>
// #ifndef VUE3
import Vue from 'vue' // 引入Vue
// #endif

// #ifdef VUE3
import { defineComponent } from 'vue' // 引入Vue
import { data } from '../../uni_modules/uview-ui/libs/mixin/mixin';
// #endif


  export default {
    data() {
      return {
        loginmessage:' ',
        show: true,
        form: {
          username: '',
          password: ''
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
    methods: {
      login() {
        //判断此页数据对象是否有一部分为空
        if (this.form.username == '' || this.form.password == '' || (this.form.username == '' && this.form.password == '')) {
          console.log('Incomplete information entered');
          this.$toast('请输入完整信息');
        }
        else {
          console.log('Sending login request...');
          this.$request(
            {
              url: '/user/login',
              method: 'POST',
              data: this.form
            }).then(res => {
              
              if (res.data.code != 200) {
                console.log('Invalid username or password');
                this.$toast('用户名或密码错误')
              }
              else if (res.data.code == 200) {
                console.log('Login successful');
                //缓存当前用户对象状态
                uni.setStorageSync('storage_key', 'hello');
                uni.setStorageSync('token', res.data.data.token)
                uni.setStorageSync('username', res.data.data.username)
                uni.setStorageSync('nickname', res.data.data.nickname)
                uni.setStorageSync('avatarUrl', res.data.data.avatarUrl)
                uni.setStorageSync('role', res.data.data.role)
                uni.getStorage({
                  key: 'token',
                  success: function (res) {
                    console.log(res.data);
                  }
                });
                this.$toast('登录成功')
                setTimeout(() => {
                  uni.switchTab({
                    url: '/pages/common/setting'
                  })
                }, 3000); // 等待两秒后再执行切换操作
              }
              else {
                console.log('Unknown error');
                this.$toast('未知错误')
              }
                          })
        }
      }
    }
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