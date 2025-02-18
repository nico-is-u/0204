<template>
	<view class="cont4e">
		<view style="font-weight: bold;font-size: 18px;margin-top: 20px;">姓名</view>
		<view style="border: 1px solid #e30540;border-radius: 5px;padding: 10px;margin-top: 10px;">
			<input v-model="parm.name" placeholder="请输入真实的姓名" />
		</view>
		<view style="font-weight: bold;font-size: 18px;margin-top: 20px;">银行名称</view>
		<view style="border: 1px solid #e30540;border-radius: 5px;padding: 10px;margin-top: 10px;">
			<input v-model="parm.bank_name" placeholder="请输入银行名称(例:建设银行)" />
		</view>
		<view style="font-weight: bold;font-size: 18px;margin-top: 20px;">开户行</view>
		<view style="border: 1px solid #e30540;border-radius: 5px;padding: 10px;margin-top: 10px;">
			<input v-model="parm.bank_address" placeholder="请输入开户行名称(例:建设银行xxx支行)" />
		</view>
		<view style="font-weight: bold;font-size: 18px;margin-top: 20px;">卡号</view>
		<view style="border: 1px solid #e30540;border-radius: 5px;padding: 10px;margin-top: 10px;">
			<input v-model="parm.bank_sn" placeholder="请输入银行卡号" />
		</view>
		<u-button color="#e30540" iconColor="#fff" class="btn" :loading="isDone" loadingText="正在处理" text="立即绑定" @click="doBand"></u-button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isDone: false,
				parm: {
					name: '',
					bank_sn: '',
					bank_name: '',
					bank_address: ''
				},
			};
		},
		methods: {
			doBand() {
				if (!this.parm.name) return this.toa('请输入真实的姓名');
				if (!this.parm.bank_name) return this.toa('请输入银行名称');
				if (!this.parm.bank_address) return this.toa('请输入开户行名称');
				if (!this.parm.bank_sn) return this.toa('请输入银行卡号');
				this.isDone = true;
				this.to.www(this.api.addBankCard, this.parm, 'p')
					.then(res => {
						this.toa('已添加银行卡')
						setTimeout(() => {
							this.too('/', 'bac')
						}, 1500)
					}).catch(err=>{
						this.toa(err.msg)
					})
			}
		}
	}
</script>

<style lang="scss">
	.btn{
		border-radius: 20rpx;
		margin-top: 40rpx;
	}

	.cont4e {
		padding: 0 40rpx;
	}
</style>