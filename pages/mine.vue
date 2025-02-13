<template>
	<view class="mine_app flex flex_direction_column align_items_center">
		<!-- 顶部横栏 -->
		<view class="mine_head">
			<image src="/static/qgwy-head.jpg" mode="widthFix" alt=""></image>
		</view>

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
					<view class="line flex">
						<view class="line_left">
							姓名：
						</view>
						<view class="line_right">
							冯宝宝
						</view>
					</view>
					<view class="line flex">
						<view class="line_left">
							电话号码：
						</view>
						<view class="line_right">
							12345678901
						</view>
					</view>
				</view>
				<!-- 右侧实名认证图标 -->
				<view class="right">
					已实名
				</view>
			</view>

			<!-- 下半白色背景框 -->
			<view class="bottom_white flex flex_direction_column">
				<view class="line flex">
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
						<view class="bottom">
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
	.mine_app{
		width: 100%;

		// 顶部横栏
		.mine_head{
			width: 100%;
			image{
				width: 100%;
			}
		}

		// 中上个人信息框
		.mine_information{
			margin-top: 10%;
			box-shadow: 0 0 2px 1px rgb(101, 101, 101);
			border-radius: 16px;
			// 上半红色背景框
			.top_red{
				border-top-left-radius: 16px;
				border-top-right-radius: 16px;
				background-color: rgb(173, 28, 11);
				// 左侧头像
				.avatar{
					image{
						width: 150rpx;
						margin-left: 20rpx;
						border-radius: 100px;
					}
				}
				// 中间姓名电话
				.center{
					width: 50%;
					padding: 0 20%;
				}
			}
			// 下半白色背景框
			.bottom_white{
				background-color: rgb(255, 255, 255);
				.line{
					.item{
						padding: 0 2%;
					}
				}
			}
		}
		
	}





</style>
