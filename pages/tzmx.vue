<template>
	<view class="page-tzmx">
		<!-- 顶栏 -->
		<image src="/static/25.jpg" class="navbar-img" mode="widthFix"></image>
        <view class="navbar-img-back" @click="clickLeft">
            <!-- 显示返回箭头 -->
            <uni-icons type="left" size="36"></uni-icons>
        </view>

        <view class="section-3 section-bg-1" style="padding-bottom: 260rpx">
            <view class="section-title">
                <view class="flex flex-column" style="padding-bottom: 10rpx;">
                    <image src="/static/t-10.png" style="width: 60rpx;" mode="widthFix"></image>
                </view>
                <view class="flex flex-column">
                    <view>已确权国债份额: {{ dataDetail.totalOrders }}</view>
                    <view>总额: {{ dataDetail.totalGovernmentBondAmount }}</view>
                </view>
            </view>

            <view class="table" style="padding-top: 10rpx;">
                <view class="tbody" style="min-height: 180rpx; overflow-y: scroll;">
                    <view class="row flex flex-between" v-for="(item,index) in dataList" :key="'order-list-' + index" @click="getDataIndex(index)" :class="index == dataIndex ? 'row-selected' : ''">
                        <text>{{item.order_name}}</text>
                        <text>{{item.created_at}}</text>
                        <text>{{ item.amount + '元' }}</text>
                    </view>

                   
                </view>
            </view>

            <view class="table" style="margin-top: 36rpx;" v-if="dataItemDetail">
                <view class="thead flex flex-center">
                    <text style="font-size: 38rpx;">{{ dataItemDetail.order_name }}</text>
                </view>

                <view class="tbody">
                    <view class="row flex flex-between">
                        <text style="width: 33.33%; text-align: center;">{{dataItemDetail.jiangli.name1}}</text>
                        <text style="width: 33.33%; text-align: center;">{{dataItemDetail.jiangli.reward_time1}}</text>
                        <text style="width: 33.33%; text-align: center;">{{dataItemDetail.jiangli.bonus_amount1}}元</text>
                    </view>

                    <view class="row flex flex-between">
                        <text style="width: 33.33%; text-align: center;">{{dataItemDetail.jiangli.name2}}</text>
                        <text style="width: 33.33%; text-align: center;">{{dataItemDetail.jiangli.reward_time2}}</text>
                        <text style="width: 33.33%; text-align: center;">{{dataItemDetail.jiangli.bonus_amount2}}元</text>
                    </view>

                    <view class="row flex flex-between">
                        <text style="width: 33.33%; text-align: center;">{{dataItemDetail.jiangli.name3}}</text>
                        <text style="width: 33.33%; text-align: center;">{{dataItemDetail.jiangli.reward_time3}}</text>
                        <text style="width: 33.33%; text-align: center;">{{dataItemDetail.jiangli.bonus_amount3}}元</text>
                    </view>

                    <view class="row flex flex-between">
                        <text style="width: 33.33%; text-align: center;">{{dataItemDetail.jiangli.name4}}</text>
                        <text style="width: 33.33%; text-align: center;">{{dataItemDetail.jiangli.reward_time4}}</text>
                        <text style="width: 33.33%; text-align: center;">{{dataItemDetail.jiangli.bonus_amount4}}元</text>
                    </view>

                    <view class="row flex flex-between">
                        <text style="width: 33.33%; text-align: center;">{{dataItemDetail.jiangli.name5}}</text>
                        <text style="width: 33.33%; text-align: center;">{{dataItemDetail.jiangli.reward_time5}}</text>
                        <text style="width: 33.33%; text-align: center;">{{dataItemDetail.jiangli.bonus_amount5}}元</text>
                    </view>

                    <view class="row flex flex-between">
                        <text style="width: 33.33%; text-align: center;">兑换加速</text>
                        <text style="width: 33.33%; text-align: center;">{{ dataItemDetail.accelerated_days ? dataItemDetail.accelerated_days+'天' : '未加速'}}</text>
                        <text style="width: 33.33%; text-align: center;"></text>
                    </view>

                    <view class="row flex flex-y-center" style="padding-top: 20rpx;">
                        <image src="/static/t-21.png" style="width: 40rpx; padding-right: 10rpx;" mode="widthFix"></image>
                        <text>备注：宣传推广工资奖励/参与两重项目赠送</text>
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
    data(){
        return {
            dataDetail:{},
            dataIndex:-1,
        }
    },
    computed:{
        dataList() {
            return this.dataDetail.orderDetails || []
        },
        dataItemDetail(){
            let result = false
            if(this.dataIndex != -1 && Array.isArray(this.dataList)){
                result = this.dataList[this.dataIndex]
            }
            return result
        },
    },
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
        getDataList(){
            this.to.www(this.api.gzmx,{project_group_id:7},'p').then(res => {
                this.dataDetail = res.data || {}
            })
        },
        /* 选中选项 */
        getDataIndex(index){
            if(this.dataIndex == index){
                this.dataIndex = -1
            }else{
                this.dataIndex = index
            }
        },
    },
    onLoad(){
        this.getDataList()
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

.table{
    .row{
        border: 8rpx solid transparent;
        border-bottom: 2px solid #ad1c0b;
        &.row-selected{
            border-top-color: white;
            border-left-color: white;
            border-right-color: white;
            border-bottom: 4px solid white !important;
        }
    }
}

</style>