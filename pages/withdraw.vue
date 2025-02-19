<template>
	<view class="page-topup-balance">
		<nNavbar title="提现" :back="true"></nNavbar>

		<view class="section">
			
			<!-- 小菜单 -->
			<view class="menu-box flex flex-between flex-y-center">
				<view class="item flex flex-column flex-y-center" @click='too("daily_sign")'>
					<image src="/static/6.png" mode="widthFix"></image>
					<text>每日签到</text>
				</view>
				
				<view class="item flex flex-column flex-y-center" @click="too('invite_friend')">
					<image src="/static/7.png" mode="widthFix"></image>
					<text>分享好友</text>
				</view>
				
				<view class="item flex flex-column flex-y-center" @click="toa('抽奖福利')">
					<image src="/static/8.png" mode="widthFix"></image>
					<text>抽奖福利</text>
				</view>
								
				<view class="item flex flex-column flex-y-center" @click="zxkf">
					<image src="/static/10.png" mode="widthFix"></image>
					<text>在线客服</text>
				</view>
				
			</view>
			
			
			<!-- 白色框 -->
			<view class="section-white white_box flex flex_direction_column">

				<!-- 上方提现金额 -->
				<view class="top_left flex flex-y-center">
					提现金额
					<image src="/static/app2/exclamation.png" alt="" />
				</view>

				<view class="top flex flex_direction_column align_items_center">
					<input type="number" v-model="amount" placeholder="请输入提现金额">
				</view>

				<!-- 中间选择提现方式 -->
				<view class="top_left flex flex-y-center">
					提现方式
					<image src="/static/app2/exclamation.png" alt="" />
				</view>

				<view class="center flex flex_direction_column">

					<view class="line flex justify_content_space_between" v-for="(item,index) in dataList" :key="index" @click="dataSelectedIndex = index">
						<view class="left flex align_items_center">
							<image src="/static/t-7.png" alt="" />
							<text>{{ item.bank_sn }}</text>
						</view>
						<view class="right flex align_items_center">
							<image src="/static/app2/selected.png" v-if="index == dataSelectedIndex" alt="" />
							<image src="/static/app2/unchecked.png" v-else alt="" />
						</view>
					</view>

				</view>


				<!-- 支付密码 -->
				<view class="top_left flex flex-y-center">
					支付密码
					<image src="/static/app2/exclamation.png" alt="" />
				</view>

				<view class="top flex flex_direction_column align_items_center">
					<input type="password" v-model="pay_password" placeholder="请输入支付密码">
				</view>

				<view class="center flex flex_direction_column">

					<u-button
						size="large" 
						text="立即提现"
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
				setting_config: {},

				isDone:false,
				regStatus:'请等待',

				amount:'',
				pay_password:'',


				dataList:[],
				dataSelectedIndex:0,
			}
		},
		onLoad(){
			this.getBankList()
			this.getSystem_config()
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
		methods: {
			getBankList() {
				uni.showLoading({mask: true})
				this.to.www(this.api.getBankCardList)
				.then(res => {
					this.dataList = res.data || []

					if(this.dataList.length == 0){
						this.toa('请先添加银行卡')
						setTimeout(() => {
							this.too('list_card')
						},1500)
					}

					uni.hideLoading()
				})
			},
			getSystem_config() {
				this.to.www(this.api.system_info)
					.then(res => {
						this.setting_config = res.data.setting_conf;
					})
			},
			zxkf(){
				window.open(this.setting_config.kefu_url);
			},
			submit(){
				if(!this.dataSelectedItem){
					this.toa('请选择提现方式')
					return
				}

				if(!this.amount){
					this.toa('请输入提现金额')
					return
				}

				this.isDone = true
				this.regStatus = '请等待'

				this.to.www(this.api.withdraw,{
					amount:this.amount,
					log_type:1,
					bank_id:this.dataSelectedItem.id,
					pay_password:this.pay_password,

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

		// 上方提现金额
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

		// 中间选择提现方式
		.center {

			padding: 10px 24rpx 60rpx;

			// 每行容器
			.line {
				padding: 20px 10px;
				margin-left: 10px;

				// 左侧提现方式图标和文字
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
		    margin-top: 120rpx;
		    background-color: #a62625;
		    color: rgb(231, 255, 255);
			border-radius: 24rpx;
		}

	}
	
	.menu-box{
		background-image: url('/static/11.png');
	}
</style>