<template>
	<view class="page-gxjy">
		<!-- 顶栏 -->
		<image src="/static/12.jpg" class="navbar-img" mode="widthFix"></image>

		<!-- 顶部 -->
		<view class="section-red section-red-1">
			<view class="section-red-content textarea" style="padding-bottom: 24rpx;">
				<view style="padding-bottom: 8rpx;">
					<text class="text-bold">功勋值说明：</text>
				</view>
				<view>
					<text>功勋值通过投资和发展团队两种途径获取。可以进行缩短分红周期或者换取相应奖励</text>
				</view>
				<view>
					<text>每邀约注册激活</text>
					<text class="text-bold text-xl">1人</text>
					<text>获得功勋值</text>
					<text class="text-bold text-xl">10分</text>
				</view>
				<view>
					<text>在国之两重板块投资</text>
					<text class="text-bold text-xl">100元</text>
					<text>可获取</text>
					<text class="text-bold text-xl">10分</text>
				</view>
				<view>
					<text>每日会议签到：奖励功勋值</text>
					<text class="text-bold text-xl">1分</text>
				</view>
				<view>
					<text>完成参加学习会议累计</text>
					<text class="text-bold text-xl">一周</text>
					<text>奖励功勋值</text>
					<text class="text-bold text-xl">10分</text>
				</view>
			</view>
		</view>
		<!-- <view class="section-red section-red-1">
			<view class="section-red-content list flex flex-column">
				<view class="row flex">
					<view class="left-side" style="letter-spacing: 4px;">姓名：</view>
					<view class="right-side">{{user_info.realname || '未实名'}}</view>
				</view>
				<view class="row flex">
					<view class="left-side">功勋值：</view>
					<view class="right-side">{{ user_info.gongxun }}</view>
				</view>
				<view class="row flex" style="min-height: 60rpx;">
					<view class="left-side">功勋称号：</view>
					<view class="right-side"></view>
				</view>
			</view>
		</view> -->

		<!-- 中间 -->
		<image src="/static/t-12.png" class="fixed-title" mode="widthFix" style="margin: 60rpx 0 0;"></image>
		<view class="section-red section-red-2">
			<view class="section-red-content">
				<view class="row3" v-for="(item,index) in dataList" :key="'gxjy-item-' + index">
					<view class="left-side flex flex-x-center flex-column">
						<text class="text1">{{item.jifen || '0'}}积分</text>
						<text class="text2">{{ item.dec || '' }}</text>
					</view>
					<view class="right-side">
						<button @click="duihuan(item)">兑换</button>
					</view>
				</view>
			</view>
		</view>

		
		<u-picker
			@close="pickerClose"
			@cancel="pickerClose"
			@confirm="pickerConfirm"
			title="请选择产品"
			:show="dataList2Key"
			:columns="dataList2Text"
			:itemHeight="88"
			:closeOnClickOverlay="true">
		</u-picker>

		<view id="kefu" @click="kefu"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user_info:{},
				dataList:[],
				dataList2:[],						// 板块1产品

				dataItem:{},						// 缓存要兑换的产品对象

				dataList2Key:false,					// 是否picker（板块1）
			}
		},
		computed:{
			dataList2Text(){
				let result = []
				if(this.dataList2.length){
					result = [this.dataList2.flat().map(item => item.name)]
				}
				return result
			},
		},
		onLoad() {
			this.getDataList()
			this.getDataList2()
			this.getUserInfo()
		},
		methods: {
			getUserInfo() {
				this.to.www(this.api.user_info)
					.then(res => {
						this.user_info = res.data;
					})
			},
			getDataList() {
				uni.showLoading()
				this.to.www(this.api.gxjy).then(response => {
					this.dataList = response.data || []
				})
				.finally(() => {
					uni.hideLoading()
				})
			},

			getDataList2(){
				this.to.www(this.api.gxjy_list2).then(response => {
					this.dataList2 = response.data || []
				})
			},

			// 兑换请求
			duihuan(item){
				this.dataItem = item
				if(item.type == 1){
					this.dataList2Key = true
				}else{
					this.duihuan2()
				}
			},

			duihuan2(){
				uni.showLoading({mask:true})
				this.to.www(this.api.gxjy_dh,{
					...this.dataItem
				},'p')
				.then(response => {
					this.toa('兑换成功','s')
				})
				.finally(() => {
					uni.hideLoading()
				})

			},

			/* picker相关 */
			pickerClose(){
				this.dataList2Key = false
				this.dataItem = {}
			},
			pickerConfirm(data){
				const targetIndex = data['indexs'][0]
				const targetItem = this.dataList2[targetIndex] || {}

				this.dataItem['pro_id'] = targetItem['id'] || 0
				this.duihuan2()
				this.pickerClose()
			},
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
	
	background-image: url('/static/24.jpg');
	background-size: 100% 100%;
	background-repeat: no-repeat;

	overflow: hidden;
	overflow-y: scroll;
}

.fixed-title{
	// position: absolute;
	// top: 0;
	// left: 0;
	width: 100%;
}

.page-gxjy{

	display: flex;
	flex-direction: column;
	align-items: center;

	padding-top: 12vh;
	padding-bottom: 6vh;

	.section-red-1{
		width: calc(100% - 48rpx);
	}

	.section-red-2{
		width: calc(100% - 48rpx);
		height: 50vh;

		overflow-x: hidden;
		overflow-y: scroll;
	}

}

</style>
