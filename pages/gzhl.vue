<template>
	<view class="page-gzhl">
		<!-- 顶栏 -->
		<image src="/static/17.jpg" class="navbar-img" mode="widthFix"></image>

		<view class="section-list flex flex-column">

			<!-- <view class="section-red" v-for="(item,index) in dataList" :key="index" @click="too('/pages/gzhl_detail?id='+item.id)">
				<view class="section-red-content">
					<image :src="item.cover_img"></image>
					<view class="section-red-cover flex flex-between flex-y-center">
						<view class="section-red-title">{{ item.name }}</view>
						<view class="section-red-price" v-if="item.price">￥{{ item.price }}</view>
					</view>
				</view>
			</view> -->

			<view class="section-red" v-for="(item,index) in dataList" :key="index" @click="goDetail(item)">
				<view class="section-red-content gzhl">

					<view class="title flex flex-x-center flex-y-end">
						<text>{{ item.price ? item.price + '元' : '' }}</text>
						<text style="font-size: 60rpx; padding: 20rpx 10rpx 0;" class="text-yellow text-bold">即可</text>
						<text>认购</text>
					</view>

					<view class="table-2 table-2-white" style="margin-top: 24rpx;">
						<view class="thead">
							<view class="td" style="width: 33.33%">持有国债</view>
							<view class="td" style="width: 33.33%">确权国债</view>
							<view class="td text-yellow text-bold" style="width: 33.33%">年化收益</view>
						</view>
						<view class="tbody">
							<view class="td" style="width: 33.33%">{{ user_info.holding_national_debt || '0' }}</view>
							<view class="td" style="width: 33.33%">{{ item.government_bond_amount || '0' }}</view>
							<view class="td" style="width: 33.33%">{{ item.annual_yield ? item.annual_yield + '%' : '' }}</view>
						</view>
						
						<view class="thead">
							<view class="td text-yellow text-bold" style="width: 33.33%">持有时间</view>
							<view class="td text-yellow text-bold" style="width: 33.33%">可提取</view>
							<view class="td" style="width: 33.33%">加速提取时间</view>
						</view>

						<view class="tbody">
							<view class="td" style="width: 33.33%">{{ item.days ? item.days + '天' : ''}}</view>
							<view class="td" style="width: 33.33%">{{ item.shouyi || ''}}</view>
							<view class="td" style="width: 33.33%">{{ item.jiasudays || '--'}}</view>
						</view>
					</view>

					<view class="flex" style="margin-top: 32rpx; padding-left: 32rpx;">
						<text style="font-size: 30rpx; line-height: 2; color: white;">每一分的功勋值可加速每份国债提取时间1天，最高可加速180天</text>
					</view>

					<view class="flex" style="margin-top: 26rpx">
						<text style="font-size: 30rpx; line-height: 2; color: white;">每人可以同时确权多份，数量不限。</text>
					</view>

					<view class="title flex flex-x-center flex-y-end" style="margin-top: 20rpx">
						<text class="text-yellow">中央财政补助</text>
					</view>

					<view class="table-2 table-2-white" style="margin-top: 24rpx;">
						<view class="thead">
							<view class="td" style="width: 33.33%">确权(10)天</view>
							<view class="td" style="width: 33.33%">持有180天</view>
							<view class="td" style="width: 33.33%">持有360天</view>
						</view>
						<view class="tbody">
							<view class="td" style="width: 33.33%; text-align: left; padding-left: 12rpx;">
								赠送一个月收益{{ item.quequan10 || '--'}}元
							</view>
							<view class="td" style="width: 33.33%; text-align: left; padding-left: 12rpx;">
								<view><text>加速可提{{ item.chiyou180 || '--' }}元</text></view>
								<view><text>收益 {{ item.price || '--' }}元</text></view>
								<view><text>退加确权费300元</text></view>
								
							</view>
							<view class="td" style="width: 33.33%; text-align: left; padding-left: 12rpx;">
								<view><text>可提{{ item.chiyou360 || '--' }}元</text></view>
								<view><text>收益 {{ item.price || '--' }}元</text></view>
								<view><text>退加确权费300元</text></view>
							</view>
						</view>
						
					
					</view>

					<view style="margin: 72rpx 0 64rpx;">
						<button class="btn-yellow">认购</button>
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
				user_info: {},
				dataList:[]
			}
		},
		onShow() {
			this.getDataList()
		},
		onLoad(){
			this.getUserInfo()
		},
		methods: {
			getDataList() {
				uni.showLoading()
				this.to.www(this.api.project_group_list,{
					project_group_id:7
				},'p').then(response => {
					uni.hideLoading()
					this.dataList = response.data.data || []
				}).catch(e => {
					uni.hideLoading()
				})
			},

			getUserInfo() {
				this.user_info = uni.getStorageSync('user_info') || {}
				this.to.www(this.api.user_info)
					.then(res => {
						this.user_info = res.data
						uni.setStorageSync('user_info', this.user_info)
					})
			},

			goDetail(item){
				uni.setStorageSync('PROJECT2_CACHE',item)
				this.too('gzhl_detail')
			},


		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
	overflow-y: scroll;
	
	background-image: url('/static/gzhl-bg.jpg');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	
}

.page-gzhl{
	padding: 160rpx 32rpx;
}

.section-list{
	gap: 32rpx;
}

.section-red{
	min-height: 300rpx;
}

.section-red-content{
	position: relative;
	
	image{
		height: 100%;
	}
	
	.section-red-cover{
		position: absolute;
		
		width: 100%;
		height: 120rpx;
		padding: 0 28rpx;

		left: 0;
		bottom: 0;

		color: white;
		
		background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
		
		.section-red-title{
			font-size: 38rpx;
			color: rgba(255, 255, 255, .85);
		}
	}
}
</style>
