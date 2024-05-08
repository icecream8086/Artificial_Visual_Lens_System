<template>
    <view class="login_bg_containe" id="1" @touchmove.stop.prevent="() => {}">
      
      <el-button @click="switchThemes_clicked">AAAAAAAAAAA</el-button>
      <div class="centered-element">
        <el-row>
          <el-col :span="12" class="padding_border">
            <el-button plain class="blue_border main_button_style" icon="MessageBox" type="primary"
              >查看当前1天气</el-button
            >
          </el-col>
          
        </el-row>
      </div>
  
      <div class="centered-element">
        <el-row>
          <el-col :span="12" class="padding_border">
            <el-button plain class="blue_border main_button_style" icon="MessageBox" type="primary"
              >查看服务器日志w</el-button
            >
          </el-col>
          
        </el-row>
      </div>
      <div class="centered-element">
        <el-row>
          <el-col :span="12" class="padding_border">
            <el-button plain class="blue_border main_button_style" icon="Cpu" type="primary"
              >查看服务器负载</el-button
            >
          </el-col>
          
        </el-row>
      </div>
  
    </view>
  </template>
  
  <script>
  import { setTabBarStyle_black } from "../Color/uni_framework/tab_bar";
  import { Navigation_bar_white } from "../Color/uni_framework/Navigation_bar";
  
  import { useDark } from "@vueuse/core";
  import { switchThemes, checkDarkMode, fuck_it } from "../style.js";
  export default {
    data() {
      return {
        title: "Hello",
      };
    },
    onLoad() {},
    methods: {
      switchThemes_clicked() {
        switchThemes();
      },
    },
    mounted() {
      // fuck_it();
      setTabBarStyle_black();
      Navigation_bar_white();
      if (checkDarkMode() === true && useDark().value === false) {
        // only allowed to switch at first load
        // otherwise it will load switch repeatedly
        switchThemes();
        console.log("Dark mode is enabled.");
      } else {
        console.log("checkDarkMode() ok");
      }
    },
  };
  </script>
  
  <style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }
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
  .text-area {
    display: flex;
    justify-content: center;
  }
  .blue_border {
    border: 1px solid #1999ef;
    padding: 1px color #1999ef;
  }
  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
  .container {
    position: relative;
  }
  
  .padding_border {
    padding: 40px;
  }
  .main_button_style {
    height: 100px;
    width: 300px;
    border-radius: 10px;
    font-size: 25px;
  
  }
  .centered-element {
    position: relative;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  </style>
  