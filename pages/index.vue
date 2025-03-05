<template>
	<view class="page-index">
		<nNavbar title="" :showBackBtn="false"></nNavbar>
		<view class="section">
			<!-- 幻灯片 -->
			<swiper class="swiper">
				<swiper-item class="swiper-item" v-for="(item,index) in bannerList" :key="'swiper-item-' + index">
					<image :src="item.img_url" mode="widthFix"></image>
				</swiper-item>
			</swiper>

			<!-- 视频播放 -->
			<video class="bannervid" ref="vdi" :muted="isMuted" :autoplay="true" loop  objectFit="cover" :src="setting_config.video_url" @click="isMuted = false"></video>
			
			<!-- <view class="view-slider">
				<image src="/static/4.jpg" mode="widthFix"></image>
			</view> -->
			
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
				
				<view class="item flex flex-column flex-y-center" @click="too('turntable')">
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

			<!-- 排行榜 -->
			<view class="section-white section-padding phb-list" style="margin-top: 40rpx">
				<view class="flex flex-between title">
					<view>政治团队宣传榜</view>
					<view>红色资本示范榜</view>
				</view>

				<view class="list flex flex-between">
					<view class="left-side">
						<view class="item" v-for="(item,index) in phdList1" :key="'phd-list1-' + index">
							<image src="/static/t-13.png" style="width: 50rpx; margin-right: 10rpx;" mode="widthFix"></image>
							<text>{{index + 1}}. {{ item.leader_name }}</text>
						</view>
					</view>

					<view class="right-side">
						<view class="item" v-for="(item,index) in phdList2" :key="'phd-list1-' + index">
							<image src="/static/t-13.png" style="width: 50rpx; margin-right: 10rpx;" mode="widthFix"></image>
							<text>{{index + 1}}. {{ item.leader_name }}</text>
						</view>
					</view>

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
			
			<view id="kefu" @click="kefu"></view>

		</view>
	</view>
</template>

<script>
	import bannerTest from '../static/4.jpg'
	export default {
		data() {
			return {
				setting_config: {},
				user_info: {},
				newsList: {},
				bannerList: [],
				phdList1: [],
				phdList2: [],
			}
		},
		methods: {
			getSystem_config() {
				this.to.www(this.api.system_info)
					.then(res => {
						this.setting_config = res.data.setting_conf;
						uni.setStorageSync('setting_config',this.setting_config)
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
			getBannerList() {
				this.to.www(this.api.banner_list)
					.then(res => {
						this.bannerList = res.data || []
					})
			},
			getPhbList(){
				this.to.www(this.api.phb).then(res => {
					this.phdList1 = res.data.investments || []
					this.phdList2 = res.data.teamLeaders || []
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
						uni.setStorageSync('user_info',this.user_info)
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
				this.getBannerList();
				this.getUerInfo();
				this.getPhbList();
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

.bannervid {
	width: 100%;
	
	border-radius: 10rpx;
	margin-top: 32rpx;
}

.swiper{
	width: 100%;
	height: 380rpx;
	.swiper-item{
		width: 100%;

		border-radius: 24rpx;
		overflow: hidden;

		image{
			width: 100%;
			height: 100%;
		}
	}
}

.phb-list{
	.title{
		padding-right: 0%;
		font-family: 'Courier New', Courier, monospace;
		font-size: 32rpx;
		font-weight: bold;
		view{
			width: 50%;
		}
	}

	.list{
		padding-top: 16rpx;
		padding-right: 0%;
		color: #666;
		.item{
			display: flex;
			align-items: center;
			image{
				flex-shrink: 0;
			}

			text{
				word-break: break-all;
				white-space: nowrap;

			}
		}

		.left-side,.right-side{
			
			width: 50%;
			flex-shrink: 0;
			overflow: hidden;

			padding: 20rpx 0;

			display: flex;
			flex-direction: column;
			gap: 20rpx;
		}
	}
}

</style>
