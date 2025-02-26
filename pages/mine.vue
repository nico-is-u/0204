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
						<image src="/static/avatar.png" mode="widthFix" alt=""></image>
					</view>
					<!-- 中间姓名电话 -->
					<view class="center flex flex_direction_column">
						<view class="line flex flex-y-center">
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
	
				<!-- 下半白色背景框 -->
				<view class="bottom_white flex flex_direction_column">
					<view class="line flex flex-between">
						<view class="item flex flex_direction_column flex-y-center">
							<view class="top">
								可提余额
							</view>
							<view class="bottom">
								0.00
							</view>
						</view>
						<view class="item flex flex_direction_column flex-y-center">
							<view class="top">
								可用余额
							</view>
							<view class="bottom">
								0.00
							</view>
						</view>
						<view class="item flex flex_direction_column flex-y-center">
							<view class="top">
								持有国债份额
							</view>
							<view class="bottom">
								0.00
							</view>
						</view>
						<view class="item flex flex_direction_column flex-y-center">
							<view class="top">
								激活国债份额
							</view>
							<view class="bottom font_red">
								0.00
							</view>
						</view>
					</view>
					<view class="line flex">
						<view class="item flex flex_direction_column flex-y-center">
							<view class="top">
								两重建设基金
							</view>
							<view class="bottom">
								0.00
							</view>
						</view>
						<view class="item flex flex_direction_column flex-y-center">
							<view class="top">
								功勋值
							</view>
							<view class="bottom">
								0.00
							</view>
						</view>
					</view>
	
				</view>
			</view>


			<!-- 中间广告栏 -->
			<image src="/static/banner.png" class="mine_banner" mode="widthFix"></image>


			 <!-- <view class="mine_manu">
				<view class="line flex flex-between">
					<view class="item flex flex_direction_column flex-y-center">
						<view class="manu_icon">
							<image src="/static/mine-icon-1.jpg" mode="widthFix"></image>
						</view>
						<view class="manu_text">
							转账
						</view>
					</view>
					<view class="item flex flex_direction_column flex-y-center">
						<view class="manu_icon">
							<image src="/static/mine-icon-2.jpg" mode="widthFix"></image>
						</view>
						<view class="manu_text">
							充值
						</view>
					</view>
					<view class="item flex flex_direction_column flex-y-center">
						<view class="manu_icon">
							<image src="/static/mine-icon-3.jpg" mode="widthFix"></image>
						</view>
						<view class="manu_text">
							提现
						</view>
					</view>
					<view class="item flex flex_direction_column flex-y-center">
						<view class="manu_icon">
							<image src="/static/mine-icon-4.jpg" mode="widthFix"></image>
						</view>
						<view class="manu_text">
							投资明细
						</view>
					</view>
				</view>
				<view class="line flex flex-between">
					<view class="item flex flex_direction_column flex-y-center">
						<view class="manu_icon">
							<image src="/static/mine-icon-5.jpg" mode="widthFix"></image>
						</view>
						<view class="manu_text">
							银行卡
						</view>
					</view>
					<view class="item flex flex_direction_column flex-y-center">
						<view class="manu_icon">
							<image src="/static/mine-icon-6.jpg" mode="widthFix"></image>
						</view>
						<view class="manu_text">
							账号安全
						</view>
					</view>
					<view class="item flex flex_direction_column flex-y-center">
						<view class="manu_icon">
							<image src="/static/mine-icon-7.jpg" mode="widthFix"></image>
						</view>
						<view class="manu_text">
							我的团队
						</view>
					</view>
					<view class="item flex flex_direction_column flex-y-center">
						<view class="manu_icon">
							<image src="/static/mine-icon-8.jpg" mode="widthFix"></image>
						</view>
						<view class="manu_text">
							收货地址
						</view>
					</view>
				</view>
			 </view> -->

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
				<view class="column flex flex-column flex-y-center" @click="too('tzmx')">
					<view class="item flex flex-column flex-y-center">
						<view class="icon">
							<image src="/static/mine-icon-4.jpg" mode="widthFix"></image>
						</view>
						<view class="text">
							投资明细
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
							padding: 0 2%;
							.top{
								font-size: 26rpx;
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





</style>
