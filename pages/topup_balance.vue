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
					<input type="text" value="请输入充值金额">
				</view>

				<!-- 中间选择充值方式 -->
				<view class="top_left flex flex-y-center">
					充值方式
					<image src="/static/app2/exclamation.png" alt="" />
				</view>

				<view class="center flex flex_direction_column">

					<view class="line flex justify_content_space_between">
						<view class="left flex align_items_center">
							<image src="/static/app2/wechat.png" alt="" />
							微信
						</view>
						<view class="right flex align_items_center">
							<image src="/static/app2/selected.png" alt="" />
						</view>
					</view>

					<view class="center_border line flex justify_content_space_between">
						<view class="left flex  align_items_center">
							<image src="/static/app2/ali.png" alt="" />
							支付宝
						</view>
						<view class="right flex  align_items_center">
							<image src="/static/app2/unchecked.png" alt="" />
						</view>
					</view>

					<view class="line flex justify_content_space_between">
						<view class="left flex align_items_center">
							<image src="/static/app2/card.png" alt="" />
							银行卡
						</view>
						<view class="right flex align_items_center">
							<image src="/static/app2/unchecked.png" alt="" />
						</view>
					</view>
					
					<u-button
						size="large" 
						text="立即充值"
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

			}
		},
		methods: {

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

			padding: 10px 24rpx 60rpx;

			// 每行容器
			.line {
				padding: 20px 10px;
				margin-left: 10px;

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
		    margin-top: 120rpx;
		    background-color: #a62625;
		    color: rgb(231, 255, 255);
			border-radius: 24rpx;
		}

	}
</style>