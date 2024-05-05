<template>
  <view class="login_bg_containe">
    <div class="">
      <!-- <div class="bg_box"> -->
      <div>
        <view style="padding: 65px">
          <p class="text-area-title">问候语</p>
          <p class="text-area-title">hello ? 2 ?..</p>

          <view class="text-area">

            <view class="main_button_normal">
              <image class="logo" src="../../static/sunshine.png"></image>
              <view>
                <button @click="uploadImage">上传图片(Res-Net 分类器)</button>

              </view>
            </view>

          </view>

          <view class="text-area">

            <view class="main_button_normal">
              <image class="logo" src="../../static/sunshine.png"></image>
              <view>
                <button @click="uploadImage">上传图片(自定义分类器)</button>
                				<u-textarea placeholder="请输入文件夹路径" />

              </view>
              
            </view>

          </view>

          <view class="text-area">

            <view class="main_button_normal">
              <image class="logo" src="../../static/sunshine.png"></image>
              <p class="logo_context"> 分析结果</p>
            </view>

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

.main_button_clicked {
  /* 按钮主体 */
  position: relative;
  background-color: #f1ebeb;
  border: 1px solid #0881d2;
  padding: 1px color #1999ef;
  border: 2px solid;
  border-radius: 5px;
  min-height: 30px;
  min-width: 250px;
  padding: 35px;
  margin-top: 35px;
  opacity: 50%;
  overflow: visible;
  z-index: 1;
}

.main_button_normal {
  /* 按钮主体 */
  position: relative;
  background-color: #171717;
  border: 1px solid #1999ef;
  padding: 1px color #1999ef;
  color: #1999ef;
  border: 2px solid;
  border-radius: 5px;
  min-height: 30px;
  min-width: 250px;
  padding: 35px;
  margin-top: 35px;
  overflow: visible;
  z-index: 1;
}

.logo {
  /* Logo部分 */
  height: 50px;
  width: 50px;
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
}

.logo_context {
  /* 模拟按钮，正文 */
  font-size: 25px;

  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
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
</style>