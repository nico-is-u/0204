<template>
	<view style="padding: 0 20px;">
		<view style="font-weight: bold;font-size: 18px;margin-top: 20px;">真实姓名</view>
		<view style="border: 1px solid #e30540;border-radius: 5px;padding: 10px;margin-top: 10px;">
			<input v-model="realname" placeholder="请输入真实姓名" />
		</view>
		<view style="font-weight: bold;font-size: 18px;margin-top: 20px;">详细地址</view>
		<view style="border: 1px solid #e30540;border-radius: 5px;padding: 10px;margin-top: 10px;">
			<input v-model="address" placeholder="请输入详细地址" />
		</view>
		<u-button color="#e30540" iconColor="#fff" class="btn" text="提交" @click="submit"></u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: '',
				realname: '',
			};
		},
		onLoad() {
			this.to.www(this.api.user_delivery)
				.then(res => {
					this.address = res.data.address;
					this.realname = res.data.name;
				})
		},
		methods: {
			submit() {
				if (!this.realname) {
					return this.toa('请输入姓名')
				}
				if (!this.address) {
					return this.toa('请输入收证地址')
				}
				this.to.www(this.api.updateUserInfo, {
						address: this.address,
						realname: this.realname,
					},'p')
					.then(res => {
						this.toa('提交成功');
						setTimeout(() => {
							uni.navigateBack()
						}, 2000)
					}).catch(err=>{
						this.toa(err.msg)
					})
			
			}
		},
	}
</script>

<style lang="scss">
.btn{
	border-radius: 20rpx;
	margin-top: 40rpx;
}
</style>
