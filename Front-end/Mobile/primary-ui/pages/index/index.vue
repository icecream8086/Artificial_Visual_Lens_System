<template>
  <view class="login_bg_containe">
    <div class="">
      <!-- <div class="bg_box"> -->
      <div>
        <view style="padding: 65px ">
          <p class="text-area-title">问候语</p>
          <p class="text-area-title">hello ? 2 ?..</p>

          <view class="text-area">
          <div class="element1">
              <u-icon
                name="photo"
                color="#2979ff"
                size="64"
                class="button_icon"
              ></u-icon>
            </div>
            <div class="element2">
              <u-button class="main_button" text="本地天气"></u-button>
            </div>
        </view>

        <view class="text-area">
          <div class="element3">
              <u-icon
                name="photo"
                color="#2979ff"
                size="64"
                class="button_icon"
              ></u-icon>
            </div>
            <div class="element2">
              <u-button class="main_button" text="查看日志"></u-button>
            </div>
        </view>

        <view class="text-area">
          <div class="element4">
              <u-icon
                name="photo"
                color="#2979ff"
                size="64"
                class="button_icon"
              ></u-icon>
            </div>
            <div class="element2">
              <u-button class="main_button" text="服务器负载"></u-button>
            </div>
        </view>

        </view>
      </div>
    </div>
  </view>
</template>


<script>
var _this;
export default {
  data() {
    return {
      windowWidth: "",
      windowHeight: "",
      title:
        "暂时不知道放什么，暂时用作占位符\n 可能会用来显示百科功能\n 将来可能有其他放面的用处",
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

    changeIndicatorDots(e) {
      this.indicatorDots = !this.indicatorDots;
    },
    changeAutoplay(e) {
      this.autoplay = !this.autoplay;
    },
    intervalChange(e) {
      this.interval = e.detail.value;
    },
    durationChange(e) {
      this.duration = e.detail.value;
    },
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

.bg_box {
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

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main_button {
  background-color: #171717;
  border: 1px solid #1999ef;
  padding: 1px color #1999ef;
  color: #1999ef;
  border: 2px solid;
  border-radius: 5px;
  height: 50px;
  width: 300px;
  padding: 35px;
  margin-top: 35px;
  z-index: 1;
}
.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area-title {
  display: flex;
  justify-content: center;
  color: white;
}
.button_icon {
  position: absolute;

  z-index: 2;
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

.element1 {
  position: absolute;
  top: 24%;
  left: 60%;
  /* background-color: red; */
  z-index: 2;
}

.element3 {
  position: absolute;
  top: 41%;
  left: 60%;
  /* background-color: red; */
  z-index: 3;
}
.element4 {
  position: absolute;
  top: 59%;
  left: 60%;
  /* background-color: red; */
  z-index: 4;
}


.element2 {

  /* background-color: blue; */
  z-index: 1;
}
</style>