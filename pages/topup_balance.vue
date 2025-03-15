<template>
	<view class="page-topup-balance">
		<nNavbar title="在线充值" :back="true" backgroundColor="#ad1c0b" :isFixed="true">
			<text style="color: white;" @click="too('topup_log')">充值记录</text>
		</nNavbar>

		<section>
		
			<view class="balance-box">
				<view class="top">
					<text>可用余额</text>
				</view>

				<view class="bottom">
					<text class="qian">￥</text>
					<text class="account1">{{ account1 }}</text>
					<text class="account2">{{ account2 }}</text>
				</view>
			</view>

			<view class="input-box">
				<view class="flex flex-x-center">
					<view class="input-control">
						<text class="qian">￥</text>
						<input type="text" v-model="amount">
					</view>
				</view>

				<view class="account-list">
					<view class="item" @click="amount = 100">100</view>
					<view class="item" @click="amount = 200">200</view>
					<view class="item" @click="amount = 500">500</view>
					<view class="item" @click="amount = 1000">1000</view>
					<view class="item" @click="amount = 2000">2000</view>
					<view class="item" @click="amount = 5000">5000</view>
				</view>

			</view>

			<view class="center flex flex_direction_column">
				<view class="line flex justify_content_space_between" v-for="(item, index) in dataList" :key="index"
					@click="dataSelectedIndex = index">
					<view class="left flex align_items_center">
						<image :src="item.img" alt="" />
						{{ item.name || '' }}
					</view>
					<view class="right flex align_items_center">
						<image src="/static/app2/selected.png" v-if="index == dataSelectedIndex" alt="" />
						<image src="/static/app2/unchecked.png" v-else alt="" />
					</view>
				</view>
			</view>

			<view class="padding-box-1" style="margin-top: 32rpx; border-bottom: 200rpx solid #ad1c0a;">
				<u-button
					size="large" 
					text="立即充值"
					:loading="isDone"
					:loadingText="regStatus"
					@click="submit"
					color="#e8cf8f"
					style="color: black;"
				>
				</u-button>
			</view>

		</section>

		<nTabbar></nTabbar>
		<view id="kefu" @click="kefu"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			user_info: {},

			isDone: false,
			regStatus: '请等待',

			dataList: [],
			dataSelectedIndex: 0,

			amount: '',		// 充值金额
			pay_voucher_img_url: '',	// 支付凭证图片
		}
	},
	computed: {
		dataSelectedItem() {
			let result = false
			if (this.dataList.length > 0) {
				result = this.dataList[this.dataSelectedIndex] || false
			}
			return result
		},
		account1() {
			let result = 0
			if (this.user_info && this.user_info.topup_balance) {
				result = Math.floor(this.user_info.topup_balance)
			}
			return result
		},
		account2() {
			let result = '.00'
			return result
		},
	},
	onLoad() {
		this.getUserInfo()
		this.getDataList()
	},
	methods: {
		getUserInfo() {
			this.to.www(this.api.user_info)
				.then(res => {
					this.user_info = res.data;
				})
		},

		getDataList() {

			this.to.www(this.api.topup_channel_list).then(response => {
				this.dataList = response.data || []
			})

		},
		upload(name) {
			let that = this;
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				sourceType: ['album'],
				success: function (res) {
					uni.showLoading();
					that.to.www(that.api.upload, res.tempFilePaths[0], "p", "file")
						.then(res => {
							that.$set(that, name, res.url)
							uni.hideLoading();
						})
						.catch((err) => {
							uni.hideLoading();
						})
				}
			});
		},
		submit() {
			if (!this.dataSelectedItem) {
				this.toa('请选择充值方式')
				return
			}

			if (!this.amount) {
				this.toa('请输入充值金额')
				return
			}

			this.isDone = true
			this.regStatus = '请等待'

			this.to.www(this.api.topup, {
				amount: this.amount,
				pay_channel: 1,
				payment_config_id: this.dataSelectedItem.id,
				pay_voucher_img_url: this.pay_voucher_img_url,
			}, 'p').then(res => {
				this.regStatus = '完成'
				this.isDone = false

				window.open(res.data.data)
				
			}).catch(err => {
				this.isDone = false
			})

		},
	}
}
</script>

<style lang="scss">
page {
	height: 100%;
	// background-image: url('/static/index-bg.jpg');
	background-size: 100% auto;
	background-repeat: no-repeat;

	// background-color: $navbar-red;
}

.page-topup-balance {
	height: 100%;
	padding: 0;

	overflow: hidden;
	overflow-y: scroll;

	background-color: #ad1c0b;

}

section {
	height: 100%;
	margin-top: 2px;
	background-color: $navbar-red;

	padding: 180rpx 32rpx 64rpx;
	border-top: 1px solid white;
}

.balance-box {
	display: flex;
	flex-direction: column;
	align-items: center;

	color: $navbar-red;
	background-color: #e8cf8f;

	height: 380rpx;
	border-radius: 50rpx;
	padding: 52rpx 0;

	.top {
		font-size: 38rpx;
	}

	.bottom {
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		font-weight: bold;

		margin-top: 30rpx;
	}

	.qian {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 90rpx;

		padding-right: 6rpx;
	}

	.account1 {
		font-size: 100rpx;
		letter-spacing: 2px;
	}

	.account2 {
		font-size: 70rpx;
		letter-spacing: 2px;
	}

}

.input-box {
	margin-top: 64rpx;
	color: #e8cf8f;

	.input-control {
		width: 300rpx;
		padding-bottom: 50rpx;

		display: flex;
		align-items: center;

		position: relative;

		.qian {
			font-size: 50rpx;
			flex-shrink: 0;
			padding-right: 12rpx;
			padding-bottom: 4rpx;
		}

		input {
			flex-grow: 1;
			font-size: 40rpx;

			border-bottom: 1px solid #e8cf8f;
		}

		&::after {
			content: '请输入充值金额';

			position: absolute;
			left: 0;
			bottom: 0;

			width: 100%;
			text-align: center;
			text-indent: 32rpx;
		}

	}

	.account-list {
		display: flex;
		gap: 32rpx;
		flex-wrap: wrap;

		margin-top: 64rpx;

		.item {
			width: 30%;
			flex-shrink: 0;
			flex-basis: 1;

			height: 100rpx;
			background-color: #931103;

			font-size: 60rpx;

			display: flex;
			align-items: center;
			justify-content: center;

			border-radius: 12rpx;
			border: 1px solid #e8cf8f;
		}
	}
}

// 中间选择充值方式
.center {

	margin-top: 64rpx;
	padding: 10px 24rpx 10rpx;

	// 每行容器
	.line {
		padding: 20px 10px;
		margin-left: 10px;

		background-color: #931103;
		border-radius: 12rpx;
		border: 1px solid #e8cf8f;

		margin: 12rpx 0;

		// border-bottom: 2px solid rgb(244, 244, 244);

		&:last-child {
			border-bottom: none;
		}

		// 左侧充值方式图标和文字
		.left {
			color: #e8cf8f;
			font-size: 36rpx;

			// 图标
			image {
				width: 30px;
				height: 30px;
				padding-right: 20rpx;
			}
		}

		.right {

			// 选中/未选中图标
			image {
				width: 20px;
				height: 20px;
				padding-right: 10px;
			}
		}
	}

	// 虚线
	.center_border {
		border-top: 2px solid rgb(244, 244, 244);
		border-bottom: 2px solid rgb(244, 244, 244);
	}

}


.upload-box {
	width: 100%;
	min-height: 400rpx;
	border: 1px dashed rgb(126, 55, 61);

	padding: 32rpx;
}
</style>