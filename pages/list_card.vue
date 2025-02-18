<template>
    <view class="list_card_app flex flex_direction_column align_items_center">
        <!-- 银行卡列表 -->
        <view class="list">


            <!-- 银行卡 -->
            <!-- <view class="card flex flex_direction_column">
                <image src="/static/zhaoshangyinhang_2.png" mode="widthFix" class="background_img"></image>
                <view class="content">
                    <view class="bank flex flex-y-center">
                        <view class="icon">
                            <image src="/static/zhaoshangyinhang_1.png" mode="widthFix" alt=""></image>
                        </view>
                        <view class="text">
                            招商银行
                        </view>
                    </view>
                    <view class="number">
                        6214 **** **** 4463
                    </view>
                </view>
            </view>        -->  



            <!-- 银行卡 -->
            <view class="card flex flex_direction_column" v-for="(item,index) in list" :key="index">
                
                <!-- 背景 -->
                <image src="/static/nongyeyinhang_2.png" mode="widthFix" class="background_img"></image>
                <!-- 银行卡内容 -->
                <view class="content">
                    <!-- 银行名称和图标 -->
                    <view class="bank flex flex-y-center">
                        <view class="icon">
                            <image src="/static/nongyeyinhang_1.png" mode="widthFix" alt=""></image>
                        </view>
                        <view class="text">
                            {{item.bank_name}}
                        </view>
                    </view>
                    <!-- 卡号 -->
                    <view class="number">
                         {{item.bank_sn}}
                    </view>
                </view>

            </view>          
            

        </view>



        <!-- 添加银行卡按钮 -->
        <view class="button" @click="too('bank_add')">
            ＋添加银行卡
        </view>



    </view>






</template>

<script>
	export default {
		data() {
			return {
				list: [],
			}
		},
		methods: {
			getBankList() {
				uni.showLoading({
					mask: true
				})
				this.to.www(this.api.getBankCardList)
					.then(res => {
						this.list = res.data;
						uni.hideLoading()
					})
			},
		},
		onShow(){
			this.getBankList()
		},
	}
</script>

<style lang="scss">
    .list_card_app{
        width: 100%;
        padding: 0 20rpx;
        .list{
            width: 100%;
            // 银行卡
            .card{
                width: 100%;
                padding-top: 50rpx;
                position: relative;
                // 背景图片
                .background_img{
                    width: 100%;
                }
                // 银行卡
                .content{
                    width: 100%;
                    position: absolute;
                    padding-left: 36rpx;
                    padding-top: 30rpx;
                    // 内容
                    .bank{
                        width: 100%;
                        // 图标
                        .icon{
                            image{
                                width: 100rpx;
                            }
                        }
                        // 银行名称
                        .text{
                            color: white;
                            font-size: 46rpx;
                            padding-left: 40rpx;
                            margin-top: -2%;
                        }
                    }
                    // 卡号
                    .number{
                        color: white;
                        font-size: 50rpx;
                        padding-top: 26rpx;
                    }
                }
            }
        }

        // 添加银行卡按钮
        .button{
            margin-top: 120rpx;
            padding: 20rpx 200rpx;
            border-radius: 60rpx;
            border: 1px solid #a62328;
            font-size: 36rpx;
            color: #a62328;
        }

    }





</style>