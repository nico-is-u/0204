<template>
	<view>
		<view class="header">
			<image src="/static//t-6.jpg"></image>
		</view>
		<view class="info">
			<view>
				<view>
					姓名
				</view>
				<view style="margin-top: 10px;">
					<text bold color="#e30540">{{user_info.realname}}</text>
				</view>
			</view>
			<view>
				<view>
					电话
				</view>
				<view style="margin-top: 10px;">
					<text>{{user_info.phone}}</text>
				</view>
			</view>
			<view>
				<view>
					身份证号码
				</view>
				<view style="margin-top: 10px;">
					<text>{{user_info.ic_number}}</text>
				</view>
			</view>
		</view>
		<view class="ser_list">
			<view class="item" @click="too('login_pwd')">
				<view style="display: flex;align-items: center;">
					<image src="/static/icon/s.png" style="width: 30px;margin-right: 20px;" mode="widthFix"></image>
					登陆密码
				</view>
			</view>
			<view class="item" @click="too('pay_pwd?v='+is_set_pay)">
				<view style="display: flex;align-items: center;">
					<image src="/static/icon/s1.png" style="width: 30px;margin-right: 20px;" mode="widthFix"></image>
					支付密码
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				is_set_pay: '',
				user_info: {
					realname: '',
					phone: '',
					ic_number: ''
				}
			};
		},
		onShow() {
			this.to.www(this.api.user_info)
				.then(res => {
					this.user_info = res.data;
					this.is_set_pay = this.user_info.is_set_pay_password
				})
		},
		methods: {
			logOut() {
				let _ = this;
				uni.showModal({
					title: "提示",
					content: "安全退出此账号 ? ",
					success: (res) => {
						if (res.confirm) {
							uni.clearStorage();
							/*  */
							_.too('/', 'tab')
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	text{
		font-weight: bold;
		color: #e30540;
	}
	.header{
		background-size: 100% 50%;
		background-repeat: no-repeat;
		height: 70px;
	}
	.info{
		display: flex;
		margin: -40px 20px 20px;
		background: #fff;
		border-radius: 10px;
		justify-content: space-between;
		text-align: center;
		align-items: center;
		padding: 30px 10px;
		box-shadow: 1px 1px 4px #d9d9d9;
		font-weight: bold;
	}
	.ser_list {
		background-color: #fff;
		border-radius: 10rpx;
		padding: 20rpx 40rpx;

		.item {
			display: flex;
			background-color: #fafafa;
			justify-content: space-between;
			align-items: center;
			padding: 30rpx;
			margin-bottom: 20rpx;
			border-radius: 10rpx;
			border-bottom: 3rpx solid #dce4e7;
			box-shadow: 1px 1px 4px #d9d9d9;
		}
	}
</style>