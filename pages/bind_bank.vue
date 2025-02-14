<template>
	<view class="page_type_1">
		<!-- 上方进度条 -->
		<view class="top_progress">

			<!-- 进度图片 -->
			<view class="progress_img">
				<image src="/static/19.jpg" mode="widthFix" />
			</view>

			<!-- 下方文字 -->
			<view class="bottom flex">
				<view class="left">信息录入</view>
				<view class="center">提现信息录入</view>
				<view class="right">认证完成</view>
			</view>


		</view>

		<!-- 中上文字提示 -->
		<view class="center_tips flex align_items_center flex_direction_column align_items_flex_start">
			<view class="top flex align_items_center">
				<img src="/static/app2/ali.png">
				请绑定持卡人本人支付宝
			</view>
			<view class="bottom">
				用于提现和支付
			</view>
		</view>

		<!-- 中间位置支付宝信息 -->
		<view class="padding-box-1">
			<view class="gray_box flex flex_direction_column align_items_center">
	
				<view class="line flex align_items_center">
					<view class="left flex justify_content_space_between">
						姓<view></view>名：
					</view>
					<view class="right">
						冯宝宝
					</view>
				</view>
	
				<view class="line center flex align_items_center">
					<view class="left flex justify_content_space_between">
						支<view></view>付<view></view>宝<view></view>账<view></view>号：
					</view>
					<view class="right">
						12345678901
					</view>
				</view>
	
				<view class="line flex align_items_center">
					<view class="left flex justify_content_space_between">
						密<view></view>码：
					</view>
					<view class="right">
						*************
					</view>
				</view>
	
			</view>

			<u-button 
				text="绑定支付宝"
				class="red_button_common"
				style="margin-top: 66rpx"
			>
			</u-button>
		</view>


	</view>
</template>

<script>
export default {
	data() {
		return {
			type: 'ali',
		}
	},
	methods: {

	}
}
</script>

<style lang="scss">
.page_type_1 {}
</style>
