<template>
	<view class="page_account_safety">
		<view class="header">
			<image src="/static/t-6.jpg" mode="widthFix"></image>
		</view>

		<view class="padding-box-1">
			<view class="ser_list">
				<view class="item right-arrow" @click="too('login_pwd')">
					<image src="/static/t-6.png" mode="widthFix"></image>
					<view class="item_center">
						<text>修改密码</text>
					</view>
				</view>
				<view class="item right-arrow" @click="too('pay_pwd?v='+is_set_pay)">
					<image src="/static/t-5.png" mode="widthFix"></image>
					<view class="item_center">
						<text>设置提现密码</text>
					</view>
				</view>
			</view>
		</view>
		<view id="kefu" @click="kefu"></view>
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
	page{
		background-color: #fff6f1;
	}

	.header{
		image{
			width: 100%;
		}
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
	
</style>