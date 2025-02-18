<template>
	<view class="page-gxjy">
		<!-- 顶栏 -->
		<image src="/static/12.jpg" class="navbar-img" mode="widthFix"></image>

		<!-- 顶部 -->
		<view class="section-red section-red-1">
			<view class="section-red-content list flex flex-column">
				<view class="row flex">
					<view class="left-side" style="letter-spacing: 4px;">姓名：</view>
					<view class="right-side">{{user_info.realname || '未实名'}}</view>
				</view>
				<view class="row flex">
					<view class="left-side">功勋值：</view>
					<view class="right-side"></view>
				</view>
				<view class="row flex">
					<view class="left-side">功勋称号：</view>
					<view class="right-side"></view>
				</view>
			</view>
		</view>

		<!-- 中间 -->
		<view class="section-red section-red-2">
			<view class="section-red-content"></view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				user_info:{},
				dataList:[]
			}
		},
		onLoad() {
			// this.getDataList()	
			this.getUserInfo()
		},
		methods: {
			getUserInfo() {
				this.to.www(this.api.user_info)
					.then(res => {
						this.user_info = res.data;
					})
			},
			getDataList() {
				this.to.www(this.api.project_group_list,{
					project_group_id:7
				}).then(response => {
					this.dataList = response.data.data || []
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
	
	background-image: url('/static/gxjy-bg.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	
}

.page-gxjy{
	.section-red-1{
		position: absolute;

		width: calc(100% - 48rpx);

		top: 136rpx;
		left: 24rpx;
	}

	.section-red-2{
		position: absolute;

		width: calc(100% - 48rpx);
		height: 50vh;

		top: 36vh;
		left: 24rpx;
	}

}

</style>
