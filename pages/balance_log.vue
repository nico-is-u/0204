<template>
    <view class="log_page">

        <z-paging 
            class="paging"
            ref="paging"
            :fixed="false"
            style="height: 100%"
            v-model="dataList"
            @query="getDataList"
            system-loading-text="数据请求中"
            :auto-show-system-loading="true">

            <view class="list-4">
                <view class="flex flex-column" v-for="(item,index) in dataList" :key="'list-item-' + index">
                    <view class="card">
                        <view class="row flex flex-between">
                            <text>{{item.type_text}}</text>
                            <text class="amount">{{ item.change_balance }}</text>
                        </view>
                        <view class="row flex flex-between">
                            <text>{{item.created_at}}</text>
                            <!-- <view class="status status-2">已提现</view> -->
                        </view>
                    </view>
                </view>
            </view>

        </z-paging>
    </view>
</template>

<script>
export default {
    data(){
        return {
            dataList:[]
        }
    },
    computed:{
        getStatusStr(status) {
			return (status) => {
				switch (status){
					case 1:
						return '待支付';
					case 2:
						return '支付完成';
					case 3:
						return '失败';
					case 4:
						return '待发货';
					case 5:
						return '已发货';
					default:
						break;
				}
			}
		}
    },
    methods:{
        getDataList(pageNo, pageSize){
            this.to.www(this.api.balance_log,
                {page:pageNo},'p'
            ).then(response => {
                const datas = response.data.data || []
                this.$refs.paging.complete(datas)
            }).catch(e => {
                this.$refs.paging.complete(false)
            })
        }
    }
}
</script>

<style lang="scss">
page{
    height: 100%;
    background-color: #f2f2f2;

    overflow: hidden;

    padding: 50rpx 24rpx;
}

.log_page{
    height: 100%;
}


.paging{
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 24rpx;
}
</style>