import Vue from 'vue'
import App from './App'

import './uni.promisify.adaptor'

/* uView部分 */
import uView from 'uview-ui'
Vue.use(uView)
uni.$u.config.unit = 'rpx'

/* 待整理 */
Vue.prototype.too = function(url, type = 'sub') {
	"sub" == type && uni.navigateTo({
		url: url
	}),
	'reb' == type && uni.redirectTo({
		url: url
	}),
	'bac' == type && uni.navigateBack({
		delta: 1
	}),
	'lau' == type && uni.reLaunch({
		url: url
	}),
	"tab" == type && uni.switchTab({
		url: url
	})
}

Vue.prototype.loa = function(str) {
	uni.showLoading({
		title: str
	})
}
Vue.prototype.toa = function(str, i) {
	uni.showToast({
		title: str,
		icon: i == 's' ? 'success' : i == 'e' ? 'error' : 'none'
	})
}

/* 开始实例化 */
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})


app.$mount()