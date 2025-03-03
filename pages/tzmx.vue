<template>
	<view class="page-tzmx">
		<!-- 顶栏 -->
		<image src="/static/23.jpg" class="navbar-img" mode="widthFix"></image>
        <view class="navbar-img-back" @click="clickLeft">
            <!-- 显示返回箭头 -->
            <uni-icons type="left" size="36"></uni-icons>
        </view>

        <view class="section-3 section-bg-1" style="padding-bottom: 260rpx">
            <view class="section-title">
                <image src="/static/t-10.png" style="width: 60rpx;" mode="widthFix"></image>
                <text>持有国债份额</text>
            </view>

            <view class="table" style="padding-top: 10rpx;">
                <view class="tbody">
                    <view class="row flex flex-between">
                        <text>持有国债份额</text>
                        <text>8888</text>
                    </view>

                    <view class="row flex flex-between">
                        <text>预计可分红</text>
                        <text>8888</text>
                    </view>

                    <view class="row" style="min-height: 80rpx"></view>

                </view>
            </view>

            <view class="table" style="margin-top: 36rpx;">
                <view class="thead flex flex-between">
                    <text>￥分红国债份额</text>
                </view>

                <view class="tbody">
                    <view class="row flex flex-between">
                        <text>分红</text>
                        <text>8888</text>
                    </view>

                    <view class="row flex flex-between">
                        <text>到期可提取金额</text>
                        <text>8888</text>
                    </view>

                    <view class="row flex flex-between">
                        <text>两重建设基金</text>
                        <text>8888</text>
                    </view>

                    <view class="row flex flex-between">
                        <text>到期可提取金额</text>
                        <text>8888</text>
                    </view>
                </view>

            </view>

        </view>

        <view id="kefu" @click="kefu"></view>
        <nTabbar></nTabbar>
    </view>
</template>

<script>
export default {
    methods:{
        /* 点击左侧按钮 */
        clickLeft(){
            let pages = getCurrentPages()
            if(pages.length == 1){
                this.too('/pages/index','tab')
            }else{
                uni.navigateBack({delta: 1})
            }
        },
    }
}
</script>

<style lang="scss">
page{
    height: 100%;

    background-image: url('/static/22.jpg');
    background-size: 100% 100%;
}

.page-tzmx{
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
    
    .section-title{
        padding-top: 66rpx;
    }
}

</style>