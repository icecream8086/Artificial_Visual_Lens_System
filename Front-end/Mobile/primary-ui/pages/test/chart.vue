<template>
	<el-row>
		<el-col :span="24">
			<view style="height: 200rpx">
				<l-echart ref="chart"></l-echart>
			</view>
		</el-col>
	</el-row>
</template>

<script>
import * as echarts from '@/uni_modules/lime-echart/static/echarts.min';
export default {
	data() {
		return {
		}
	},
	async mounted() {
		this.$refs.chart.init(echarts, chart => {
			var option = {
				backgroundColor: "#ffffff",
				series: [{
					name: '业务指标',
					type: 'gauge',
					detail: {
						formatter: '{value}%'
					},
					axisLine: {
						show: true
					},
					data: [{
						value: 40,
						name: '完成率',
					}]

				}]
			};
			chart.setOption(option)

		});
	},
}
</script>