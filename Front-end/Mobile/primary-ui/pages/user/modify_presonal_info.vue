<template>
  <view class="login_bg_containe">
    <view class="bg_box">
      <view>
        <u-avatar
          :src="src"
          size="120"
          style="margin-left: 10%; margin-top: 5%"
        ></u-avatar>
        <u-row>
          <u-col :span="8"> </u-col>
          <u-col :span="4">
            <span style="color: #ffffff">UserName</span>
            <p></p>
            <span style="color: #ffffff">group</span>
          </u-col>
        </u-row>
      </view>

      <view>
        <u-row style="margin-top: 10%">
          <u-col :span="2" style="text-align: center">
            <div style="background-color: aqua" v-show="devTag">
              Empty <Area></Area><br /><br />
            </div>
            <p></p>
          </u-col>
          <u-col :span="8" style="text-align: center">
            <div style="background-color: rgb(255, 106, 0)" v-show="devTag">
              Modify Area <br /><br />
            </div>
            <view class="text">
              <view style="padding: 5px">
                <uni-easyinput
                  class="uni-mt-5"
                  trim="all"
                  placeholder="请输入内容"
                >
                </uni-easyinput>
                <view style="margin-top: 2px"> </view>
                <!-- 添加这行代码来增加间距 -->
              </view>
              <view style="padding: 5px">
                <uni-easyinput
                  class="uni-mt-5"
                  trim="all"
                  placeholder="请输入内容"
                >
                </uni-easyinput>
                <view style="margin-top: 2px"> </view>
                <!-- 添加这行代码来增加间距 -->
              </view>
              <view style="padding: 5px">
                <uni-easyinput
                  class="uni-mt-5"
                  trim="all"
                  placeholder="请输入内容"
                >
                </uni-easyinput>
                <view style="margin-top: 2px"> </view>
                <!-- 添加这行代码来增加间距 -->
              </view>
              <view style="padding: 5px">
                <uni-easyinput
                  class="uni-mt-5"
                  trim="all"
                  placeholder="请输入内容"
                >
                </uni-easyinput>
                <view style="margin-top: 2px"> </view>
                <!-- 添加这行代码来增加间距 -->
              </view>
              <view style="padding: 5px">
                <uni-easyinput
                  class="uni-mt-5"
                  trim="all"
                  placeholder="请输入内容"
                >
                </uni-easyinput>
                <view style="margin-top: 2px"> </view>
                <!-- 添加这行代码来增加间距 -->
              </view>
              <view style="padding: 5px">
                <uni-easyinput
                  class="uni-mt-5"
                  trim="all"
                  placeholder="请输入内容"
                >
                </uni-easyinput>
                <view style="margin-top: 2px"> </view>
                <!-- 添加这行代码来增加间距 -->
              </view>
              <view style="padding: 5px">
                <uni-easyinput
                  class="uni-mt-5"
                  trim="all"
                  placeholder="请输入内容"
                >
                </uni-easyinput>
                <view style="margin-top: 2px"> </view>
                <!-- 添加这行代码来增加间距 -->
              </view>
              <view style="padding: 5px">
                <uni-easyinput
                  class="uni-mt-5"
                  trim="all"
                  placeholder="请输入内容"
                >
                </uni-easyinput>
                <view style="margin-top: 2px"> </view>
                <!-- 添加这行代码来增加间距 -->
              </view>
              <view style="padding: 5px">
                <uni-easyinput
                  class="uni-mt-5"
                  trim="all"
                  placeholder="请输入内容"
                >
                </uni-easyinput>
                <view style="margin-top: 2px"> </view>
                <!-- 添加这行代码来增加间距 -->
              </view>
              <view style="padding: 20px">
                <u-button
                  type="primary"
                  text="确认登录"
                ></u-button>
              </view>
            </view>
          </u-col>
          <u-col :span="2" style="text-align: center">
            <div style="background-color: aqua" v-show="devTag">
              Empty<br /><br />
            </div>
            <p></p>
          </u-col>
        </u-row>
      </view>
    </view>
  </view>
</template>
  
  
  <script>
var _this;
export default {
  data() {
    return {
      src: "https://img1.imgtp.com/2023/06/10/dSC7l8wI.jpg",
      windowWidth: "",
      windowHeight: "",
      title: "待完成",
      devTag: false,
    };
  },
  onLoad() {
    _this = this;
    this.init();
  },
  methods: {
    //初始化
    init() {
      let _this = this;
      uni.getSystemInfo({
        success: function (res) {
          _this.windowWidth = res.windowWidth;
          _this.windowHeight = res.windowHeight;
        },
      });
    },
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

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.swiper-item {
  display: block;
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
}
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

.bg_box {
  position: relative;
  min-width: 350px;
  min-height: 500px;
  width: calc(100vw - 50px);
  height: calc((100vw - 50px) * 1080 / 1920);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #171717;
  border: 1px solid #1999ef;
  padding: 1px color #1999ef;
  overflow: auto;
}
</style>