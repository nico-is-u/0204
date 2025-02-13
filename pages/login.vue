<template>
	<view class="login_app flex flex_direction_column align_items_center">
		
		<view class="login_title">
			<image src="/static/1.png" mode="heightFix"></image>
		</view>
		
		<view class="white_box flex" style="margin-top: 24rpx">
			<image src="/static/2.png" mode="heightFix" alt="" />
			<view>强国伟业领导小组</view>
		</view>
		
		<view class="login_input flex flex_direction_column">
			<view class="white_box">
				<input type="text" placeholder="请输入手机号" />
			</view>
			<view class="white_box">
				<input type="password" placeholder="请输入密码" />
			</view>
			<view class="white_box verify_box">
				<input type="text" placeholder="请输入验证码" />
				<view class="code_right">获取验证码</view>
			</view>
			
		</view>

		<u-button 
			size="large" 
			text="立即登录"
			class="red_button"
		>
		</u-button>

		<view class="bottom">
			<text>没有账号？</text>
			<text class="like-a-tag" @click="too('register')">去注册</text>
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
	background-image: url('/static/login-bg.jpg');
	background-repeat: no-repeat;
	background-size: 100% 100%;
}


// 【登录页】
.login_app{
	
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
        margin-top: 30px;
    }
}

</style>