<template>

    <view class="page_truntable">
        <nNavbar title="" :back="true" :isFixed="true"></nNavbar>

        <view class="truntable_title">
            <image style="width: 100%;" src="/static/zp_text1.png" mode="widthFix"></image>
            <image style="width: 100%;" src="/static/zp_text2.png" mode="widthFix" class="bottom"></image>
        </view>

        <view class="zp_box">

            <view class="zp_zz">

                <image style="width: 100%;" src="/static/zp_zz.png" mode="widthFix"></image>
            </view>
            
        </view>

        

    </view>




</template>

<script>
    export default{
        data(){
            return{

            }
        },
        methods :{

        }
    }
</script>


<style lang="scss">

page{
    height: 100%;
    width: 100%;
    background-image: url('/static/zp_BG.jpg');
    background-size: 100% 100%;
	background-repeat: no-repeat;
    
}

.page_truntable{
    padding-top: 160rpx;
    
    .truntable_title{
        padding: 0 20rpx;
        margin-bottom: 80rpx;
        .bottom{
            margin-top: 50rpx;
        }
    }

    // 转盘
    .zp_box{
        height: 100%;
        height: 500px;
        background-image: url('/static/zp.png');
        background-size: 100% auto;
        background-repeat: no-repeat;
        position: relative;

        // 指针
        .zp_zz{
            position: absolute;
            width: 20vw;
            top: 35vw;
	        left: 40vw;
        }
    }

    
}



</style>