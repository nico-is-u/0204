<template>
    <view id="page_user_account">
        <view class="section-red section-red-1">
            <view class="section-red-content" style="padding: 0;">

                <view class="mine_information flex flex_direction_column align_items_center">
                    <!-- 上半红色背景框 -->
                    <view class="top_red flex flex-y-center">
                        <!-- 左侧头像 -->
                        <view class="avatar">
                            <image src="/static/avatar.png" mode="widthFix" alt=""></image>
                        </view>
                        <!-- 中间姓名电话 -->
                        <view class="center flex flex_direction_column">
                            <view class="line flex flex-y-center" @click="too('user_account')">
                                <view class="line_left">
                                    姓名：
                                </view>
                                <view class="line_right">
                                    {{ user_info.realname || '未实名' }}
                                </view>
                            </view>
                            <view class="line flex flex-y-center">
                                <view class="line_left">
                                    电话号码：
                                </view>
                                <view class="line_right">
                                    {{ user_info.phone }}
                                </view>
                            </view>
                        </view>
                        <!-- 右侧实名认证图标 -->
                        <view class="right flex flex-center">
                            <text v-if="!user_info || !user_info.realname">未实名</text>
                            <text v-else>已实名</text>
                        </view>
                    </view>
                </view>



            </view>
        </view>

        <view class="section-3 section-bg-1" style="padding-top: 32rpx; margin-top: 64rpx;">
            <view class="table">
                <view class="tbody">
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
                        <text>{{user_info.gongxun || '0'}}</text>
                    </view>

                    <view class="row flex flex-between">
                        <text>预计到期分红</text>
                        <text>0.00</text>
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
    }
}
</script>

<style lang="scss">
page {
    height: 100%;

    background-image: url('/static/24.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;

}

#page_user_account {
    padding: 32rpx;

    .section-red {}

    // 中上个人信息框
    .mine_information {
        width: 100%;
        overflow: hidden;

        margin: 32rpx 0;

        // 上半红色背景框
        .top_red {
            width: 100%;
            position: relative;
            background-color: rgb(173, 28, 11);

            // 左侧头像
            .avatar {
                image {
                    width: 180rpx;
                    margin-left: 20rpx;
                    border-radius: 100px;
                }
            }

            // 中间姓名电话
            .center {
                width: 85%;

                .line {
                    padding: 10rpx 0 5rpx 20rpx;

                    .line_left {
                        color: #d6a5a2;
                        font-size: 26rpx;
                    }

                    .line_right {
                        color: #fafafa;
                        font-size: 32rpx;
                    }
                }
            }

            // 右侧已实名图标
            .right {
                width: 120rpx;
                height: 50rpx;
                font-size: 30rpx;
                background-color: #e8cf8f;
                border-top-left-radius: 8rpx;
                border-bottom-left-radius: 8rpx;
                color: #ad1c0b;
                position: absolute;
                right: 0;
            }
        }

        // 下半白色背景框
        .bottom_white {
            width: 100%;
            background-color: rgb(255, 255, 255);
            padding: 20rpx 0;

            .line {
                padding: 20rpx 0;

                .item {
                    // width: 25%;
                    padding: 0 2%;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .top {
                        font-size: 26rpx;
                        text-align: center;
                    }

                    .bottom {
                        padding-top: 16rpx;
                        font-size: 26rpx;
                    }

                    .font_red {
                        color: #bd4046;
                    }
                }
            }
        }
    }

    .section-3{
        width: 100%;
        min-height: 500rpx;

        background-color: #ad1c0b;

        background-image: url('/static/t-9.png');
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: 0 bottom;

        border-radius: 12rpx;
        padding: 0 32rpx 100rpx;
    }
}
</style>