<template>
<view class="login_bg_containe">
	<view class="bg_box">
		<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
	</view>
</view>
	
</template>


<script>
	var _this;
	export default {
		data() {
			return {
				windowWidth:'',
				windowHeight:'',
				title: '待完成',
			}
		},
		onLoad() {
		_this= this;
		this.init();
		},
		methods: {
			
			//初始化
			init(){
				let _this = this;
				uni.getSystemInfo({
					success: function(res) {
						_this.windowWidth = res.windowWidth;
						_this.windowHeight = res.windowHeight;
					}
				});
			},


		}
	}
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
  height: calc((100vw - 50px) * 350 / 500);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #171717;
  border: 1px solid #1999ef;
  padding: 1px color #1999ef;
}
</style>