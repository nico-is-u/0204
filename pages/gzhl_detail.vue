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
						<text class="text-bold text-xxxl" style="transform: translateY(2rpx);">{{ dataItem.price ? dataItem.price + '元' : '' }}</text>
						<text>即可认购</text>
					</view>

					<view class="table-2" style="margin-top: 24rpx;">
						<view class="thead">
							<view class="td" style="width: 33.33%">激活金额</view>
							<view class="td" style="width: 33.33%">国债金额</view>
							<view class="td" style="width: 33.33%">年化收益</view>
						</view>
						<view class="tbody">
							<view class="td" style="width: 33.33%">{{ dataItem.price || '' }}</view>
							<view class="td" style="width: 33.33%">{{ dataItem.government_bond_amount || '0' }}</view>
							<view class="td" style="width: 33.33%">{{ dataItem.annual_yield || '0.00' }}</view>
						</view>
						
						<view class="thead" style="width: 66.66%;">
							<view class="td" style="width: 50%">持有时间</view>
							<view class="td" style="width: 50%">可提取</view>
						</view>

						<view class="tbody" style="width: 66.66%;">
							<view class="td" style="width: 50%">{{ dataItem.days ? dataItem.days + '天' : ''}}</view>
							<view class="td" style="width: 50%">{{ dataItem.shouyi || ''}}</view>
						</view>
					</view>

					<view class="flex" style="margin-top: 16rpx">
						<u-icon name="volume" size="34" color="#e8cf8f"></u-icon>
						<text style="font-size: 28rpx;">认购资格两重见习推广员及或两重助理推广员</text>
					</view>

					<view class="title flex flex-x-center flex-y-end" style="margin-top: 60rpx">
						<text>中央财政补助</text>
					</view>

					<view class="table-2" style="margin-top: 24rpx;">
						<view class="thead">
							<view class="td" style="width: 33.33%">持有{{ dataItem.holding_days_1 || '0' }}天</view>
							<view class="td" style="width: 33.33%">持有{{ dataItem.holding_days_2 || '0' }}天</view>
							<view class="td" style="width: 33.33%">持有{{ dataItem.holding_days_3 || '0' }}天</view>
						</view>
						<view class="tbody">
							<view class="td" style="width: 33.33%">{{ dataItem.earned_amount_1 || '0' }}</view>
							<view class="td" style="width: 33.33%">{{ dataItem.earned_amount_2 || '0' }}</view>
							<view class="td" style="width: 33.33%">{{ dataItem.earned_amount_3 || '0' }}</view>
						</view>
						
						<view class="thead" style="width: 66.66%;">
							<view class="td" style="width: 50%">持有{{ dataItem.holding_days_4 || '0' }}天</view>
							<view class="td" style="width: 50%">持有{{ dataItem.holding_days_5 || '0' }}天</view>
						</view>

						<view class="tbody" style="width: 66.66%;">
							<view class="td" style="width: 50%">{{ dataItem.earned_amount_4 || '0' }}</view>
							<view class="td" style="width: 50%">{{ dataItem.earned_amount_5 || '0' }}</view>
						</view>
					</view>

					<view style="margin: 72rpx 0 64rpx;">

                        <view class="flex flex-column" style="width: 100%;">
                            <!-- 支付密码 -->
                            <view class="top_left flex flex-y-center">
                                支付密码
                                <image src="/static/app2/exclamation.png" alt="" />
                            </view>

                            <view class="top flex flex_direction_column align_items_center">
                                <input type="password" v-model="pay_password" placeholder="请输入支付密码" class="pay_password">
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
        data(){
            return {
                pay_password:'',
                dataItem:{}
            }
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

            getDataInfo(id){
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

            submit(){
                if(!this.pay_password){
                    this.toa('请输入支付密码')
                }else{
                    uni.showLoading({mask:true})
                    this.to.www(this.api.placeOrder,{
                        project_id:this.dataItem.id,
                        pay_password:this.pay_password
                    }).then(response => {
                        setTimeout(() => {
                            this.toa('购买成功')
                        },500)
                        uni.navigateBack({delta: 1})
                    }).finally(() => {
                        uni.hideLoading()
                    })
                }
            },


        },

        onLoad(){
            this.dataItem = uni.getStorageSync('PROJECT2_CACHE')
        },
        onUnload(){
            uni.removeStorageSync('PROJECT2_CACHE')
        },

    }
</script>

<style lang="scss">
page{
    height: 100%;
	overflow-y: scroll;

    background-image: url('/static/gzhl-bg.jpg');
	background-size: 100% 100%;
	background-repeat: no-repeat;
}

.page-gzhl-detail{
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

.pay_password{
    border: 1px solid #eecd86 !important;
    .uni-input-placeholder{
        color: #eecd86 !important;
    }
}
</style>