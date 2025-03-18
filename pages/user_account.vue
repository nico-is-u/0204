<template>
    <view id="page_user_account">

        <view class="table">
            <view class="tbody">
                
                <view class="row flex flex-y-center flex-between">
                    <text>头像</text>
                    <view class="right-side">
                        <image style="width: 80rpx;" mode="widthFix" :src="user_info.avatar || '/static/portrait.jpg'"></image>
                    </view>
                </view>

                <view class="row flex flex-between">
                    <text>姓名</text>
                    <text>{{user_info.realname || '未实名'}}</text>
                </view>

                <view class="row flex flex-between">
                    <text>手机号</text>
                    <text>{{user_info.phone || ''}}</text>
                </view>

                <view class="row flex flex-between">
                    <text>可提余额</text>
                    <text>{{user_info.shouyijin || '0.00'}}</text>
                </view>

                <view class="row flex flex-between">
                    <text>可用余额</text>
                    <text>{{user_info.topup_balance || '0.00'}}</text>
                </view>

                <view class="row flex flex-between">
                    <text>持有国债份额</text>
                    <text>0.00</text>
                </view>

                <view class="row flex flex-between">
                    <text>激活国债份额</text>
                    <text>{{user_info.guozhaihongli || '0.00'}}</text>
                </view>

                <view class="row flex flex-between">
                    <text>两重建设基金</text>
                    <text>{{user_info.liangchongjianshe || '0.00'}}</text>
                </view>

                <view class="row flex flex-between">
                    <text>功勋值</text>
                    <text>{{user_info.gongxun ? Math.floor(user_info.gongxun) : '0'}}</text>
                </view>

                <view class="row flex flex-between">
                    <text>预计到期分红</text>
                    <text>0.00</text>
                </view>

            </view>
        </view>

        <view class="padding-box-1">
            <image src="/static/t-11.png" style="width: 100%; margin-top: 64rpx;" mode="widthFix"></image>
        </view>

        <view id="kefu" @click="kefu"></view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            user_info: {}
        }
    },
    methods: {
        getUserInfo() {
            this.to.www(this.api.user_info)
                .then(res => {
                    this.user_info = res.data;
                })
        },
    },
    onLoad(){
        this.getUserInfo()
    }
}
</script>

<style lang="scss">
page {
	height: 100%;
	background-image: url('/static/index-bg.jpg');
	background-size: 100% auto;
	background-repeat: no-repeat;

    background-color: #f2f2f2;

}

#page_user_account {
    padding: 32rpx;

    // .section-red {}

    // // 中上个人信息框
    // .mine_information {
    //     width: 100%;
    //     overflow: hidden;

    //     margin: 32rpx 0;

    //     // 上半红色背景框
    //     .top_red {
    //         width: 100%;
    //         position: relative;
    //         background-color: rgb(173, 28, 11);

    //         // 左侧头像
    //         .avatar {
    //             image {
    //                 width: 180rpx;
    //                 margin-left: 20rpx;
    //                 border-radius: 100px;
    //             }
    //         }

    //         // 中间姓名电话
    //         .center {
    //             width: 85%;

    //             .line {
    //                 padding: 10rpx 0 5rpx 20rpx;

    //                 .line_left {
    //                     color: #d6a5a2;
    //                     font-size: 26rpx;
    //                 }

    //                 .line_right {
    //                     color: #fafafa;
    //                     font-size: 32rpx;
    //                 }
    //             }
    //         }

    //         // 右侧已实名图标
    //         .right {
    //             width: 120rpx;
    //             height: 50rpx;
    //             font-size: 30rpx;
    //             background-color: #e8cf8f;
    //             border-top-left-radius: 8rpx;
    //             border-bottom-left-radius: 8rpx;
    //             color: #ad1c0b;
    //             position: absolute;
    //             right: 0;
    //         }
    //     }

    //     // 下半白色背景框
    //     .bottom_white {
    //         width: 100%;
    //         background-color: rgb(255, 255, 255);
    //         padding: 20rpx 0;

    //         .line {
    //             padding: 20rpx 0;

    //             .item {
    //                 // width: 25%;
    //                 padding: 0 2%;

    //                 display: flex;
    //                 justify-content: center;
    //                 align-items: center;

    //                 .top {
    //                     font-size: 26rpx;
    //                     text-align: center;
    //                 }

    //                 .bottom {
    //                     padding-top: 16rpx;
    //                     font-size: 26rpx;
    //                 }

    //                 .font_red {
    //                     color: #bd4046;
    //                 }
    //             }
    //         }
    //     }
    // }

    // .section-3{
    //     width: 100%;
    //     min-height: 500rpx;

    //     background-color: #ad1c0b;

    //     background-image: url('/static/t-9.png');
    //     background-size: 100% auto;
    //     background-repeat: no-repeat;
    //     background-position: 0 bottom;

    //     border-radius: 12rpx;
    //     padding: 0 32rpx 100rpx;
    // }

    .table{
        background-color: #fff;
        color: #666;

        margin-top: 160rpx;
        font-size: 32rpx;

        .row{
            border-bottom: 1px dashed #e5e5e5;
            padding-top: 24rpx;
            padding-bottom: 24rpx;
        }
    }
}
</style>