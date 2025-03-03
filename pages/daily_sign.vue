<template>
	<view class="page_daily_sign">
		<nNavbar :back="true" :isFixed="true"></nNavbar>
		<view class="section flex flex-column">
			<view class="section-head flex flex-between">
				<view class="left-side flex flex-column flex-center">
					<view class="row">签到中心</view>
					<view class="row row2 flex flex-y-center">
						<text class="text-bold">已签到</text>
						<text class="text-2">{{sgDay}} 天</text>
					</view>
				</view>

				<view class="right-side flex flex-y-end">
					<image src="/static/t-4.png" style="width: 40rpx;" mode="widthFix"></image>
					<text style="padding-left: 12rpx;">{{ dateStr }}</text>
				</view>
			</view>

			<view class="section-body">
				<youlanSignIn :sgList="sgList" :sgDay="sgDay" type="sign" @change="signDate" ref="sign"/>
			</view>

		</view>

		<view id="kefu" @click="kefu"></view>
	</view>
</template>

<script>
	import youlanSignIn from '@/components/youlan-SignIn/youlan-SignIn.vue'
	export default {
		components: {
			youlanSignIn
		},
		data() {
			return {
				sgDay: "0",
				sgList: [],

				dateStr:new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }),
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList(){
				this.to.www(this.api.usr_sg_log)
					.then(res => {
						this.sgList = res.data.list
						this.sgDay = res.data.total_continue_days
					})
			},

			signDate(e) {
				// if(this.user_info.isZhaiwujj == 0){
				// 	return this.toa('签到无效，请完成资金领取信息对接！');
				// }
				// this.to.www(this.api.user_sign, {}, 'p')
				// 	.then(res => {
				// 		this.toa('已签到，请及时完成资金激活');
				// 		this.getList();
				// 	})
					
				this.getList()
			}
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
	
	background: url('/static/t-2.jpg');
	background-size: 100% auto;
	background-repeat: no-repeat;
	
	background-color: #efefef;
}

.page_daily_sign{
	padding: 250rpx 32rpx 0;
}

.section{
	width: 100%;
	height: 1200rpx;
	background-image: url('/static/t-3.png');
	background-size: 100% 100%;

	padding: 36rpx 32rpx 0;
}

.section-head{
	width: 100%;
	height: 120rpx;
	flex-shrink: 0;
	color: #ad1c0b;

	.left-side{
		flex-shrink: 0;
	}

	.right-side{
		padding-bottom: 24rpx;
	}
}

.section-body{
	flex-grow: 1;
	padding: 0;
}

.row{
	text-shadow: 0 0 6rpx rgba(0, 0, 0, .2);
}
.row2{
	padding-left: 10rpx;
}

.text-2{
	color: #e54d2f;
	font-size: 44rpx;
	padding: 0 10rpx;
	font-weight: bold;
	font-family: 'Arial';
}
</style>
