<template>
	<view class="page-index">
		<nNavbar title="首页" :showBackBtn="false"></nNavbar>
		<view class="section">
			<!-- 幻灯片 -->
			<view class="view-slider">
				<image src="/static/4.jpg" mode="widthFix"></image>
			</view>
			
			<!-- 小菜单 -->
			<view class="menu-box flex flex-between flex-y-center">
				<view class="item flex flex-column flex-y-center" @click='too("daily_sign")'>
					<image src="/static/6.png" mode="widthFix"></image>
					<text>每日签到</text>
				</view>
				
				<view class="item flex flex-column flex-y-center" @click="too('invite_friend')">
					<image src="/static/7.png" mode="widthFix"></image>
					<text>分享好友</text>
				</view>
				
				<view class="item flex flex-column flex-y-center" @click="toa('抽奖福利')">
					<image src="/static/8.png" mode="widthFix"></image>
					<text>抽奖福利</text>
				</view>
				
				<view class="item flex flex-column flex-y-center" @click="too('topup_balance')">
					<image src="/static/9.png" mode="widthFix"></image>
					<text>在线充值</text>
				</view>
				
				<view class="item flex flex-column flex-y-center" @click="zxkf">
					<image src="/static/10.png" mode="widthFix"></image>
					<text>在线客服</text>
				</view>
				
			</view>
			
			<!-- 新闻部分 -->
			<view class="section-white section-padding" style="margin-top: 40rpx">
				<view class="section-title">强国要闻</view>
				<view class="news-list">
					<view class="news-item flex" v-for="(item,index) in newsList" :key="index" @click="toNewsDatail(item)">
						<image class="left-side"  :src="item.cover_img"></image>
						<view class="right-side flex flex-column flex-between">
							<view class="title">{{item.title}}</view>
							<view class="desc" v-html="item.content"></view>
							<view class="date">{{item.created_at}}</view>
						</view>
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
				setting_config: {},
				user_info: {},
				newsList: {}
			}
		},
		methods: {
			getSystem_config() {
				this.to.www(this.api.system_info)
					.then(res => {
						this.setting_config = res.data.setting_conf;
					})
			},
			getNewsList() {
				this.to.www(this.api.system_news, {
						type: '11'
					}, 'p')
					.then(res => {
						this.newsList = res.data.data.splice(0, 3);
					})
			},
			toNewsDatail(obj){
				let _ = this;
				uni.setStorage({
					data: obj,
					key: 'NEWS_CACHE',
					success() {
						_.too('/pages/news_detail')
					}
				})
			},
			getUerInfo(){
				this.to.www(this.api.user_info)
					.then(res => {
						this.user_info = res.data;
					})
			},
			zxkf(){
				window.open(this.setting_config.kefu_url);
			}
		},
		onLoad() {
			var usr_isLogin = uni.getStorageSync("TK");
			if (!usr_isLogin) {
				uni.showToast({
					title: "请先登录",
					icon: "none",
					success() {
						setTimeout(() => {
							uni.reLaunch({
								url: '/pages/login'
							})
						}, 1500)
					}
				})
			} else {
				this.getSystem_config();
				this.getNewsList();
				this.getUerInfo();
			}
		},
	}
</script>

<style lang="scss">
page{
	height: 100%;
	background-image: url('/static/index-bg.jpg');
	background-size: 100% auto;
	background-repeat: no-repeat;
	
	background-color: #f2f2f2;
}

.page-index{
	padding: 0 24rpx 120rpx;
}

.section{
	width: 100%;
	margin-top: 24rpx;
	.view-slider{
		image{
			width: 100%;
			border-radius: 16rpx;
		}
	}
}


</style>
