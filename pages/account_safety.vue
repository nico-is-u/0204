<template>
	<view class="page_account_safety">
		<!-- 上方进度条 -->
		<view class="top_progress">

			<!-- 进度图片 -->
			<view class="progress_img">
				<image src="/static/18.jpg" mode="widthFix" />
			</view>

			<!-- 下方文字 -->
			<view class="bottom flex">
				<view class="left">信息录入</view>
				<view class="center">提现信息录入</view>
				<view class="right">认证完成</view>
			</view>

		</view>

		<view class="page_type_1 padding-box-1">

			<!-- 中上方文字提示 -->
			<view class="center_tips flex align_items_center flex_direction_column align_items_flex_start">
				<view class="top">请上传身份证的正反面</view>
				<view class="bottom identity_bottom">正面为国徽面 反面为头像面</view>
			</view>

			<!-- 中间身份证头像面信息 -->
			<view class="gray_box flex">
				<view class="upload_idcard_tips flex flex_direction_column align_items_flex_start">
					<view class="top">头像面</view>
					<view class="identity_bottom">上传您身份证头像面</view>
				</view>
				<image src="/static/app2/a.png" mode="widthFix"/>
			</view>

			<view class="gray_box flex">
				<view class="upload_idcard_tips flex flex_direction_column align_items_flex_start">
					<view class="top">国徽面</view>
					<view class="identity_bottom">上传您身份证国徽面</view>
				</view>
				<image src="/static/app2/b.png" mode="widthFix"/>
			</view>

			<u-button 
				text="提交申请"
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

		}
	},
	methods: {

	}
}
</script>

<style lang="scss">
.page_account_safety {}
</style>
