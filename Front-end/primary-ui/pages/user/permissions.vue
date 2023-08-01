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
				title: 'set_user_permissions：用于设置用户权限。\nget_user_permissions：用于获取用户权限。\nupdate_user_permissions：用于更新用户权限。\ndelete_user_permissions：用于删除用户权限。\ncheck_user_permission：用于检查用户是否具有特定权限。\ngrant_user_permission：用于授予用户特定权限。\nrevoke_user_permission：用于撤销用户特定权限。\n',
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
</style>