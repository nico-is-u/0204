<template>
	<view class="page-topup-balance">
		<nNavbar title="在线充值" :back="true"></nNavbar>

		<view class="section">
			<view class="section-white menu-list">
				<view class="row flex flex-y-center flex-between">
					<view class="item flex flex-column flex-center">
						<text>功勋值</text>
						<text class="text2">4399</text>
					</view>
					<view class="item flex flex-column flex-center">
						<text>持有国债份额</text>
						<text class="text2">4399</text>
					</view>
					<view class="item flex flex-column flex-center">
						<text>激活国债份额</text>
						<text class="text2">4399</text>
					</view>
				</view>

				<view class="row flex flex-y-center flex-between">
					<view class="item flex flex-column flex-center">
						<text>两重建设基金</text>
						<text class="text2">4399</text>
					</view>
					<view class="item flex flex-column flex-center">
						<text>可用余额</text>
						<text class="text2">4399</text>
					</view>
					<view class="item flex flex-column flex-center">
						<text>可提余额</text>
						<text class="text2">4399</text>
					</view>
				</view>

			</view>

			<!-- 白色框 -->
			<view class="section-white white_box flex flex_direction_column">

				<!-- 上方充值金额 -->
				<view class="top_left flex flex-y-center">
					充值金额
					<image src="/static/app2/exclamation.png" alt="" />
				</view>

				<view class="top flex flex_direction_column align_items_center">
					<input type="number" v-model="amount" placeholder="请输入充值金额">
				</view>

				<!-- 中间选择充值方式 -->
				<view class="top_left flex flex-y-center">
					充值方式
					<image src="/static/app2/exclamation.png" alt="" />
				</view>

				<view class="center flex flex_direction_column">
					<view class="line flex justify_content_space_between" v-for="(item,index) in dataList" :key="index" @click="dataSelectedIndex = index">
						<view class="left flex align_items_center">
							<image :src="item.img" alt=""/>
							{{item.name || ''}}
						</view>
						<view class="right flex align_items_center">
							<image src="/static/app2/selected.png" v-if="index == dataSelectedIndex" alt="" />
							<image src="/static/app2/unchecked.png" v-else alt="" />
						</view>
					</view>
				</view>

				<!-- 中间选择充值方式 -->
				<view class="top_left flex flex-y-center">
					充值凭证
					<image src="/static/app2/exclamation.png" alt="" />
				</view>
				
				<view class="padding-box-1" style="margin-top: 32rpx;">
					<view class="upload-box flex flex-center" @click="upload('pay_voucher_img_url')">
						<text v-if="!pay_voucher_img_url" style="color: #ad1c0b">点击上传</text>
						<image v-else :src="pay_voucher_img_url" mode="widthFix" style="width: 100%;"></image>
					</view>
				</view>

				<view class="padding-box-1">
					<u-button
						size="large" 
						text="立即充值"
						:loading="isDone"
						:loadingText="regStatus"
						@click="submit"
						class="red_button"
					>
					</u-button>
				</view>


			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isDone:false,
				regStatus:'请等待',

				dataList:[],
				dataSelectedIndex:0,

				amount:'',		// 充值金额
				pay_voucher_img_url:'',	// 支付凭证图片
			}
		},
		computed:{
			dataSelectedItem(){
				let result = false
				if(this.dataList.length > 0){
					result = this.dataList[this.dataSelectedIndex] || false
				}
				return result
			},
		},
		onLoad(){
			this.getDataList()
		},
		methods: {
			getDataList(){

				this.to.www(this.api.topup_channel_list).then(response => {
					this.dataList = response.data || []
				})

			},
			upload(name){
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
			submit(){
				if(!this.dataSelectedItem){
					this.toa('请选择充值方式')
					return
				}

				if(!this.amount){
					this.toa('请输入充值金额')
					return
				}

				this.isDone = true
				this.regStatus = '请等待'

				this.to.www(this.api.topup,{
					amount:this.amount,
					pay_channel:this.dataSelectedItem.id,
					pay_voucher_img_url:this.pay_voucher_img_url,
				},'p').then(res => {
					this.regStatus = '完成'
					this.isDone = false
					
					setTimeout(() => {
						uni.navigateBack()
					}, 1500)

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
		background-image: url('/static/index-bg.jpg');
		background-size: 100% auto;
		background-repeat: no-repeat;

		background-color: #f2f2f2;
	}

	.page-topup-balance {
		padding: 0 24rpx 0;

	}

	.section {
		padding-top: 10rpx;
	}

	.menu-list {
		font-size: 28rpx;
		padding: 36rpx 12rpx;

		.row+.row {
			margin-top: 36rpx;
		}

		.item {
			width: 33.33%;
			height: 96rpx;

			position: relative;

			::after {
				width: 1px;
				height: 50%;

				content: '';

				position: absolute;
				top: 25%;
				right: 0;

				background-color: #f3f3f3;
			}

			&:last-child {
				::after {
					display: none;
				}
			}
		}

		.text2 {
			color: rgb(165, 16, 89);
		}
	}

	// 白色框
	.white_box {
		
		margin-top: 32rpx;
		
		// 左上角文字和感叹号
		.top_left {
			padding-top: 20px;
			padding-left: 3%;
			font-size: 38rpx;
			font-weight: bold;

			image {
				width: 24px;
				height: 24px;
				padding-left: 10px;
			}
		}

		// 上方充值金额
		.top {
			padding: 20px 24rpx 0;
			

			input {
				height: 50px;
				width: 94%;
				padding-left: 20px;
				margin: 10px 0;
				border: 1px solid rgb(126, 55, 61);
				border-radius: 10px;
				font-size: 28rpx;
				color: rgb(151, 151, 151);
			}
		}

		// 中间选择充值方式
		.center {

			padding: 10px 24rpx 10rpx;

			// 每行容器
			.line {
				padding: 20px 10px;
				margin-left: 10px;
				border-bottom: 2px solid rgb(244, 244, 244);

				&:last-child {
					border-bottom: none;
				}

				// 左侧充值方式图标和文字
				.left {
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
		
		// 红色按钮
		.red_button{
		    margin: 60rpx 0;
		    background-color: #a62625;
		    color: rgb(231, 255, 255);
			border-radius: 24rpx;
		}

	}

	.upload-box{
		width: 100%;
		min-height: 400rpx;
		border: 1px dashed rgb(126, 55, 61);

		padding: 32rpx;
	}

</style>