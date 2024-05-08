<template>
    <view class="login_bg_containe">
      <view class="content" style="overflow: auto">
        <u-image :show-loading="true" :src="src" class="main_imagebox"></u-image>
      </view>
      <view class="bg_box_control_panel">
        <view>
          <div>
            <div v-for="i in 100" :key="i" style="color: aqua">
              <p>这是第 {{ i }} 段文本。</p>
            </div>
          </div>
        </view>
      </view>
    </view>
  </template>
    
    
    <script>
  var _this;
  export default {
    data() {
      return {
        src: "https://cdn.uviewui.com/uview/album/1.jpg",
        windowWidth: "",
        windowHeight: "",
        title: "待完成",
        devTag: false,
      };
    },
  
    methods: {
      //初始化
  
    },
  };
  </script>
    
    <style>
  
  
  
  
  
  .login_bg_containe {
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
  
  .bg_box_control_panel {
    position: relative;
    min-width: 350px;
    min-height: 200px;
    width: calc(100vw - 50px);
    height: calc((100vw - 50px) * 300 / 350);
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #171717;
    border: 1px solid #1999ef;
    padding: 1px color #1999ef;
    overflow: auto;
    z-index: 1;
  }

  
  .main_imagebox {
    min-width: 192px;
    min-height: 108px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
    border: #0881d2 3px solid;
    z-index: 2;
  }
  </style>