<template>
	<view class="page-gzlc">
        <!-- 顶栏 -->
		<image src="/static/21.jpg" class="navbar-img" mode="widthFix"></image>
        <view class="navbar-img-back" @click="clickLeft">
            <!-- 显示返回箭头 -->
            <uni-icons type="left" size="36"></uni-icons>
        </view>

        <view class="section-3 section-bg-1" style="padding-bottom: 260rpx">
            <view class="section-title">
                <image src="/static/t-8.png" style="width: 60rpx;" mode="widthFix"></image>
                <text>团队人数</text>
            </view>

            <view class="table">
                <view class="thead flex flex-between">
                    <text>下级人数</text>
                    <text>激活人数</text>
                </view>

                <view class="tbody">
                    <view class="row flex flex-between">
                        <text>9999</text>
                        <text>8888</text>
                    </view>
                </view>
            </view>

            <view class="table" style="margin-top: 36rpx;">
                <view class="thead flex flex-between">
                    <text>￥团队资产</text>
                </view>

                <view class="tbody">
                    <view class="row flex flex-between">
                        <text>持有国债份额</text>
                        <text>13000000000</text>
                    </view>
                    <view class="row flex flex-between">
                        <text>分红国债份额</text>
                        <text>13000000000</text>
                    </view>
                    <view class="row flex flex-between">
                        <text>两重建设基金</text>
                        <text>13000000000</text>
                    </view>
                </view>
            </view>

        </view>

        <nTabbar></nTabbar>
    </view>
</template>

<script>
	export default {
        onLoad(){
            this.getDataList()
        },
        methods:{
            getDataList(){
                this.to.www(this.api.team_list)
            },
            /* 点击左侧按钮 */
            clickLeft(){
                let pages = getCurrentPages()
                if(pages.length == 1){
                    this.too('/pages/index','tab')
                }else{
                    uni.navigateBack({delta: 1})
                }
            },
        },
        
    }
</script>

<style lang="scss">
page{
    height: 100%;

    background-image: url('/static/22.jpg');
    background-size: 100% 100%;
}

.page-gzlc{
    height: 100%;
    padding: 26% 32rpx;
}

.section-3{
    width: 100%;
    min-height: 90%;

    background-color: #ad1c0b;

    background-image: url('/static/t-9.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: 0 bottom;

    border-radius: 28rpx;
    padding: 0 32rpx;
}
</style>
