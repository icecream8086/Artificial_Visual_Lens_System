// @ts-nocheck
import {
	createSSRApp
} from "vue";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as echarts from 'echarts';

import App from "./App.vue";


export function createApp() {
	const app = createSSRApp(App);
	app.use(ElementPlus)
	app.use(echarts)
	app.config.productionTip = false;
	app.config.globalProperties.$echarts = echarts;

	for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
		app.component(key, component);
	}
	return {
		app,
	};
}
