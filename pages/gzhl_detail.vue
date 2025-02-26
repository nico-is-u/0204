<template>
	<view class="page-gzhl">
        <!-- 顶栏 -->
		<image src="/static/17.jpg" class="navbar-img" mode="widthFix"></image>
        <view class="navbar-img-back" @click="clickLeft">
            <!-- 显示返回箭头 -->
            <uni-icons type="left" size="36"></uni-icons>
        </view>


    </view>
</template>

<script>
	export default {
        onLoad(options){
            const {id = 0} = options
            this.getDataInfo(id)
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
        }
    }
</script>