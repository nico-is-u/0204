<template>
	<view class="page-gzlc">
		<!-- 顶栏 -->
		<image src="/static/13.jpg" class="navbar-img" mode="widthFix"></image>

		<!-- 文章列表 -->
		<view class="article-list flex flex-column">
			<view class="article-item" v-for="(item,index) in dataList" :key="index">
				<image :src="item.cover_img"></image>
				<view class="article-content">
					<view class="article-title">{{ item.name }}</view>
					<view class="article-price" v-if="item.price">￥{{ item.price }}</view>
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
					project_group_id:7
				},'p').then(response => {
					uni.hideLoading()
					this.dataList = response.data.data || []
				}).catch(e => {
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
	
	background-color: #f2f2f2;
}

.page-gzlc{
	padding-top: 180rpx;
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
}
</style>
