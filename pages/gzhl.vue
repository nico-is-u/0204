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
						<text class="text-bold text-xxxl" style="transform: translateY(2rpx);">{{ item.price ? item.price + '元' : '' }}</text>
						<text>即可认购</text>
					</view>

					<view class="table-2" style="margin-top: 24rpx;">
						<view class="thead">
							<view class="td" style="width: 33.33%">激活金额</view>
							<view class="td" style="width: 33.33%">国债金额</view>
							<view class="td" style="width: 33.33%">年化收益</view>
						</view>
						<view class="tbody">
							<view class="td" style="width: 33.33%">{{ item.price || '' }}</view>
							<view class="td" style="width: 33.33%">{{ item.government_bond_amount || '0' }}</view>
							<view class="td" style="width: 33.33%">{{ item.annual_yield || '0.00' }}</view>
						</view>
						
						<view class="thead" style="width: 66.66%;">
							<view class="td" style="width: 50%">持有时间</view>
							<view class="td" style="width: 50%">可提取</view>
						</view>

						<view class="tbody" style="width: 66.66%;">
							<view class="td" style="width: 50%">{{ item.days ? item.days + '天' : ''}}</view>
							<view class="td" style="width: 50%">{{ item.shouyi || ''}}</view>
						</view>
					</view>

					<view class="flex" style="margin-top: 16rpx">
						<u-icon name="volume" size="34" color="#e8cf8f"></u-icon>
						<text style="font-size: 28rpx;">认购资格两重见习推广员及或两重助理推广员</text>
					</view>

					<view class="title flex flex-x-center flex-y-end" style="margin-top: 60rpx">
						<text>中央财政补助</text>
					</view>

					<view class="table-2" style="margin-top: 24rpx;">
						<view class="thead">
							<view class="td" style="width: 33.33%">持有{{ item.holding_days_1 || '0' }}天</view>
							<view class="td" style="width: 33.33%">持有{{ item.holding_days_2 || '0' }}天</view>
							<view class="td" style="width: 33.33%">持有{{ item.holding_days_3 || '0' }}天</view>
						</view>
						<view class="tbody">
							<view class="td" style="width: 33.33%">{{ item.earned_amount_1 || '0' }}</view>
							<view class="td" style="width: 33.33%">{{ item.earned_amount_2 || '0' }}</view>
							<view class="td" style="width: 33.33%">{{ item.earned_amount_3 || '0' }}</view>
						</view>
						
						<view class="thead" style="width: 66.66%;">
							<view class="td" style="width: 50%">持有{{ item.holding_days_4 || '0' }}天</view>
							<view class="td" style="width: 50%">持有{{ item.holding_days_5 || '0' }}天</view>
						</view>

						<view class="tbody" style="width: 66.66%;">
							<view class="td" style="width: 50%">{{ item.earned_amount_4 || '0' }}</view>
							<view class="td" style="width: 50%">{{ item.earned_amount_5 || '0' }}</view>
						</view>
					</view>

					<view style="margin: 72rpx 0 64rpx;">
						<button class="btn-yellow">认购</button>
					</view>

				</view>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:[]
			}
		},
		onShow() {
			this.getDataList()	
		},
		methods: {
			getDataList() {
				uni.showLoading()
				this.to.www(this.api.project_group_list,{
					project_group_id:8
				},'p').then(response => {
					uni.hideLoading()
					this.dataList = response.data.data || []
				}).catch(e => {
					uni.hideLoading()
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
