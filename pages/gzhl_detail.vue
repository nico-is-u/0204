<template>
    <view class="page-gzhl-detail">

        <!-- 顶栏 -->
        <image src="/static/17.jpg" class="navbar-img" mode="widthFix"></image>

        <view class="navbar-img-back" @click="clickLeft">
            <!-- 显示返回箭头 -->
            <uni-icons type="left" size="36"></uni-icons>
        </view>

        <view class="section-list flex flex-column">

            <view class="section-red">
                <view class="section-red-content gzhl">

                    <view class="title flex flex-x-center flex-y-end">
                        <text style="font-size: 60rpx; padding: 20rpx 10rpx 0;" class="text-yellow text-bold">{{
                            dataItem.price ? dataItem.price + '元' : '' }}即可确权</text>
                    </view>

                    <view class="table-2 table-2-white" style="margin-top: 24rpx;">
                        <view class="thead">
                            <view class="td" style="width: 33.33%">持有国债</view>
                            <view class="td" style="width: 33.33%">确权国债</view>
                            <view class="td" style="width: 33.33%">回购时间</view>
                        </view>
                        <view class="tbody">
                            <view class="td" style="width: 33.33%">{{ user_info.holding_national_debt || '0' }}</view>
                            <view class="td" style="width: 33.33%">{{ dataItem.government_bond_amount ?
                                dataItem.government_bond_amount+'元' : '0'}}</view>
                            <view class="td" style="width: 33.33%">{{ dataItem.days ? dataItem.days + '天' : '' }}</view>
                        </view>

                        <view class="thead">
                            <view class="td" style="width: 33.33%">年化收益</view>
                            <view class="td" style="width: 33.33%">回购可提现</view>
                            <view class="td" style="width: 33.33%">可加速回购</view>
                        </view>

                        <view class="tbody">
                            <view class="td" style="width: 33.33%">{{ dataItem.annual_yield ? dataItem.annual_yield +
                                '%' : '' }}</view>
                            <view class="td" style="width: 33.33%">{{ dataItem.shouyi ? dataItem.shouyi + '元' : '0' }}
                            </view>
                            <view class="td" style="width: 33.33%">{{ dataItem.jiasudays ? dataItem.jiasudays + '天' :
                                '--'}}</view>
                        </view>
                    </view>

                    <view class="flex flex-between" style="margin-top: 32rpx; color: white;">
                        <view class="left-side" style="flex-shrink: 0; padding-right: 2rpx;">备注：</view>
                        <view class="right-side" style="flex-grow: 1;">
                            <view>1、确权国债每份金额为80000元，可确权多份。</view>
                            <view>2、确权360天后国家按1：1回购，即每份80000元。</view>
                            <view>3、每1分功勋值可加速每份确权国债回购时间1天，最高可加速180天。</view>
                        </view>
                    </view>

                    <view class="title flex flex-x-center flex-y-end" style="margin-top: 20rpx">
                        <text class="text-yellow">中央财政补助</text>
                    </view>

                    <view class="table-2 table-2-white" style="margin-top: 24rpx;">
                        <view class="thead">
                            <view class="td" style="width: 33.33%">确权10天</view>
                            <view class="td" style="width: 33.33%">确权180天</view>
                            <view class="td" style="width: 33.33%">确权360天</view>
                        </view>
                        <view class="tbody">
                            <view class="td flex flex-column flex-x-center flex-y-start"
                                style="width: 33.33%; text-align: left; padding:20rpx 0 20rpx 20rpx;">
                                <view>获赠一个月</view>
                                <view>收益: {{ dataItem.quequan10 || '--' }}元</view>
                            </view>
                            <view class="td flex flex-column flex-x-center flex-y-start"
                                style="width: 33.33%; text-align: left; padding:20rpx 0 20rpx 12rpx;">
                                <view><text>收益: {{ dataItem.chiyou180 || '--' }}元</text></view>
                                <view><text class="text-gold">如有加速</text></view>
                                <view><text>回购: {{ dataItem.government_bond_amount }}元</text></view>
                                <view><text>退确权费: 300元</text></view>
                            </view>

                            <view class="td flex flex-column flex-x-center flex-y-start"
                                style="width: 33.33%; text-align: left; padding:20rpx 0 20rpx 12rpx;">
                                <view><text>收益: {{ dataItem.chiyou360 || '--' }}元</text></view>
                                <view><text>回购: {{ dataItem.government_bond_amount }}元</text></view>
                                <view><text>退确权费: 300元</text></view>
                            </view>
                        </view>


                    </view>

                    <view style="margin: 72rpx 0 64rpx;">

                        <view class="flex flex-column">

                            <view class="padding-box-1">
                                <view class="like-number-input flex">
                                    <view class="left-side">工资余额：</view>
                                    <view class="right-side flex flex-y-center">

                                        <view class="icon" style="padding-top: 6rpx;" @click="onMinus('gongzi_debt')">
                                            <image src="/static/t-19.png" alt="" mode="widthFix" />
                                        </view>

                                        <input type="number" v-model="gongzi_debt" disabled>

                                        <view class="icon" style="margin-left: 24rpx; padding-top: 10rpx;"
                                            @click="onPlus('gongzi_debt')">
                                            <image src="/static/t-20.png" alt="" mode="widthFix" />
                                        </view>

                                    </view>
                                </view>

                                <view class="like-number-input flex" style="margin-top: 20rpx;">
                                    <view class="left-side">可用余额：</view>
                                    <view class="right-side flex flex-y-center">

                                        <view class="icon" style="padding-top: 6rpx;" @click="onMinus('topup_balance')">
                                            <image src="/static/t-19.png" alt="" mode="widthFix" />
                                        </view>

                                        <input type="number" v-model="topup_balance" disabled>

                                        <view class="icon" style="margin-left: 24rpx; padding-top: 10rpx;"
                                            @click="onPlus('topup_balance')">
                                            <image src="/static/t-20.png" alt="" mode="widthFix" />
                                        </view>

                                    </view>
                                </view>
                            </view>

                        </view>

                        <view class="flex flex-column" style="width: 100%;">
                            <!-- 支付密码 -->
                            <!-- <view class="top_left flex flex-y-center">
            支付密码
            <image src="/static/app2/exclamation.png" alt="" />
        </view> -->

                            <view class="top flex flex_direction_column align_items_center">
                                <input type="password" v-model="pay_password" placeholder="请输入支付密码"
                                    class="pay_password">
                            </view>

                        </view>

                        <button style="margin-top: 32rpx;" class="btn-yellow" @click="submit">认购</button>

                    </view>

                </view>
            </view>

        </view>

        <view id="kefu" @click="kefu"></view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            user_info: {},
            pay_password: '',
            dataItem: {},

            gongzi_debt: 200,
            topup_balance: 100,
        }
    },
    methods: {
        /* 点击左侧按钮 */
        clickLeft() {
            let pages = getCurrentPages()
            if (pages.length == 1) {
                this.too('/pages/index', 'tab')
            } else {
                uni.navigateBack({ delta: 1 })
            }
        },

        getUserInfo() {
            this.user_info = uni.getStorageSync('user_info') || {}
            this.to.www(this.api.user_info)
                .then(res => {
                    this.user_info = res.data
                    uni.setStorageSync('user_info', this.user_info)
                })
        },

        getDataInfo(id) {
            // uni.showLoading()
            // this.to.www(this.api.project_group_info,{
            //     id
            // }).then(response => {
            //     uni.hideLoading()
            //     this.dataInfo = response.data.data || {}
            // }).catch(e => {
            //     uni.hideLoading()
            // })
        },

        /* 加减法 */
        onMinus(val) {
            if (val == 'gongzi_debt') {
                if (this.gongzi_debt) {
                    this.gongzi_debt = 0
                }
            }
            if (val == 'topup_balance') {
                if (this.topup_balance > 100) {
                    this.topup_balance -= 100
                }
            }
        },

        onPlus(val) {
            if (val == 'gongzi_debt') {
                if (!this.gongzi_debt) {
                    this.gongzi_debt = 200
                }
            }
            if (val == 'topup_balance') {
                if (this.topup_balance < 200) {
                    this.topup_balance += 100
                }
            }
        },

        submit() {
            if (!this.pay_password) {
                this.toa('请输入支付密码')
            } else {
                uni.showLoading({ mask: true })
                this.to.www(this.api.placeOrder2, {
                    project_id: this.dataItem.id,
                    pay_password: this.pay_password,
                    gongzi_debt: this.gongzi_debt,
                    topup_balance: this.topup_balance
                }, 'p').then(response => {
                        
                        this.toa('购买成功')
                        setTimeout(() => {
                            this.too('gzhl','tab')
                        }, 500)

                }).finally(() => {
                    uni.hideLoading()
                })
            }
        },


    },

    onLoad() {
        this.dataItem = uni.getStorageSync('PROJECT2_CACHE')
        this.getUserInfo()
    },
    onUnload() {
        uni.removeStorageSync('PROJECT2_CACHE')
    },

}
</script>

<style lang="scss">
page {
    height: 100%;
    overflow-y: scroll;

    background-image: url('/static/gzhl-bg.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.page-gzhl-detail {
    padding: 160rpx 32rpx;
}

// 左上角文字和感叹号
.top_left {
    padding-top: 20px;
    padding-left: 3%;
    font-size: 38rpx;
    font-weight: bold;

    image {
        width: 24px;
        height: 24px;
        padding-left: 10px;
    }
}

// 上方提现金额
.top {
    padding: 12rpx 24rpx 0;

    input {
        height: 50px;
        width: 94%;
        padding-left: 20px;
        margin: 10px 0;
        border: 1px solid rgb(126, 55, 61);
        border-radius: 10px;
        font-size: 28rpx;
        color: rgb(151, 151, 151);
    }
}

.pay_password {
    border: 1px solid #eecd86 !important;

    .uni-input-placeholder {
        color: #eecd86 !important;
    }
}
</style>