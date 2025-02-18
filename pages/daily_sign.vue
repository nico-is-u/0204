<template>
	<view class="page_daily_sign">
		<nNavbar :back="true" :isFixed="true"></nNavbar>
		<view class="section">
			<view class="section-head flex">
				<view class="left-side flex flex-column flex-center">
					<view class="row">签到中心</view>
					<view class="row row2">
						<text>已签到</text>
						<text>0 天</text>
					</view>
				</view>

				<view class="right-side">

				</view>
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
	height: 1000rpx;
	background-image: url('/static/t-3.png');
	background-size: 100% 100%;

	padding: 36rpx 32rpx 0;
}

.section-head{
	width: 100%;
	height: 120rpx;
	background-color: black;
	opacity: 0.5;

}
</style>
