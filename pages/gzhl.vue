<template>
	<view class="page-gzhl">
		<!-- 顶栏 -->
		<image src="/static/17.jpg" class="navbar-img" mode="widthFix"></image>

		<view class="section-list flex flex-column">
			<view class="section-red">
				<view class="section-red-content"></view>
			</view>

			<view class="section-red">
				<view class="section-red-content"></view>
			</view>

			<view class="section-red">
				<view class="section-red-content"></view>
			</view>

			<view class="section-red">
				<view class="section-red-content"></view>
			</view>

			<view class="section-red">
				<view class="section-red-content"></view>
			</view>

			<view class="section-red">
				<view class="section-red-content"></view>
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
	height: 200rpx;
}
</style>
