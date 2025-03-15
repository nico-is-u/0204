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
                        <text>一级：{{ teamInfo.level1 || '0' }}</text>
                        <text>{{teamInfo._level1 || '0'}}</text>
                    </view>

                    <view class="row flex flex-between">
                        <text>二级：{{ teamInfo.level2 || '0' }}</text>
                        <text>{{teamInfo._level2 || '0'}}</text>
                    </view>

                    <view class="row flex flex-between">
                        <text>三级：{{ teamInfo.level3 || '0' }}</text>
                        <text>{{teamInfo._level3 || '0'}}</text>
                    </view>

                    <view class="row flex flex-between">
                        <text>四级：{{ teamInfo.level4 || '0' }}</text>
                        <text>{{teamInfo._level4 || '0'}}</text>
                    </view>

                    <view class="row flex flex-between">
                        <text>五级：{{ teamInfo.level5 || '0' }}</text>
                        <text>{{teamInfo._level5 || '0'}}</text>
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
                        <text>{{teamInfo.holding_national_debt || '0'}}</text>
                    </view>
                    <view class="row flex flex-between">
                        <text>分红国债份额</text>
                        <text>{{teamInfo.confirmed_national_debt || '0'}}</text>
                    </view>
                    <view class="row flex flex-between">
                        <text>两重建设基金</text>
                        <text>{{teamInfo.liangchongjianshe || '0'}}</text>
                    </view>
                </view>
            </view>

            <view class="table" style="margin-top: 36rpx;">
                <view class="thead flex flex-between" style="border-bottom: none;">
                    <view class="like-tab">
                        <view class="item" :class="level == 1 ? 'active' : ''" @click="changeLevel(1)">一级</view>
                        <view class="item" :class="level == 2 ? 'active' : ''" @click="changeLevel(2)">二级</view>
                        <view class="item" :class="level == 3 ? 'active' : ''" @click="changeLevel(3)">三级</view>
                        <view class="item" :class="level == 4 ? 'active' : ''" @click="changeLevel(4)">四级</view>
                        <view class="item" :class="level == 5 ? 'active' : ''" @click="changeLevel(5)">五级</view>
                    </view>
                </view>
                
                <view class="tbody team-list">
                    <view class="list-head">
                        <view style="width: 33.33%; text-align: center;">姓名</view>
                        <view style="width: 33.33%; text-align: center;">电话</view>
                        <view style="width: 33.33%; text-align: center;">实名情况</view>
                    </view>

                    <view class="list-body">
                        <view class="list-row" v-for="(item,index) in teamList" :key="'list-group-'+level+'-'+index">
                            <view style="width: 33.33%; text-align: center;">{{ item.realname || '--' }}</view>
                            <view style="width: 33.33%; text-align: center;">{{ item.phone || '--' }}</view>
                            <view style="width: 33.33%; text-align: center;">{{ item.realname ? '已实名' : '未实名' }}</view>
                        </view>
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
        onLoad(){
            this.getDataList()
            this.getDataInfo()
        },
        data(){
            return {
                teamInfo:{},
                teamList:[],
                level:1,
            }
        },
        methods:{
            getDataList(){
                uni.showLoading({mask:true})
                this.to.www(this.api.team_list,{
                    level:this.level,
                    page:1,
                    per_page:9999
                },'p').then(res =>{
                    this.teamList = res.data.list.data || []
                }).finally(() => {
                    uni.hideLoading()
                })
            },
            getDataInfo(){
                this.to.www(this.api.team_info).then(res=>{
                    this.teamInfo = res.data
                })
            },
            changeLevel(level){
                this.level = level
                this.getDataList()
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

    overflow: hidden;
    overflow-y: scroll;
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

.team-list{
    height: 500rpx;
    overflow: scroll;

    .list-head{
        font-weight: bold;
        border-bottom: 2px solid $navbar-red;

        display: flex;
        justify-content: space-between;
        font-size: 36rpx;

        padding: 36rpx 0 22rpx;

    }

    .list-row{
        display: flex;
        justify-content: space-between;
    }
}
</style>
