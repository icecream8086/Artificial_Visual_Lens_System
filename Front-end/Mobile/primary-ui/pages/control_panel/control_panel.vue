<template>
  <view class="login_bg_containe">
    <view>
      <div>
        <u-row>
          <u-col :span="6">
            <image class="logo_big_icon" src="../../static/neural_network.png"></image>
          </u-col>
          <u-col :span="6">
            <image class="logo_big_icon" src="../../static/neural_network.png"></image>
          </u-col>
        </u-row>
      </div>
      <div>
        <u-search shape="square" :showAction="true" actionText="搜索" :animation="true"></u-search>
      </div>
      <view class="container_test">
        <div>
          <p>
            <Progress_card :steps="1" :Statu_code="1" :data_time_train="'2023年10月8日10点17分'"
              :data_time_Test="'2023年10月8日10点17分'" :data_time_relase="'2023年10月8日10点29分'"></Progress_card>
          </p>
          <p>
            <Progress_card :steps="1" :Statu_code="1" :data_time_train="'2023年10月8日10点17分'"
              :data_time_Test="'2023年10月8日10点17分'" :data_time_relase="'2023年10月8日10点29分'"></Progress_card>
          </p>
        </div>
        
        <view>
          <div>
            <div v-for="i in 100" :key="i" style="color: aqua">
              <p>这是第 {{ i }} 段文本。</p>
            </div>
          </div>

        </view>
      </view>
    </view>
  </view>
</template>
  
  
<script>
import uCol from '../../uni_modules/uview-ui/components/u-col/u-col.vue';
import Progress_card from '../component/Progress_card.vue';

var _this;
export default {
  name: "control_panel",
  components: { uCol, Progress_card },
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

.logo_big_icon {
  height: 350rpx;
  width: 350rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.container_test {

  min-height: 400px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: red;
}</style>