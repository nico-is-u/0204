<template>
	<view class="cont4e">
		<view style="font-weight: bold;font-size: 18px;margin-top: 20px;">{{ reTxt[0]}}</view>
		<view style="border: 1px solid #e30540;border-radius: 5px;padding: 10px;margin-top: 10px;">
			<input v-model="parm.name" :placeholder="'请输入真实的'+reTxt[0]" />
		</view>

		<view style="font-weight: bold;font-size: 18px;margin-top: 20px;">{{ reTxt[1] }}</view>
		<view style="border: 1px solid #e30540;border-radius: 5px;padding: 10px;margin-top: 10px;">
			<input v-model="parm.account" :placeholder="'请输入'+reTxt[1]" />
		</view>

		<template v-if="type == 1">
			<view style="font-weight: bold;font-size: 18px;margin-top: 20px;">开户银行</view>
			<view style="border: 1px solid #e30540;border-radius: 5px;padding: 10px;margin-top: 10px;">
				<input v-model="parm.bank_name" placeholder="请输入开户行"/>
			</view>
			<view style="padding: 24rpx 0;">注：请必须绑定实名认证人的银行卡账户</view>
		</template>
		
		<u-button color="#e30540" iconColor="#fff" class="btn" :loading="isDone" loadingText="正在处理" text="立即绑定" @click="doBand"></u-button>
		
		<view id="kefu" @click="kefu"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isDone: false,
				type:1,
				parm: {
					pay_type: 0,
					name: '',
					account:'',
					bank_name:'',
				},
			};
		},
		computed:{
			reTxt(){
				if(this.type == 1){
					return ["姓名","银行卡卡号"]
				}
				else if(this.type == 2){
					return ["姓名","支付宝账号"]
				}
			}
		},
		methods: {
			doBand() {
				if (!this.parm.name) return this.toa('请输入真实的'+this.reTxt[0]);
				if (!this.parm.account) return this.toa('请输入'+this.reTxt[1]);

				if(this.type == 1){
					if (!this.parm.bank_name) return this.toa('请输入开户行名称');
				}

				uni.showLoading({mask: true})
				this.to.www(this.api.addBankCard, this.parm, 'p')
					.then(res => {
						this.toa('添加成功')
						setTimeout(() => {
							this.too('/', 'bac')
						}, 1500)
					}).catch(err=>{
						this.toa(err.msg)
					})
			}
		},
		onLoad(options){
			const {type = 1} = options
			this.type = type

			if(this.type == 1){
				this.parm.pay_type = 3
			}else if(this.type == 2){
				this.parm.pay_type = 2
				uni.setNavigationBarTitle({
					title: '添加支付宝'
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

	.cont4e {
		padding: 0 40rpx;
	}
</style>