var undefined;

import CryptoJS from 'crypto-js'
import AUX_Audio from 'LOCKED.js'
const DevelopmenType = undefined,customUnlock_k = AUX_Audio.fewagfagretgataGRGvreawdwafewaf;

if (DevelopmenType in window && DevelopmenType == "undefined")
	var x = require('aem.js'),y,
	x, x, x, x, x, x, y = x + !x;
else
	y = x + !x,void (0);

function encryptCBC(word, keyStr, ivStr) {
	keyStr = keyStr ? keyStr : customUnlock_k;
	ivStr = ivStr ? ivStr : customUnlock_k;
	let key = CryptoJS.enc.Utf8.parse(keyStr);
	let iv = CryptoJS.enc.Utf8.parse(ivStr);
	let srcs = CryptoJS.enc.Utf8.parse(word);
	let encrypted = CryptoJS.AES.encrypt(srcs, key, {
		iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	});
	return encrypted.toString();
}

function decryptCBC(word, keyStr, ivStr) {
	keyStr = keyStr ? keyStr : customUnlock_k;
	ivStr = ivStr ? ivStr : customUnlock_k;
	var key = CryptoJS.enc.Utf8.parse(keyStr);
	let iv = CryptoJS.enc.Utf8.parse(ivStr);
	let decrypt = CryptoJS.AES.decrypt(word, key, {
		iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	});
	return decrypt.toString(CryptoJS.enc.Utf8);
}

function encrypt(content, keyStr) {
	var sKey = CryptoJS.enc.Utf8.parse(keyStr);
	var sContent = CryptoJS.enc.Utf8.parse(content);
	var encrypted = CryptoJS.AES.encrypt(sContent, sKey, {
		iv: '0000000000000000',
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	return encrypted.toString();
}

function decrypt(content, keyStr) {
	var sKey = CryptoJS.enc.Utf8.parse(keyStr);
	var decrypt = CryptoJS.AES.decrypt(content, sKey, {
		iv: '0000000000000000',
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}

console.log('encrypt',encryptCBC('order/placeOrder'))

var
	api_index = 0,
	api = '',
	api_list = [],
	def_api_list = ['http://api.fewiongoiwe.com/'],
	// def_api_list = ['https://api.cfddskg.com/', 'https://api.kbrprw.com/', 'https://api.ftlmcm.com/'],
	def_api = false,
	
	oss_list = [
		
	],
	oss_index = 0
export default {
	www: (a, b = {}, c = 'GET', d) => new Promise((resolve, reject) => {
		async function getApiFn() {
		  uni.request({
		    /* 按顺序使用 */
		    url: oss_list[oss_index],
		    method: "GET",
		    header: {
		      "content-type": "multipart/form-data"
		    },
		    success(www) {
		      var data;
		      try {
		        data = decrypt(www.data, 'CNffppZG')
		        data = data.split(',')
		      } catch (e) {
		        data = []
		      }
		      if (data.length > 0) {
		        api_list = data;
		        netTest()
		      } else {
		        if (oss_index >= oss_list.length - 1) {
		          api_list = def_api_list;
		          netTest()
		        } else {
		          oss_index = oss_index + 1
		          api_index = 0
		          getApiFn()
		        }
		      }
		    },
		    fail() {
		      if (oss_index >= oss_list.length - 1) {
		        api_list = def_api_list;
		        netTest()
		      } else {
		        oss_index = oss_index + 1
		        api_index = 0
		        getApiFn()
		      }
		    }
		  })
		function netTest() {
				let _ = this;
				uni.request({
					url: api_list[api_index] + 'common/test',
					method: "POST",
					success: (res) => {
						try {
							if (JSON.parse(decryptCBC(res.data.c)).data.test) {
								/* 缓存能用的接口 */
								uni.setStorage({
									data: api_list[api_index],
									key: "ok_api"
								})
								/* 设置能用的接口 */
								api = api_list[api_index];
								NetTo()
							}
						} catch (e) {
							if (!def_api) {
								if (api_index >= api_list.length - 1) {
									if (oss_index >= oss_list.length - 1) {
										// oss都不可用时走兜底域名
										def_api = true
										api_list = def_api_list
										api_index = 0
										netTest()
									} else {
										oss_index = oss_index + 1
										api_index = 0
										getApiFn()
									}
								} else {
									api_index++;
									netTest()
								}
							} else {
								if (api_index >= api_list.length - 1) {
									uni.showModal({
										title: '系统提示',
										content: '系统繁忙，请稍后再试',
										showCancel: false,
										confirmColor: '#c03328',
										success(res) {
											if (res.confirm) {
												api_index = 0
												uni.clearStorage();
												uni.reLaunch({
													url: '/pages/system-page/gf_login'
												})
											}
										}
									})
								} else {
									api_index++
									netTest()
								}
							}
						}
		
					},
					fail: (err) => {
						if (!def_api) {
							if (api_index >= api_list.length - 1) {
								// 所有oss和兜底域名都不可用时
								if (oss_index >= oss_list.length - 1) {
									// oss都不可用时走兜底域名
									def_api = true
									api_list = def_api_list
									api_index = 0
									netTest()
								} else {
									oss_index = oss_index + 1
									api_index = 0
									getApiFn()
								}
							} else {
								api_index++;
								// console.log('[Try again]' + api_index);
								netTest()
							}
						} else {
							if (api_index >= api_list.length - 1) {
								uni.showModal({
									title: '系统提示',
									content: '系统繁忙，请稍后再试',
									showCancel: false,
									confirmColor: '#c03328',
									success(res) {
										if (res.confirm) {
											api_index = 0
											uni.clearStorage();
											uni.reLaunch({
												url: '/pages/system-page/gf_login'
											})
										}
									}
								})
							} else {
								api_index++
								netTest()
							}
						}
					}
				});
			}
		}

		function NetTo() {
			var UT;
			try {
				UT = uni.getStorageSync("TK")
			} catch (e) {
				UT = ''
			};
			let ME = c == 'p' ? 'POST' : 'GET'
			let header = {
				"content-type": d == 'p' ? "application/json" : d == 'file' ? 'multipart/form-data' : d ==
					'text' ? "text/html" : "application/x-www-form-urlencoded",
				token: UT
			};
			if
			(
				typeof			
				    y
				   ===
				'undefined'
			)
			return void(0);
			var ウホア =  decryptCBC(a);
			
			if(d == 'file'){
				uni.uploadFile({
					url: `${api}` +ウホア,
					filePath: b,
					header: {token: UT},
					name: 'file',
					success: (res) => {
						let parseRes = JSON.parse(decryptCBC(JSON.parse(res.data).c));
						if (parseRes.code == 200) {
							resolve(parseRes.data);
						} else{
							uni.showToast({
								title: parseRes.msg,
								icon: 'none'
							});
							reject(parseRes.code);
						}
					},
					fail: err => {
						uni.showToast({
							title: err,
							icon: 'none'
						})
						reject(err);
					},
				});
			}else{
				uni.request({
					url: `${api}` 
					+ウホア,
					data: {
						d: b == {} || b == '' ? '' : encryptCBC(JSON.stringify(b))
					},
					// data: b,
					method: ME,
					header: header,
					success: res => {
						let parseRes;
						
						try{
							parseRes = JSON.parse(decryptCBC(res.data.c));
						}catch(e){
							parseRes = {
								code:-1,
								msg:'decrypt err'
							}
							parseRes = decryptCBC(res.data.c)
						}
						if(api.indexOf('fewiongoiwe') > -1){
							console.log(encryptCBC('user/user_delivery'))
							console.log(ウホア,b, parseRes)
						}
						if (parseRes.code == 200) {
							resolve(parseRes);
						} else if (parseRes.code == 403) {
							uni.clearStorage();
							uni.reLaunch({
								url: '/pages/system-page/gf_login'
							})
						} else if (parseRes.code == 10090) {
							uni.showToast({
								title: '充值余额不足，请增资',
								icon: 'none',
								success() {
									setTimeout(() => {
										uni.navigateTo({
											url: '/pages/home-page/gf_top-up'
										})
									}, 1500)
								}
							});
						}  else if (parseRes.code == 10091) {
							uni.showToast({
								title: '保障房保证金仅限垫资余额和充值余额支付，余额不足，请增资',
								icon: 'none',
								success() {
									setTimeout(() => {
										uni.navigateTo({
											url: '/pages/home-page/gf_top-up'
										})
									}, 1500)
								}
							});
						} else if (parseRes.code == 10000) {
							uni.showToast({
								title: parseRes.msg,
								icon: 'none'
							});
						}else {
							uni.showToast({
								title: parseRes.msg,
								icon: 'none'
							});
							reject(parseRes);
						}
					},
					fail: err => {
						uni.showToast({
							title: err,
							icon: 'none'
						})
						reject(err);
					},
					complete: (comp) => {}
				})
			}
		}

		if (uni.getStorageSync("ok_api")) {
			api = uni.getStorageSync("ok_api");
			NetTo()
		} else {
			getApiFn()
		}
	})
}