<template>
	<view class="register_app flex flex_direction_column align_items_center">
		
		<view class="login_title">
			<image src="/static/3.png" mode="heightFix"></image>
		</view>
		
		<view class="white_box flex" style="margin-top: 24rpx">
			<image src="/static/2.png" mode="heightFix" alt="" />
			<view>强国伟业领导小组</view>
		</view>
		
		<view class="login_input flex flex_direction_column">
			<view class="white_box">
				<input type="text" v-model="parms.phone" placeholder="请输入手机号" />
			</view>
			<view class="white_box">
				<input type="password" v-model="parms.password" placeholder="请输入密码" />
			</view>
			<view class="white_box">
				<input type="password" v-model="parms.re_password" placeholder="请再次输入密码" />
			</view>
			<view class="white_box">
				<input type="text" :disabled="disableInput" v-model="parms.invite_code" placeholder="您推荐人的邀请码" />
			</view>
			<view class="white_box verify_box">
				<input type="text" v-model="parms.captcha" placeholder="请输入验证码" />
				<view class="code_right">
					<image :src="c_code" @click="re_code" mode="widthFix" style="width: 120px;"></image>
				</view>
			</view>
			
		</view>

		<u-button 
			size="large" 
			text="立即注册"
			class="red_button"
			@click="submit"
			:loading="isDone"
			:loadingText="regStatus"
		>
		</u-button>

		<view class="bottom">
			<text>已有账号？</text>
			<text class="like-a-tag" @click="too('login')">去登录</text>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				isDone: false,
				regStatus: '正在注册...',
				disableInput: false,
				c_code: '',
				parms: {
					phone: '',
					password: '',
					re_password: '',
					invite_code: '',
					captcha: '',
					uniqid: '',
					qq: '',
				}
			}
		},
		methods: {
			submit(){
				let f = this;
				if (uni.$u.test.isEmpty(f.parms.password)) return f.toa('请输入账号密码');
				if (f.parms.password != f.parms.re_password) return f.toa('两次密码不一致');
				if (uni.$u.test.isEmpty(f.parms.invite_code)) return f.toa('请输入邀请码');
				if (uni.$u.test.isEmpty(f.parms.captcha)) return f.toa('请输入验证码');
				f.isDone = true;
				f.to.www(f.api.user_register, f.parms, 'p')
					.then(res => {
						f.regStatus = '注册完成';
						setTimeout(() => {
							f.regStatus = '正在登录...';
							uni.setStorage({
								data: res.data.token,
								key: "TK",
								success() {
									setTimeout(() => {
										f.regStatus = '登录成功';
										setTimeout(() => {
											f.isDone = false;
											f.too('/', 'lau')
										}, 300)
									}, 1000)
								}
							})
						}, 600)
					})
					.catch((err) => {
						f.isDone = false;
						f.re_code()
						if(![10001, 10003].includes(err)){
							f.$refs.uNotify.error('太火爆了 请稍后再试');
						}
					})
			},
			re_code() {
				this.c_code = '';
				this.to.www(this.api.reg_check_code)
					.then(res => {
						this.parms.uniqid = res.data.uniqid;
						this.c_code = res.data.image;
					})
			},
		},
		onLoad(option) {
			if (option.invite_code) {
				this.disableInput = true;
				this.parms.invite_code = option.invite_code;
			}
			this.re_code()
		},
	}
</script>

<style lang="scss">
	
page{
	height: 100%;
	background-image: url('/static/t-7.jpg');
	background-repeat: no-repeat;
	background-size: 100% 100%;
}


// 【注册页】
.register_app{
	
	padding: 300rpx 32rpx 0;
	
    // 顶部标题
    .login_title{
		image{
			height: 60rpx;
		}
    }
	
    // 中间位置白色圆角框
    .white_box{
        background-color: rgb(254, 254, 254);
        border-radius: 10px;
        box-shadow: 6px 6px 6px 0 rgb(238, 236, 224);

        padding: 12rpx 30rpx;
        // 左侧图标
        image{
            height: 50rpx;
        }
        // 文字
        view{
            padding-left: 20rpx;
			font-size: 34rpx;
			font-weight: 500;
        }
    }
    // 输入框
    .login_input{
		
		width: 100%;
		margin-top: 24rpx;
		color: rgb(146, 146, 146);
		
        // 白色框
        .white_box{
            padding: 20px 30px;
			margin-top: 36rpx;
			box-shadow: none;
			
			input{
				width: 100%;
			}
			
			&.verify_box{
				
				position: relative;
				height: 100%;
				
				input{
					width: 70%;
				}
				
				// 获取验证码
				.code_right{
					width: 30%;
					height: 100%;
					
					position: absolute;
					top: 0;
					right: 0;
										
					display: flex;
					align-items: center;
					padding-right: 11px;
				}
			}
        }
		
    }
    
	// 红色按钮
    .red_button{
        margin-top: 40rpx;
        background-color: rgb(238, 0, 0);
        color: rgb(231, 255, 255);
		border-radius: 24rpx;
    }
	
    // 底部
    .bottom{
        margin-top: 15px;
    }
}

</style>