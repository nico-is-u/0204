<template>
    <uni-tabbar class="uni-tabbar-bottom">
        <view class="uni-tabbar" style="background-color: rgb(173, 28, 11); backdrop-filter: none;">
            <view class="uni-tabbar-border" style="background-color: rgba(0, 0, 0, 0.33);"></view>
            <view class="uni-tabbar__item" @click="too('/','tab')">
                <view class="uni-tabbar__bd" style="height: 50px;">
                    <view class="uni-tabbar__icon" style="width: 24px; height: 24px;"><img src="/static/tabbar/home.png">
                    </view>
                    <view class="uni-tabbar__label"
                        style="color: rgb(255, 255, 255); font-size: 10px; line-height: normal; margin-top: 3px;"> 首页 </view>
                </view>
            </view>
            <view class="uni-tabbar__item" @click="too('/pages/gxjy','tab')">
                <view class="uni-tabbar__bd" style="height: 50px;">
                    <view class="uni-tabbar__icon" style="width: 24px; height: 24px;"><img src="/static/tabbar/gxjy.png">
                    </view>
                    <view class="uni-tabbar__label"
                        style="color: rgb(255, 255, 255); font-size: 10px; line-height: normal; margin-top: 3px;"> 功勋家园
                    </view>
                </view>
            </view>
            <view class="uni-tabbar__item" @click="too('/pages/gzlc','tab')">
                <view class="uni-tabbar__bd" style="height: 50px;">
                    <view class="uni-tabbar__icon" style="width: 24px; height: 24px;"><img src="/static/tabbar/gzlc.png">
                    </view>
                    <view class="uni-tabbar__label"
                        style="color: rgb(255, 255, 255); font-size: 10px; line-height: normal; margin-top: 3px;"> 国之两重
                    </view>
                </view>
            </view>
            <view class="uni-tabbar__item" @click="too('/pages/gzhl','tab')">
                <view class="uni-tabbar__bd" style="height: 50px;">
                    <view class="uni-tabbar__icon" style="width: 24px; height: 24px;"><img
                            src="/static/tabbar/gzhl.png"></view>
                    <view class="uni-tabbar__label"
                        style="color: rgb(255, 255, 255); font-size: 10px; line-height: normal; margin-top: 3px;"> 国债红利
                    </view>
                </view>
            </view>
            <view class="uni-tabbar__item" @click="too('/pages/mine','tab')">
                <view class="uni-tabbar__bd" style="height: 50px;">
                    <view class="uni-tabbar__icon" style="width: 24px; height: 24px;"><img src="/static/tabbar/mine.png">
                    </view>
                    <view class="uni-tabbar__label"
                        style="color: rgb(255, 255, 255); font-size: 10px; line-height: normal; margin-top: 3px;"> 个人中心
                    </view>
                </view>
            </view>
        </view>
        <view class="uni-placeholder" style="height: 50px;"></view>
    </uni-tabbar>
</template>