<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
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
				title: '暂时不知道放什么，暂时用作占位符\n 可能会用来显示百科功能\n 将来可能有其他放面的用处',
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

			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.detail.value
			},
			durationChange(e) {
				this.duration = e.detail.value
			}
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
</style>