// @ts-nocheck
import App from './App'

// #ifndef VUE3
import Vue from 'vue'

import uView from '@/uni_modules/uview-ui'

import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

//  全局变量 
Vue.prototype.$url = 'http://192.168.1.125:9090'

import {request} from './static/request.js'
Vue.prototype.$request = request


//toast log
//useage: show a tip
Vue.prototype.$toast = title => {
	uni.showToast({
		title,
		icon: 'none'
	})
}
// #ifdef VUE3
import { createSSRApp } from 'vue'
import uView from 'uview-ui'
Vue.use(uView)

uni.$u.config.unit = 'rpx'

t
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif