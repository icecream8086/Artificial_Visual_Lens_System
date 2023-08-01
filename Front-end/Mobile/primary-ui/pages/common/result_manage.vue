<template>

	<!-- @展示区 -->
<view>
    <u-search shape="round" value="请输入查询关键字"></u-search>

    <view class="swiper-wrap">
      <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
        :duration="duration">
        <swiper-item>
          <view class="swiper-item">展示归档内容用,内容随机 A</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item ">展示归档内容用,内容随机 B</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item ">展示归档内容用,内容随机 C</view>
        </swiper-item>
		<swiper-item>
			<view class="swiper-item ">展示归档内容用,内容随机 D</view>
		  </swiper-item>
      </swiper>
    </view>

    <div class="u-collapse-wrap">
      <u-collapse @change="change" @close="close" @open="open">

        <u-collapse-item title="随机展示设置" name="ppt controller">
			<view class="uni-list-cell uni-list-cell-pd flex">
				<view class="uni-list-cell-db flex-item">随机展示行数 &nbsp &nbsp &nbsp &nbsp</view>
				<view class="swiper-list">
					<u-input 
					v-model="username" 
					:placeholder="'设置展示行数'" 
					:maxlength="20" 
					:clearable="true" 
				  />
			  </view>
 
		  <view class="container">
			<view class="uni-list-cell uni-list-cell-pd flex">
			  <view class="uni-list-cell-db">指示点 &nbsp &nbsp &nbsp &nbsp</view>
			  <switch class="flex-item" :checked="indicatorDots" @change="changeIndicatorDots" />
			</view>
			<view class="uni-list-cell uni-list-cell-pd flex">
			  <view class="uni-list-cell-db">自动播放 &nbsp &nbsp &nbsp &nbsp</view>
			  <switch class="flex-item" :checked="autoplay" @change="changeAutoplay" />
			</view>
		  </view>
          </view>
          <view class="uni-padding-wrap">
            <view class="uni-common-mt">
              <text>幻灯片切换时长(ms)</text>
              <text class="info">{{duration}}</text>
            </view>
            <slider @change="durationChange" :value="duration" min="500" max="2000" />
            <view class="uni-common-mt">
              <text>自动播放间隔时长(ms)</text>
              <text class="info">{{interval}}</text>
            </view>
            <slider @change="intervalChange" :value="interval" min="2000" max="10000" />
          </view>
        </u-collapse-item>
		<u-collapse-item
		title="过滤条件"
		name="Variety components"
	  >
		<text class="u-collapse-content">将来会重定向</text>
	  </u-collapse-item>
      </u-collapse>
	  <view class="text-area">
	  	<text class="title">{{message}}</text>
	  </view>
    </div>

	<view style="padding: 20px;">
		<u-button type="primary" text="查询"></u-button>
	</view>
	
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
			message:"用于高级查询功能,暂未设计完毕"

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
		min-width: 60px; /* 设置一个最小宽度，避免文本过短时宽度过小 */

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