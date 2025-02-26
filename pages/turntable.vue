<template>

    <view class="page_truntable">
        <nNavbar title="" :back="true" :isFixed="true"></nNavbar>

        <view class="truntable_title">
            <image style="width: 100%;" src="/static/zp_text1.png" mode="widthFix"></image>
            <image style="width: 100%;" src="/static/zp_text2.png" mode="widthFix" class="bottom"></image>
        </view>

        <view class="zp_box">

            <view class="zp_zz">
                <image style="width: 100%;" src="/static/zp_zz.png" mode="widthFix" @click="start"></image>
            </view>

            <view class="info_box">
                <view class="panel">
                    <view class="box-item" v-for="(item, index) in prizeList" :key="index">
                        <text>{{ item.name}}</text>
                        <text>{{ item.amount}}</text>
                        <!-- <text>元</text>  -->
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
            user_info:{},
            rotateNum: 0,

            isStart: false,
			startTimer: null,

            cishu: 0,
            prizeList: [],
			prizeRange: [],
        }
    },
    methods: {
        getDataList() {
            this.to.www(this.api.signinPrizeList)
            .then(res => {
                this.prizeList = res.data;
                // 中奖范围
                this.prizeList.forEach((item, idx) => {
                    this.prizeRange.push({
                        id: item.id,
                        min: idx * 51.42 + 5,
                        max: (idx + 1) * 51.42 - 5
                    })
                })
            })
        },

        getUserInfo(){
            this.to.www(this.api.user_info)
            .then(res => {
                this.user_info = res.data

                const {huodong = 0, admin_huodong = 0} = this.user_info
                if(huodong) this.cishu = huodong
                if(!huodong && admin_huodong)   this.cishu = admin_huodong

            })
        },
        getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        start() {
            
            if(this.cishu <= 0){
                this.toa('暂无抽奖次数')
            }else{
                console.log(this.cishu)
                if (this.isStart || this.cishu <= 0) return

                this.to.www(this.api.signinTurntable)
                .then(res => {
                    this.cishu--;
                    this.isStart = true;
                    this.startTimer = setInterval(() => {
                        this.rotateNum = this.rotateNum + 10;
                    }, 1)
                    let prize = this.prizeRange.find(item => item.id == res.data.prize_id)
                    setTimeout(() => {
                        this.isStart = false;
                        clearInterval(this.startTimer);
                        let rv = this.getRandomNumber(prize.min, prize.max);
                        if(rv < 0){
                            rv = 360 + rv;
                        }
                        this.rotateNum = rv;
                        uni.showToast({
                            title: res.data.name,
                            icon: 'none'
                        });
                    }, 2000)
                })
                .catch((err) => {
                    this.isStart = false;
                })


            }
        }

    },
    onLoad() {
        this.getUserInfo()
        this.getDataList()
    }
}
</script>


<style lang="scss">
page {
    height: 100%;
    width: 100%;
    background-image: url('/static/zp_BG.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;

}

.page_truntable {
    padding-top: 160rpx;

    .truntable_title {
        padding: 0 20rpx;
        margin-bottom: 80rpx;

        .bottom {
            margin-top: 50rpx;
        }
    }

    // 转盘
    .zp_box {
        height: 100%;
        height: 500px;
        background-image: url('/static/zp.png');
        background-size: 100% auto;
        background-repeat: no-repeat;
        position: relative;

        // 指针
        .zp_zz {
            position: absolute;
            width: 20vw;
            top: 35vw;
            left: 40vw;

            z-index: 9;
        }
    }


}


.info_box {
	position: absolute;

    top: 0;
    left: 0;
}

.panel {
	width: 100vw;
	height: 100vw;
	
    // background: url("../static/zp.png") no-repeat;
	// background-size: 100% 100%;

	position: relative;

	.box-item {
		position: absolute;
		top: 16%;
		left: 42%;
		text-align: center;
		font-size: 36rpx;
		color: $th;
		font-weight: bold;
		height: 34vw;
		transform-origin: center bottom;
		width: 17vw;
		transform: rotate(25.71deg);
	}
	
	.box-item:nth-child(2) {
		transform: rotate(77.13deg);
	}

	.box-item:nth-child(3) {
		transform: rotate(128.55deg);
	}

	.box-item:nth-child(4) {
		transform: rotate(179.97deg);
	}

	.box-item:nth-child(5) {
		transform: rotate(231.39deg);
	}

	.box-item:nth-child(6) {
		transform: rotate(282.81deg);
	}
	.box-item:nth-child(7) {
		transform: rotate(334.23deg);
	}
}

</style>