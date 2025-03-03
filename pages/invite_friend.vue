<template>

    <view class="page_invite_friend">
        <nNavbar title="" :back="true" :isFixed="true"></nNavbar>

        <view class="white_box flex flex-column flex-y-center">
            
            <view class="title">
                分享好友
            </view>
            <view class="tips">
                复制下方邀请码或推荐码分享好友
            </view>
            <view class="yellow_box">
                <view class="code">
                    
                    <image v-if="qrCodeBase64" :src="qrCodeBase64" mode="widthFix"></image>
                </view>
                <view class="line flex flex-center">
                    <view class="left_text">
                        邀请码：
                    </view>
                    <view class="center">
                        {{ invite_code }}
                    </view>
                    <view class="right">

                        <button @click="copyData(invite_code)">复制</button>
                    </view>
                </view>
                <view class="line flex flex-center">
                    <view class="left_text">
                        邀请链接：
                    </view>
                    <view class="center">
                        {{ invite_url }}
                    </view>
                    <view class="right">
                        <button @click="copyData(invite_url)">复制</button>

                    </view>
                    
                </view>
            </view>
        </view>



        <view id="kefu" @click="kefu"></view>
    </view>

</template>





<script>
    import QRCode from 'qrcode'
	export default {
		data() {
			return {
				invite_code: {},
                invite_url: {},
                qrCodeBase64: ''
			}
		},
        onLoad(){
            this.to.www(this.api.invite)
            .then(res => {
                this.invite_code = res.data.invite_code
                this.invite_url = res.data.url + '/register?invite_code=' + this.invite_code
                this.createQRCode(res.data.download_url)
            })

        },
		methods: {
			async createQRCode(text) {
                try {
                    // 生成二维码
                    this.qrCodeBase64 = await QRCode.toDataURL(text);
                    console.log(this.qrCodeBase64)
                } catch (error) {
                    console.error('生成二维码失败:', error);
                }
            },
            copyData(val) {
                uni.setClipboardData({
                    data: val
                })
                this.toa('复制成功')
            },
		}
	}
</script>





<style lang="scss">

page{
    height: 100%;
    width: auto;
    background-image: url('/static/invite_friend_background.jpg');
    background-color: #ea5c60;
    background-size: 100% auto;
	background-repeat: no-repeat;
    
}

.page_invite_friend{

    padding-top: 660rpx;
    
    .white_box{
        background-image: url("/static/invite_friend_whiteBox.png");
        background-size: 100% 100%;
        
        padding: 0 60rpx 30rpx 60rpx;
        .title{
            margin-top: 40rpx;
            font-size: 36rpx;
            color: #7f4c2d;
        }
        .tips{
            margin-top: 30rpx;
            font-size: 30rpx;
            color: #7f4c2d;
        }
        .yellow_box{
            width: 100%;
            margin: 30rpx 0;
            padding-bottom: 30rpx;
            background-image: linear-gradient(to bottom, #fbf5ec, #fbf0d8); 

            // 二维码
            .code{
                padding: 50rpx 100rpx;
                width: 100%;
                image{
                    width: 100%;
                    
                }
            }
                
            .line{
                width: 100%;
                padding: 16rpx 30rpx;
                .left_text{
                    font-size: 30rpx;
                    width: 30%;                
                }
                .center{
                    margin-right: 30rpx;
                    padding: 4rpx 0 4rpx 30rpx;
                    background-color: #eddebf;
                    border-radius: 80rpx;
                    font-size: 30rpx;
                    width: 40%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .right{
                    width: 30%;
                    button{
                        font-size: 30rpx;
                        color: white;
                        padding: 10rpx 30rpx;
                        border-radius: 80rpx;
                        background-image: linear-gradient(to right, #e93b0c, #a11509); 
                        line-height: 1;
                    }
                }
            }
        }

    }

}


</style>