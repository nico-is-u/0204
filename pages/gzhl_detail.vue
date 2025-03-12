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

					<view class="table-2 table-2-white" style="margin-top: 24rpx;">
						<view class="thead">
							<view class="td" style="width: 33.33%">持有国债</view>
							<view class="td" style="width: 33.33%">确权国债</view>
							<view class="td text-yellow text-bold" style="width: 33.33%">年化收益</view>
						</view>
						<view class="tbody">
							<view class="td" style="width: 33.33%">{{ user_info.holding_national_debt || '0' }}</view>
							<view class="td" style="width: 33.33%">{{ dataItem.government_bond_amount || '0' }}</view>
							<view class="td" style="width: 33.33%">{{ dataItem.annual_yield ? dataItem.annual_yield + '%' : '' }}</view>
						</view>
						
						<view class="thead">
							<view class="td text-yellow text-bold" style="width: 33.33%">持有时间</view>
							<view class="td text-yellow text-bold" style="width: 33.33%">可提取</view>
							<view class="td" style="width: 33.33%">加速提取时间</view>
						</view>

						<view class="tbody">
							<view class="td" style="width: 33.33%">{{ dataItem.days ? dataItem.days + '天' : ''}}</view>
							<view class="td" style="width: 33.33%">{{ dataItem.shouyi || ''}}</view>
							<view class="td" style="width: 33.33%">{{ dataItem.jiasudays || '--'}}</view>
						</view>
					</view>

					<view class="flex" style="margin-top: 32rpx; padding-left: 32rpx;">
						<text style="font-size: 30rpx; line-height: 2; color: white;">每一分的功勋值可加速每份国债提取时间1天，最高可加速180天</text>
					</view>

					<view class="flex" style="margin-top: 26rpx">
						<text style="font-size: 30rpx; line-height: 2; color: white;">每人可以同时确权多份，数量不限。</text>
					</view>

					<view class="title flex flex-x-center flex-y-end" style="margin-top: 20rpx">
						<text class="text-yellow">中央财政补助</text>
					</view>

					<view class="table-2 table-2-white" style="margin-top: 24rpx;">
						<view class="thead">
							<view class="td" style="width: 33.33%">确权(10)天</view>
							<view class="td" style="width: 33.33%">持有180天</view>
							<view class="td" style="width: 33.33%">持有360天</view>
						</view>
						<view class="tbody">
							<view class="td" style="width: 33.33%; text-align: left; padding-left: 12rpx;">
								赠送一个月收益{{ dataItem.quequan10 || '--'}}元
							</view>
							<view class="td" style="width: 33.33%; text-align: left; padding-left: 12rpx;">
								<view><text>加速可提{{ dataItem.chiyou180 || '--' }}元</text></view>
								<view><text>收益 {{ dataItem.price || '--' }}元</text></view>
								<view><text>退加确权费300元</text></view>
								
							</view>
							<view class="td" style="width: 33.33%; text-align: left; padding-left: 12rpx;">
								<view><text>可提{{ dataItem.chiyou360 || '--' }}元</text></view>
								<view><text>收益 {{ dataItem.price || '--' }}元</text></view>
								<view><text>退加确权费300元</text></view>
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

                                        <text class="icon" style="margin-left: 24rpx; padding-top: 10rpx;" @click="onPlus('gongzi_debt')">
                                            <image src="/static/t-20.png" alt="" mode="widthFix" />
                                        </text>

                                    </view>
                                </view>
    
                                <view class="like-number-input flex" style="margin-top: 20rpx;">
                                    <view class="left-side">可提余额：</view>
                                    <view class="right-side flex flex-y-center">
                                        
                                        <view class="icon" style="padding-top: 6rpx;" @click="onMinus('topup_balance')">
                                            <image src="/static/t-19.png" alt="" mode="widthFix" />
                                        </view>

                                        <input type="number" v-model="topup_balance" disabled>

                                        <text class="icon" style="margin-left: 24rpx; padding-top: 10rpx;" @click="onPlus('topup_balance')">
                                            <image src="/static/t-20.png" alt="" mode="widthFix" />
                                        </text>

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
                user_info: {},
                pay_password:'',
                dataItem:{},

                gongzi_debt:200,
                topup_balance:0,
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

            getUserInfo() {
				this.user_info = uni.getStorageSync('user_info') || {}
				this.to.www(this.api.user_info)
					.then(res => {
						this.user_info = res.data
						uni.setStorageSync('user_info', this.user_info)
					})
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

            /* 加减法 */
            onMinus(val){
                if(val == 'gongzi_debt'){
                    if(this.gongzi_debt){
                        this.gongzi_debt = 0
                    }
                }
                if(val == 'topup_balance'){
                    if(this.topup_balance >= 100){
                        this.topup_balance -= 100
                    }
                }
            },

            onPlus(val){
                if(val == 'gongzi_debt'){
                    if(!this.gongzi_debt){
                        this.gongzi_debt = 200
                    }
                }
                if(val == 'topup_balance'){
                    if(this.topup_balance < 200){
                        this.topup_balance += 100
                    }
                }
            },

            submit(){
                if(!this.pay_password){
                    this.toa('请输入支付密码')
                }else{
                    uni.showLoading({mask:true})
                    this.to.www(this.api.placeOrder2,{
                        project_id:this.dataItem.id,
                        pay_password:this.pay_password,
                        gongzi_debt:this.gongzi_debt,
                        topup_balance:this.topup_balance
                    },'p').then(response => {
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
            this.getUserInfo()
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