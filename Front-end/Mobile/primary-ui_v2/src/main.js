import {
	createSSRApp
} from "vue";

import App from "./App.vue";
import ElementPlus from 'element-plus';


export function createApp() {
	const app = createSSRApp(App);
	return {
		app,
	};
}
