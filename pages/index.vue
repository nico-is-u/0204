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
				
				<view class="item flex flex-column flex-y-center" @click="toa('分享好友')">
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
				
				<view class="item flex flex-column flex-y-center" @click="toa('在线客服')">
					<image src="/static/10.png" mode="widthFix"></image>
					<text>在线客服</text>
				</view>
				
			</view>
			
			<!-- 新闻部分 -->
			<view class="section-white section-padding" style="margin-top: 40rpx">
				<view class="section-title">强国要闻</view>
				<view class="news-list">
					<view class="news-item flex">
						<image class="left-side" mode="widthFix" src="/static/news-fake-1.jpg"></image>
						<view class="right-side flex flex-column flex-between">
							<view class="title">企业汇率风险</view>
							<view class="desc">国家外汇管理局发布企业汇率风险管理指汇营造...</view>
							<view class="date">2025-01-01</view>
						</view>
					</view>
					<view class="news-item flex">
						<image class="left-side" mode="widthFix" src="/static/news-fake-1.jpg"></image>
						<view class="right-side flex flex-column flex-between">
							<view class="title">企业汇率风险</view>
							<view class="desc">国家外汇管理局发布企业汇率风险管理指汇营造...</view>
							<view class="date">2025-01-01</view>
						</view>
					</view>
					<view class="news-item flex">
						<image class="left-side" mode="widthFix" src="/static/news-fake-1.jpg"></image>
						<view class="right-side flex flex-column flex-between">
							<view class="title">企业汇率风险</view>
							<view class="desc">国家外汇管理局发布企业汇率风险管理指汇营造...</view>
							<view class="date">2025-01-01</view>
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
				
			}
		},
		methods: {
			zxkf(){
				this.toa('在线客服')
			}
		}
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

.news-list{
	.news-item{
		
		margin-top: 36rpx;
		
		.left-side{
			width: 48%;
			flex-shrink: 0;
			
			padding: 6rpx 0;
		}
		
		.right-side{
			
			width: 52%;
			padding-left: 24rpx;
			
			.title{
				font-size: 42rpx;
			}
			
			.desc{
				height: 96rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				color: #767676;
			}
			
			.date{
				
				color: #767676;
			}
		}
		
	}
}
</style>
