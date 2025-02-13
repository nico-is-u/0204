<template>
	<view class="page-gzlc">
		<!-- 顶栏 -->
		<image src="/static/13.jpg" class="navbar-img" mode="widthFix"></image>

		<!-- 文章列表 -->
		<view class="article-list flex flex-column">
			<view class="article-item">
				<image src="/static/14.jpg" ></image>
				<view class="article-content"></view>
			</view>

			<view class="article-item">
				<image src="/static/15.jpg" ></image>
				<view class="article-content"></view>
			</view>

			<view class="article-item">
				<image src="/static/16.jpg" ></image>
				<view class="article-content"></view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
</style>
