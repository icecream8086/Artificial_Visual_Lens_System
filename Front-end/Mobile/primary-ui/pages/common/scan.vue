<template>
	<view class="login_bg_containe">
		<view class="page">
		<view style="height: 80rpx;"></view>
		<navigator class="buttons" url="../camera/camera"><button type="primary">打开自定义相机</button></navigator>
		<!-- <view style="height: 20rpx;"></view>
		<navigator class="buttons" url="../camera/portrait/portrait"><button type="primary">打开人像采集相机</button></navigator> -->
		<view style="height: 60rpx;"></view>
		<navigator class="buttons" url="../camera/idcard/idcard?dotype=face"><button type="primary">打开身份证人像面采集相机</button></navigator>
		<view style="height: 20rpx;"></view>
		<navigator class="buttons" url="../camera/idcard/idcard?dotype=badge"><button type="primary">打开身份证国徽面采集相机</button></navigator>
		<view style="height: 60rpx;"></view>
		<navigator class="buttons" url="../camera/idphoto/idphoto"><button type="primary">打开证件照采集相机</button></navigator>
		<view style="height: 60rpx;"></view>
		<navigator class="buttons" url="../camera/watermark/watermark"><button type="primary">打开定制水印相机</button></navigator>
		<view style="height: 80rpx;"></view>
		
		<view>拍摄结果预览</view>
		<image  class="preview" :src="imagesrc" mode="aspectFit" style="     background-image: url('../../static/24gl-pictures.png');     background-size: auto; background-repeat: no-repeat; background-position: center;

 width:710rpx:height:710rpx;margin: 20rpx;     border: 1px solid #1999ef;
    padding: 1px color #1999ef;     background-color: #171717;
 "></image>
		
		<canvas id="canvas-clipper" canvas-id="canvas-clipper" type="2d" :style="{width: canvasSiz.width+'px',height: canvasSiz.height+'px',position: 'absolute',left:'-500000px',top: '-500000px'}" />
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
			imagesrc: null,
			canvasSiz:{
				width:188,
				height:273
			}
		};
	},
	onLoad() {
		_this= this;
		this.init();
	},
	methods: {
		goAbout() {
      // Navigate to the about page.
      uni.navigateTo({
        url: "/pages/user/about",
      });
    },
		//设置图片
		setImage(e) {
			console.log(e);
			//显示在页面
			//this.imagesrc = e.path;
			if(e.dotype =='idphoto'){
				_this.zjzClipper(e.path);
			}else if(e.dotype =='watermark'){
				_this.watermark(e.path);
			}else{
				_this.savePhoto(e.path);
			}
		},
		
		//证件照裁切
		zjzClipper(path) {
			uni.getImageInfo({
				src: path,
				success: function(image) {
					console.log(image);
					_this.canvasSiz.width =188;
					_this.canvasSiz.height =273;
					
					
					//因为nvue页面使用canvas比较麻烦，所以在此页面上处理图片
					let ctx = uni.createCanvasContext('canvas-clipper', _this);
					
					ctx.drawImage(
						path,
						parseInt(0.15 * image.width),
						parseInt(0.17 * image.height),
						parseInt(0.69 * image.width),
						parseInt(0.65 * image.height),
						0,
						0,
						188,
						273
					);
					
					ctx.draw(false, () => {
						uni.canvasToTempFilePath(
							{
								destWidth: 188,
								destHeight: 273,
								canvasId: 'canvas-clipper',
								fileType: 'jpg',
								success: function(res) {
									_this.savePhoto(res.tempFilePath);
								}
							},
							_this
						);
					});
				}
			});
		},
		
		//添加照片水印
		watermark(path){
			uni.getImageInfo({
				src: path,
				success: function(image) {
					console.log(image);
					
					_this.canvasSiz.width =image.width;
					_this.canvasSiz.height =image.height;
					
					//担心尺寸重置后还没生效，故做延迟
					setTimeout(()=>{
						let ctx = uni.createCanvasContext('canvas-clipper', _this);
						
						ctx.drawImage(
							path,
							0,
							0,
							image.width,
							image.height
						);
						
						//具体位置如需和相机页面上一致还需另外做计算，此处仅做大致演示
						ctx.setFillStyle('white');
						ctx.setFontSize(40);
						ctx.fillText('live-camera', 20, 100);
						
						
						//再来加个时间水印
						var now = new Date();
						var time= now.getFullYear()+'-'+now.getMonth()+'-'+now.getDate()+' '+now.getHours()+':'+now.getMinutes()+':'+now.getMinutes();
						ctx.setFontSize(30);
						ctx.fillText(time, 20, 140);

						ctx.draw(false, () => {
							uni.canvasToTempFilePath(
								{
									destWidth: image.width,
									destHeight: image.height,
									canvasId: 'canvas-clipper',
									fileType: 'jpg',
									success: function(res) {
										_this.savePhoto(res.tempFilePath);
									}
								},
								_this
							);
						});
					},500)
					
					
				}
			});
		},
		
		//保存图片到相册，方便核查
		savePhoto(path){
			this.imagesrc = path;
			//保存到相册
			uni.saveImageToPhotosAlbum({
				filePath: path,
				success: () => {
					uni.showToast({
						title: '已保存至相册',
						duration: 2000
					});
				}
			});
		},
		
		//初始化
		init(){
			let _this = this;
			uni.getSystemInfo({
				success: function(res) {
					_this.windowWidth = res.windowWidth;
					_this.windowHeight = res.windowHeight;
				}
			});
		}
		
	}
};
</script>

<style lang="css">

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

</style>
<style lang="scss">
.page {
	width: 750rpx; 
	justify-content: center;
	align-items: center;
	flex-direction:column;
	display: flex;
	.buttons {
		width: 600rpx;
	}
}


</style>
