<template>
	<view class="page-gzhl">
		<!-- 顶栏 -->
		<image src="/static/17.jpg" class="navbar-img" mode="widthFix"></image>

		<view class="section-list flex flex-column">

			<view class="section-red" v-for="(item,index) in dataList" :key="index" @click="too('/pages/gzhl_detail?id='+item.id)">
				<view class="section-red-content">
					<image :src="item.cover_img"></image>
					<view class="section-red-cover flex flex-between flex-y-center">
						<view class="section-red-title">{{ item.name }}</view>
						<!-- <view class="section-red-price" v-if="item.price">￥{{ item.price }}</view> -->
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
			}
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
	height: 300rpx;
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
