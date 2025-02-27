<template>
    <view class="page-gzlc-detail">
        <!-- 顶栏 -->
        <image src="/static/13.jpg" class="navbar-img" mode="widthFix"></image>
        <view class="navbar-img-back" @click="clickLeft">
            <!-- 显示返回箭头 -->
            <uni-icons type="left" size="36"></uni-icons>
        </view>

        <view class="section-3 section-bg-1">
            <!-- 文章列表 -->
            <view class="article-list flex flex-column">
                <view class="article-item">
                    <image :src="dataItem.cover_img"></image>
                    <view class="article-content">
                        <view class="article-title">{{ dataItem.name }}</view>
                        <view class="article-info">
                            <view class="article-price-info flex flex-y-end">

                                <view class="flex flex-column" style="width: 100%;">
                                    <!-- 支付密码 -->
                                    <view class="top_left flex flex-y-center">
                                        支付密码
                                        <image src="/static/app2/exclamation.png" alt="" />
                                    </view>
    
                                    <view class="top flex flex_direction_column align_items_center">
                                        <input type="password" v-model="pay_password" placeholder="请输入支付密码">
                                    </view>

                                </view>

                            </view>
                        </view>
                    </view>
                </view>
            </view>

            <view style="padding: 0 32rpx;">
                <u-button color="#ad1c0b" size="large" @click="submit">确定</u-button>
            </view>
        </view>

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

        submit(){
            if(!this.password){
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
        this.dataItem = uni.getStorageSync('PROJECT_CACHE')
    },
    onUnload(){
        uni.removeStorageSync('PROJECT_CACHE')
    }
}
</script>


<style lang="scss">
page {
    height: 100%;
    background-color: #f2f2f2;
}

.page-gzlc-detail{
	padding-top: 180rpx;
}

.article-list{
	margin-top: 24rpx;
	padding: 0 32rpx 40rpx;
}

.article-content{
	padding: 32rpx 20rpx;
	.article-title{
		font-size: 42rpx;
		color: #333;
	}

	.article-price{
		font-size: 52rpx;
		color: $navbar-red;
	}

	.article-price-info{
		margin-top: 32rpx;
		justify-content: flex-end;

		.left-side{
			padding-bottom: 8rpx;
		}

		.gray-text-info{
			padding-top: 12rpx;
		}

		.article-price{
			padding-right: 32rpx;
		}

	}

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

</style>