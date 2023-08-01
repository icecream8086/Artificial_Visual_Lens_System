<template>

	<view>
		<view>
			<u-search shape="round" value="请输入查询关键字"></u-search>
		</view>
		
		<view class="content">
			<text class="title">{{ title }}</text>
			<text class="title">{{ message }}</text>
			<u-back-top :scroll-top="scrollTop"></u-back-top>
			
		</view><image
			src="https://img.moegirl.org.cn/common/b/be/%E5%8E%BB%E7%A0%81%E5%A4%B4%E6%95%B4%E7%82%B9%E8%96%AF%E6%9D%A1.webp"
			mode="scaleToFill"
		/>
		<p>
			
		</p>
		<view class="content">
			<p>当前为第 1 页, 共 10页</p>
		</view>
		<view class="divider"></view>
		
		<view class="parent">
			<p>跳转到</p>
			<u-number-box v-model="value" @change="valChange"></u-number-box>
			<u-button text="跳转"></u-button>
		  </view>

	</view>
</template>


<script>
	export default {
		data() {
			return {
				value: 0,
				scrollTop: 0,
				title: "提交的队列 可以查询当前进度",
				message: "查看历史记录",
				disabled: false,
			};
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},

		onLoad() { },

		methods: {
			valChange(e) {
				console.log('当前值为: ' + e.value)
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

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: $u-primary;
	}
	.wrap {
		height: 200vh;
	}
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}
	  .parent {
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* 设置子组件之间的间距 */
    align-items: center; /* 在垂直方向上居中对齐 */
  }
	  /* 可以在样式中设置分割线的颜色和样式 */
	  .divider {
		border-color: #4665fe;
		border-style: solid;
		border-width: 1px 0 0 0; /* 设置上边框的宽度为1px，颜色为#ddd */
		margin: 10px 0; /* 设置上下边距为10px */
	  }
</style>