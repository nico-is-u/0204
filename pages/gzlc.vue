<template>
	<view class="page-gzlc">
		<!-- 顶栏 -->
		<image src="/static/13.jpg" class="navbar-img" mode="widthFix"></image>

		<!-- 文章列表 -->
		<view class="article-list flex flex-column">
			<u-notice-bar :text="text1" :fontSize="30" class="notice"></u-notice-bar>
			<view class="article-item" v-for="(item,index) in dataList" :key="index" @click="goDetail(item)">
				<image :src="item.cover_img"></image>
				<view class="article-content">
					<view class="article-title">{{ item.name }}</view>
					<view class="article-info">
						<view class="article-price-info flex flex-y-end">
							<view class="left-side flex flex-y-center">
								<view class="gray-text-info" style="color: #9c9c9c">合计</view>
								<view class="article-price" v-if="item.price">￥{{ item.price }}</view>
							</view>
							<view class="button-1">立即购买</view>
						</view>
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
				dataList:[],
				text1: '2222222222222222222333333333333333'
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
				uni.setStorageSync('PROJECT_CACHE',item);
				this.too('gzlc_detail')
			},
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
	background-color: #f2f2f2;
}

.page-gzlc{
	padding-top: 120rpx;
}

.article-list{
	margin-top: 24rpx;
	padding: 0 32rpx 120rpx;
}

.article-content{
	padding: 32rpx 20rpx;
	.article-title{
		font-size: 42rpx;
		color: #333;
	}

	.article-price{
		font-size: 52rpx;
		color: $navbar-red;
	}

	.article-price-info{
		margin-top: 32rpx;
		justify-content: flex-end;

		.left-side{
			padding-bottom: 8rpx;
		}

		.gray-text-info{
			padding-top: 12rpx;
		}

		.article-price{
			padding-right: 32rpx;
		}

	}

}



</style>
