<template>
	<view class="mine_app flex flex_direction_column align_items_center">
		

		
		<view class="section flex flex_direction_column align_items_center">


			<!-- 顶栏 -->
			<image src="/static/qgwy-head.jpg" class="navbar-img" mode="widthFix"></image>


			<!-- 中上个人信息框 -->
			<view class="mine_information flex flex_direction_column align_items_center">
				<!-- 上半红色背景框 -->
				<view class="top_red flex flex-y-center">
					<!-- 左侧头像 -->
					<view class="avatar">
						<image src="/static/avatar.jpg" mode="widthFix" alt=""></image>
					</view>
					<!-- 中间姓名电话 -->
					<view class="center flex flex_direction_column">
						<view class="line flex flex-y-center" @click="too('user_account')">
							<view class="line_left">
								姓名：
							</view>
							<view class="line_right">
								{{user_info.realname || '未实名'}}
							</view>
						</view>
						<view class="line flex flex-y-center">
							<view class="line_left">
								电话号码：
							</view>
							<view class="line_right">
								{{user_info.phone}}
							</view>
						</view>
					</view>
					<!-- 右侧实名认证图标 -->
					<view class="right flex flex-center">
						<text v-if="!user_info || !user_info.realname">未实名</text>
						<text v-else>已实名</text>
					</view>
				</view>
	
				<view class="bottom_white flex">
					<view class="field">
						<view class="item flex flex-column">
							<view class="top">
								可提余额
							</view>
							<view class="bottom">
								{{user_info.shouyijin || '0.00'}}
							</view>
						</view>

						<view class="item">
							<view class="top">
								可用余额
							</view>
							<view class="bottom">
								{{user_info.topup_balance || '0.00'}}
							</view>
						</view>

						<view class="item">
							<view class="top">
								工资钱包
							</view>
							<view class="bottom">
								{{ user_info.gongzi_debt || '0.00' }}
							</view>
						</view>

					</view>
					<view class="field">
						<view class="item">
							<view class="top">
								两重建设基金
							</view>
							<view class="bottom">
								{{user_info.liangchongjianshe || '0.00'}}
							</view>
						</view>

						<view class="item">
							<view class="top">
								持有国债
							</view>
							<view class="bottom">
								{{user_info.holding_national_debt ? user_info.holding_national_debt : '0.00'}}
							</view>
						</view>

						<view class="item yjdqfh">
							<view class="top">
								预期回购金额
							</view>
							<view class="bottom flex flex-column flex-center" style="line-height: 1.5; padding-top: 4px;">
								{{ user_info.chiyouguozhaiyuji ? user_info.chiyouguozhaiyuji : '0.00' }}
							</view>
						</view>

					</view>
					<view class="field">
						<view class="item">
							<view class="top">
								功勋值
							</view>
							<view class="bottom">
								{{user_info.gongxun ? Math.floor(user_info.gongxun) : '0' }}
							</view>
						</view>

						<view class="item" @click="too('tzmx')">
							<view class="top">
								确权国债
							</view>
							<view class="bottom font_red">
								<text>{{user_info.confirmed_national_debt ? user_info.confirmed_national_debt : '0.00'}}</text>
							</view>
						</view>

						<view class="item yjdqfh">
							<view class="top">
								可回购金额
							</view>
							<view class="bottom flex flex-column flex-center" style="line-height: 1.5; padding-top: 4px;">
								<text>{{ user_info.jihuoguozhaiyuji ? user_info.jihuoguozhaiyuji : '0.00' }}</text>
							</view>
						</view>

					</view>
				</view>

			</view>


			<!-- 中间广告栏 -->
			<image src="/static/banner.png" class="mine_banner" mode="widthFix"></image>

			<!-- 下方菜单图标 -->
			<view class="mine_manu flex flex-between">
				<view class="column flex flex-column flex-y-center">
					<view class="item flex flex-column flex-y-center">
						<view class="icon">
							<image src="/static/mine-icon-1.jpg" mode="widthFix"></image>
						</view>
						<view class="text">
							转账
						</view>
					</view>
					<view class="item flex flex-column flex-y-center" @click="too('list_card')">
						<view class="icon">
							<image src="/static/mine-icon-5.jpg" mode="widthFix"></image>
						</view>
						<view class="text">
							银行卡
						</view>
					</view>
					<view class="item flex flex-column flex-y-center" @click="too('account_safety')">
						<view class="icon">
							<image src="/static/mine-icon-6.jpg" mode="widthFix"></image>
						</view>
						<view class="text">
							账户安全
						</view>
					</view>
				</view>
				<view class="column flex flex-column flex-y-center">
					<view class="item flex flex-column flex-y-center" @click="too('topup_balance')">
						<view class="icon">
							<image src="/static/mine-icon-2.jpg" mode="widthFix"></image>
						</view>
						<view class="text">
							充值
						</view>
					</view>
					<view class="item flex flex-column flex-y-center" @click="too('realname_authen')">
						<view class="icon">
							<image src="/static/mine-icon-6.jpg" mode="widthFix"></image>
						</view>
						<view class="text">
							实名认证
						</view>
					</view>
				</view>
				<view class="column flex flex-column flex-y-center">
					<view class="item flex flex-column flex-y-center" @click="too('withdraw')">
						<view class="icon">
							<image src="/static/mine-icon-3.jpg" mode="widthFix"></image>
						</view>
						<view class="text">
							提现
						</view>
					</view>
					<view class="item flex flex-column flex-y-center" @click="too('team')">
						<view class="icon">
							<image src="/static/mine-icon-7.jpg" mode="widthFix"></image>
						</view>
						<view class="text">
							我的团队
						</view>
					</view>
				</view>
				<view class="column flex flex-column flex-y-center">
					<view class="item flex flex-column flex-y-center" @click="too('balance_log')">
						<view class="icon">
							<image src="/static/mine-icon-4.jpg" mode="widthFix"></image>
						</view>
						<view class="text">
							资产明细
						</view>
					</view>
					<view class="item flex flex-column flex-y-center" @click="too('address')">
						<view class="icon">
							<image src="/static/mine-icon-8.jpg" mode="widthFix"></image>
						</view>
						<view class="text">
							收货地址
						</view>
					</view>
				</view>
			</view>


			<view class="mine_button" @click="logout">
				安全退出
			</view>

		</view>


		<view id="kefu" @click="kefu"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user_info: {}
			}
		},
		methods: {
			getUserInfo() {
				this.to.www(this.api.user_info)
					.then(res => {
						this.user_info = res.data;
					})
			},
			logout(){
				let _ = this;
				uni.showModal({
					title: "提示",
					content: "安全退出此账号 ? ",
					confirmColor: '#c03328',
					cancelText:'取消',
					confirmText:'确定',
					success: (res) => {
						if (res.confirm) {
							uni.clearStorage();
							_.too('/pages/login', 'lau')
						}
					}
				})
			}
		},
		onShow() {
			this.getUserInfo()
		},
	}
</script>

<style lang="scss">
	.mine_app{
		width: 100%;
		padding: 130rpx 0;

		.section{
			width: 100%;
			padding: 0 4%;
			// 中上个人信息框
			.mine_information{
				width: 100%;
				margin-top: 10%;
				box-shadow: 0 0 4px rgb(101, 101, 101);
				border-radius: 16px;
				overflow: hidden;
				// 上半红色背景框
				.top_red{
					width: 100%;
					position: relative;
					background-color: rgb(173, 28, 11);
					// 左侧头像
					.avatar{
						image{
							width: 180rpx;
							margin-left: 20rpx;
							border-radius: 100px;
						}
					}
					// 中间姓名电话
					.center{
						width: 85%;
						.line{
							padding: 10rpx 0 5rpx 20rpx;
							.line_left{
								color: #d6a5a2;
								font-size: 26rpx;
							}
							.line_right{
								color: #fafafa;
								font-size: 32rpx;
							}
						}
					}
					// 右侧已实名图标
					.right{
						width: 120rpx;
						height: 50rpx;
						font-size: 30rpx;
						background-color: #e8cf8f;
						border-top-left-radius: 8rpx;
						border-bottom-left-radius: 8rpx;
						color: #ad1c0b;
						position: absolute;
						right: 0;
					}
				}
				// 下半白色背景框
				.bottom_white{
					width: 100%;
					background-color: rgb(255, 255, 255);
					padding: 20rpx 0;
					.line{
						padding: 20rpx 0;
						.item{
							// width: 25%;
							padding: 0 2%;

							display: flex;
							justify-content: center;
							align-items: center;

							.top{
								font-size: 26rpx;
								text-align: center;
							}
							.bottom{
								padding-top: 16rpx;
								font-size: 26rpx;
							}
							.font_red{
								color: #bd4046;
							}
						}
					}

					.field{
						width: 33.33%;

						.item:nth-child(2),.item:nth-child(3){
							margin-top: 36rpx;
						}
					}

					.item{
						.top{
							font-size: 26rpx;
							text-align: center;
						}
						.bottom{
							padding-top: 16rpx;
							font-size: 26rpx;

							text-align: center;
						}
						.font_red{
							color: #bd4046;
						}
					}

				}
			}

			// 中间广告栏
			.mine_banner{
				margin-top: 40rpx;
				width: 100%;
			}

			// 下方菜单图标
			.mine_manu{
				width: 100%;
				padding: 0 24rpx;
				// 每列
				.column{
					padding-top: 40rpx;
					// 每组图标
					.item{
						padding: 30rpx 0;
						// 图标
						.icon{
							image{
								box-shadow: 0 0 2px 4px #efefef;
								border-radius: 100rpx;
								width: 100rpx;
							}
						}
						// 图标下方文字
						.text{
							padding-top: 10rpx;
							font-size: 28rpx;
							color: #828282;
						}
					}
				}

			}

			// 底部退出按钮
			.mine_button{
				padding: 24rpx 240rpx;
				margin-top: 50rpx;
				border-radius: 16rpx;
				background-color: #d13e36;
				color: #fff6dd;
				font-size: 32rpx;
			}





		}
		
	}



	.yjdqfh{
		color: $navbar-red;
		line-height: 1;

		// min-width: 240rpx;

		transform: translateY(2rpx);

		.top{
			font-size: 22rpx !important;
		}
		.bottom{
			font-size: 22rpx !important;
		}
	}

	// .cygzfe{
	// 	line-height: 1;
	// 	transform: translateY(-10rpx);
	// }

</style>
