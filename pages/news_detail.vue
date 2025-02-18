<template>
	<view class="page_news_detail">
		<nNavbar title="新闻中心" :back="true" backgroundColor="#ad1c0a" :isFixed="true"></nNavbar>
		<view class="news_page">
			<u-parse :content="obj.content" :tagStyle="style"></u-parse>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				obj:{},
				style: {
					img:'width:100%;margin:10px 0'
				}
			}
		},
		onLoad() {
			let data = uni.getStorageSync('NEWS_CACHE');
			this.obj = data;
			console.log(this.obj)
		}
	}
</script>

<style>
.news_page {
	padding: 35rpx;
	padding-top: 160rpx;
}
</style>
