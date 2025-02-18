<template>

    <view class="page_invite_friend">
        <nNavbar title="" :back="true" :isFixed="true"></nNavbar>

        <view class="invite_friend">
            <view class="white_box flex flex-column flex-y-center">
                
                <view class="title">
                    邀请好友
                </view>
                <view class="tips">
                    复制下方邀请码或推荐码分享好友
                </view>
                <view class="yellow_box">
                    <view class="code">
                        <image src="/static/invite_friend_code.png"></image>
                    </view>
                    <view class="line flex flex-center">
                        <view class="left_text">
                            邀请码：
                        </view>
                        <input type="text">
                        <button>复制</button>
                    </view>
                    <view class="line flex flex-center">
                        <view class="left_text">
                            邀请链接：
                        </view>
                        <input type="text">
                        <button>复制</button>
                        
                    </view>
                </view>
            </view>

        </view>
            




    </view>

</template>





<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>





<style lang="scss">

page{
    height: 100%;
    width: auto;
    background-image: url('/static/invite_friend_background.jpg');
    background-color: #ea5c60;
    background-size: 100% 100%;
	background-repeat: no-repeat;
    
}

.page_invite_friend{

    .invite_friend{
        
        padding-top: 820rpx;

        .white_box{
            background-image: url("/static/invite_friend_whiteBox.png");
            background-size: 100% 100%;

            padding: 0 60rpx;
            .title{
                margin-top: 50rpx;
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
                    padding: 0 60rpx;
                    .left_text{
                        font-size: 30rpx;
                        width: 30%;                
                    }
                    input{
                        margin-right: 30rpx;
                        background-color: #eddebf;
                        border-radius: 80rpx;
                        font-size: 30rpx;
                        width: 50%;
                    }
                    button{
                        font-size: 30rpx;
                        color: white;
                        padding: 0;
                        border-radius: 80rpx;
                        background-image: linear-gradient(to right, #e93b0c, #a11509); 
                        width: 20%;
                    }
                }
            }
    
        }
    }

}


</style>