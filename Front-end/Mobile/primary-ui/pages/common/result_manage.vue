<template>

	<!-- @展示区 -->
	<view>
		<button @click="uploadImage">上传图片</button>

	</view>

</template>


<script>
export default {
	data() {
		return {
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			username: '4',
			message: "用于高级查询功能,暂未设计完毕"

		}
	},
	methods: {
		change() {
			console.log('change')
		},
		close() {
			console.log('close')
		},
		open() {
			console.log('open')
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
		},
		uploadImage() {
            uni.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: (res) => {
                    const tempFilePaths = res.tempFilePaths
                    uni.uploadFile({
                        url: 'https://www.example.com/upload', // 您的上传图片接口地址
                        filePath: tempFilePaths[0],
                        name: 'file',
                        formData: {
                            'user': 'test'
                        },
                        success: (uploadFileRes) => {
                            console.log(uploadFileRes);
                        }
                    });
                }
            });
        }
	}
}
</script>

<style>
.flex {
	display: flex;
	align-items: center;
}

.flex-item {
	flex: 1;
	min-width: 60px;
	/* 设置一个最小宽度，避免文本过短时宽度过小 */

}

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