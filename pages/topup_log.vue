<template>
    <view id="topup_log">
        <view class="section" v-if="dataList.length != 0">
            <view class="list-4">
                <view class="flex flex-column" v-for="(item,index) in dataList" :key="'list-item-' + index">
                    <view class="card">
                        <view class="row flex flex-between">
                            <text>充值</text>
                            <text class="amount">{{ item.amount }}</text>
                        </view>
                        <view class="row flex flex-between">
                            <text>{{item.created_at}}</text>
                            <view class="status status-2">已提现</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <u-empty v-else mode="data" :textSize="40" :iconSize="200"></u-empty>
    </view>
</template>

<script>
export default {
    data(){
        return {
            dataList:[]
        }
    },
    onLoad(){
        this.getDataList()
    },
    methods:{
        getDataList(){
            uni.showLoading({mask:true})
            this.to.www(this.api.withdraw_log).then(response => {
                this.dataList = response.data || []
            }).finally(() => {
                uni.hideLoading()
            })
        }
    }
}
</script>

<style lang="scss">
page{
    height: 100%;
    background-color: #f2f2f2;

    overflow: hidden;
    overflow-y: scroll;

    padding: 50rpx 24rpx;
}

.section{
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 24rpx;
}
</style>