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
			<view class="center_tips flex align_items_center flex_direction_column align_items_flex_start">
				<view class="top">姓名</view>
				<input type="text" v-model="realname" placeholder="请输入姓名" />
			</view>
			<!-- 中上方文字提示 -->
			<view class="center_tips flex align_items_center flex_direction_column align_items_flex_start">
				<view class="top">请上传身份证的正反面</view>
				<view class="bottom identity_bottom">正面为国徽面 反面为头像面</view>
			</view>

			<!-- 中间身份证头像面信息 -->
			<view class="gray_box flex"  @click="upload('card_front')">
				<view class="upload_idcard_tips flex flex_direction_column align_items_flex_start">
					<view class="top">头像面</view>
					<view class="identity_bottom">上传您身份证头像面</view>
				</view>
				<image :src="card_front == '' ?  '/static/app2/a.png' : card_front"  mode="widthFix"/>
			</view>

			<view class="gray_box flex" @click="upload('card_back')">
				<view class="upload_idcard_tips flex flex_direction_column align_items_flex_start">
					<view class="top">国徽面</view>
					<view class="identity_bottom">上传您身份证国徽面</view>
				</view>
				<image :src="card_back == '' ?  '/static/app2/b.png' : card_back" mode="widthFix"/>
			</view>

			<view class="gray_box flex" @click="upload('card_hand')">
				<view class="upload_idcard_tips flex flex_direction_column align_items_flex_start">
					<view class="top">手持身份证拍照</view>
					<view class="identity_bottom">上传您身手持身份证照片</view>
				</view>
				<image :src="card_hand == '' ?  '/static/app2/c.png' : card_hand" mode="widthFix"/>
			</view>

			<u-button 
				text="提交申请"
				:loading="isDone"
				:loadingText="regStatus"
				class="red_button_common"
				style="margin-top: 66rpx"
				@click="doRealName"
			>
			</u-button>


		</view>


	</view>
</template>

<script>
export default {
	data() {
		return {
			card_front: "",
			card_back: "",
			realname: '',
			card_hand: '',

			isDone: false,
			regStatus: '提交中'
		}
	},
	onLoad() {
		this.to.www(this.api.user_info)
			.then(res => {
				this.realname = res.data.realname;
			})
	},
	methods: {
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
		doRealName() {

			if (!this.realname) return this.toa('请输入姓名');
			if (!this.card_front) return this.toa('请上传身份证正面');
			if (!this.card_back) return this.toa('请上传身份证反面');
			if (!this.card_hand) return this.toa('请上传手持身份证照片');
			
			this.isDone = true;
			this.to.www(this.api.authentication, {
					realname: this.realname,
					card_back: this.card_back,
					card_front: this.card_front,
					card_hand: this.card_hand
				}, "p")
				.then(res => {
					this.regStatus = '完成';
					this.isDone = false;
					setTimeout(() => {
						uni.navigateBack()
					}, 1500)
				}).catch(err =>{
					this.isDone = false;
					// setTimeout(() => {
					// 	uni.navigateBack()
					// }, 1500)
				})
		}
	}
}
</script>

<style lang="scss">
.page_account_safety {
	padding-bottom: 10vh;
}
</style>
