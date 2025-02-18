<template>

    <view class="page_invite_friend">
        <nNavbar title="" :back="true" :isFixed="true"></nNavbar>


        <view class="invite_friend">
            <view class="white_box">
                <image src="/static/invite_friend_whiteBox.png"></image>
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
    height: 100%;
    width: 100%;
    .invite_friend{
        height: 100%;
        width: 100%;
        padding-top: 860rpx;
        .white_box{
            height: 100%;
            width: 100%;
            image{
                height: 100%;
                // width: 100%;
            }

        }

    }

}


</style>