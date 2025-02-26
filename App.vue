<script>
export default {
	onLaunch: function () {
		// console.log('App Launch')
	},
	onShow: function () {
		// console.log('App Show')
	},
	onHide: function () {
		// console.log('App Hide')
	}
}
</script>

<style lang="scss">
	
/* uView */
@import "uview-ui/index.scss";


/* 公共标签属性 */
view {
	box-sizing: border-box;
}


/* flex部分 */
.flex {
	display: flex;
}

.flex-center {
	justify-content: center;
	align-items: center;
}

.flex-column {
	flex-direction: column;
}

.flex-x-center {
	justify-content: center;
}

.flex-x-end {
	justify-content: flex-end;
}

.flex-y-center {
	align-items: center !important;
}

.flex-y-end {
	align-items: flex-end;
}

.flex-column {
	flex-direction: column;
}

.flex-between {
	justify-content: space-between;
}



// Flex垂直从上到下排列
.flex_direction_column {
	flex-direction: column;
}

// Flex垂直居中对齐
.align_items_center {
	align-items: center;
}

// Flex垂直靠左对齐
.align_items_flex_start {
	align-items: flex-start;
}

// Flex水平居中对齐
.justify_content_center {
	justify-content: center;
}

// Flex分散对齐
.justify_content_space_between {
	justify-content: space-between;
}


/* 公共容器 */

// 白背景，正文
.section-white {
	border-radius: 10px;
	background-color: #fff;

	&.section-padding {
		padding: 32rpx;
	}

	.section-title {
		font-size: 38rpx;
		padding-left: 28rpx;
		position: relative;

		&::before {
			width: 3px;
			height: 80%;

			content: '';

			position: absolute;
			left: 0;
			top: 10%;

			background-color: #a62424;
			border-radius: .5px;
		}
	}
}

// 红背景 正文
.section-red {
	background-color: $bg-red;
	border-radius: 10px;

	padding: 12rpx;

	.section-red-content {
		height: 100%;
		border: 1px solid $font-gold;
		border-radius: 8px;
		padding: 14rpx 28rpx;

		&.list {
			font-size: 38rpx;
			color: $font-gold;
			gap: 16rpx;

			.left-side {
				letter-spacing: 2px;
			}
		}
	}
}

.section-3{
	.section-title{
		display: flex;
		align-items: flex-end;

		color: #e8cf8f;
		font-size: 36rpx;

		padding: 48rpx 0 24rpx;

		image{
			margin-right: 20rpx;
		}
	}
}

.table{
	background-color: #e8cf8f;
	border-radius: 16rpx;
	font-size: 30rpx;

	padding-top: 24rpx;
	color: $navbar-red;

	.thead{
		padding: 0 24rpx 12rpx;
		font-weight: bold;
		border-bottom: 4rpx solid $navbar-red;
	}

	.tbody{
		.row{
			padding: 12rpx 24rpx;
			border-bottom: 4rpx solid $navbar-red;
			&:last-child{
				border-bottom: none;
			}
		}
	}
}

// 红背景 小菜单
.menu-box {
	margin-top: 24rpx;

	padding: 48rpx 32rpx;

	width: 100%;
	background-image: url('/static/5.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;

	.item {
		color: $font-gold;
		gap: 16rpx;
		font-size: 28rpx;

		image {
			width: 100rpx;
		}
	}
}

// 红背景 行容器
.row3{
	display: flex;
	justify-content: space-between;
	align-items: center;

	color: #e8cf8f;
	gap: 24rpx;

	margin-bottom: 24rpx;

	.left-side{
		.text1{
			font-size: 46rpx;
			font-weight: 600;
		}
	}

	.right-side{
		width: 30%;
		flex-shrink: 0;

		padding-top: 24rpx;
	}

	button{
		color: #ad1c0b;
		background-color: #ffe26a;
		line-height: 1.5;
	}
}

// 文章列表
.article-list {

	gap: 32rpx;

	.article-item {
		border-radius: 12px;
		box-shadow: 0 0 6rpx rgba(0, 0, 0, .2);
		overflow: hidden;

		image {
			width: 100%;
			height: 380rpx;
		}

		.article-content {
			// height: 240rpx;
			background-color: white;

		}

	}
}

// 新闻列表
.news-list{
	.news-item{
		
		margin-top: 36rpx;
		
		.left-side{
			width: 46%;
			height: 200rpx;
			flex-shrink: 0;
			
			padding: 6rpx 0;
		}
		
		.right-side{
			
			width: 52%;
			padding-left: 36rpx;
			
			
			.title{
				font-size: 42rpx;
			}
			
			.desc{
				height: 96rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				color: #767676;
			}
			
			.date{
				
				color: #767676;
			}
		}
		
	}
}




// 绑定收款方式
.page_type_1 {
	font-size: 28rpx;
	// 中上方文字提示（实名认证、绑定支付宝、绑定银行卡页）
	.center_tips {
		align-self: self-start;
		padding-top: 60rpx;

		// 上方文字
		.top {
			padding-bottom: 10px;
			font-size: 36rpx;

			// 文字左侧图标（绑定支付宝、绑定银行卡页）
			img {
				width: 32rpx;
				height: 32rpx;
				padding-right: 8rpx;
			}
		}

		// 下方文字
		.bottom {
			font-size: 24rpx;
			color: rgb(173, 27, 12);
			margin-bottom: 40rpx;
			padding-left: 42rpx;
		}

		// 下方文字Padding（实名认证页）
		.identity_bottom {
			padding-left: 0;
		}
	}

	// 中间位置灰色圆角框（实名认证、绑定支付宝、绑定银行卡页）
    .gray_box{
        background-color: rgb(245, 246, 250);
        border-radius: 10rpx;
        margin-top: 40rpx;

		padding: 20rpx;


        // 每行容器（绑定支付宝、绑定银行卡页）
        .line{
            width: 92%;
            padding: 28rpx 0;
            font-size: 24rpx;
            // 每行宽度（绑定支付宝页）
            .left{
                width: 25%;
            }
            .right{
                width: 75%;
                padding-left: 30rpx;
            }
            .left_card{
                width: 16%;
            }
            .right_card{
                width: 84%;
                padding-left: 30rpx;
            }
        }
        // 虚线（绑定支付宝、绑定银行卡页）
        .center{
            border-top: 2rpx dashed rgb(191, 191, 193);
            border-bottom: 2rpx dashed rgb(191, 191, 193);
        }
        // 虚线（绑定银行卡页）
        .bottom{
            border-top: 2rpx dashed rgb(191, 191, 193);
        }
        // 上传身份证左侧文字（实名认证页）
        .upload_idcard_tips{
            width: 40%;
            align-self: self-start;
            padding-top: 12%;
            

			flex-shrink: 0;

            // 上方文字
            .top{
                padding-bottom: 10rpx;
                font-size: 36rpx;
            }
            // 下方文字
            .identity_bottom{
                font-size: 24rpx;
                color: rgb(173, 27, 12);
                margin-bottom: 40rpx;
            }
        }
        // 上传身份证右侧图片（实名认证页）
        image{
            width: 60%;
			padding: 20rpx;
        }

    }


}

// 公共伪进度条
.top_progress {
	width: 100%;
	background-color: rgb(255, 255, 255);
	border-radius: 14rpx;
	box-shadow: 0 6rpx 6rpx 0 rgb(246, 246, 246);

	/* 进度条图片 */
	.progress_img {
		width: 100%;
		padding: 32rpx 64rpx 0;

		image {
			width: 100%;
		}
	}

	// 下方文字
	.bottom {
		width: 100%;

		padding: 10rpx 36rpx 24rpx;

		// 文字容器
		view {
			width: 33.333%;
			
			color: rgb(153, 153, 153);
		}

		// 左侧文字
		.left {
			text-align: left;
		}

		// 中间文字
		.center {
			text-align: center;
		}

		// 右侧文字
		.right {
			text-align: right;
		}

		// 选中
		.selected{
			color: black;
		}

	}
}


/* 工具类 */
.like-a-tag {
	text-decoration: none;
	color: rgb(255, 37, 74);
}

.padding-box-1{
	padding: 0 32rpx;
}

.navbar-img {
	width: 100%;

	position: fixed;
	top: 0;
	left: 0;
	z-index: 9;

	border-top: 40rpx solid $navbar-red;
}

.navbar-img-back{
	position: fixed;
	top: 48rpx;
	z-index: 10;
	
	width: 72rpx;
	.uni-icons{
		color: #e8cf8f !important;
	}
}

.ser_list{
	background-color: white;
	border-radius: 20rpx;
	padding: 24rpx 38rpx;

	.item{
		font-size: 38rpx;
		
		display: flex;
		align-items: center;

		color: #222;
		border-bottom: 1px solid #f4f4f4;

		position: relative;

		&:last-child{
			border-bottom:none;
		}

		&.right-arrow{
			&::after{
				content: '>';

				height: 100%;

				position: absolute;
				top: 0;
				right: 0;
				
				color: #999;
				transform: translateY(-5rpx);

				display: flex;
				align-items: center;
			}
		}

		image{
			width: 40rpx;
		}

		.item_center{
			flex: 1;
			padding: 32rpx 32rpx;
		}
		
	}
}

.status-box{
	padding: 20vh 0;
	.text-row{
		color: #ad1c0b;
		padding-top: 32rpx;
		font-size: 46rpx;
	}
}

.button-1{
	color: $navbar-red;
	background-color: #e8cf8f;
	font-size: 38rpx;
	padding: 22rpx 28rpx;
	border-radius: 20rpx;
	box-shadow: 5% 5% 5% rgba(0, 0, 0, 0.5);

	will-change: transform;
	transition: transform .1s;

	&:active{
		transform: scale(.97);
	}
}

// 文字相关
.text-bold{
	font-weight: bold;
}

// 红色按钮
.red_button_common{
	background-color: $navbar-red !important;
	color: rgb(231, 255, 255) !important;
	border-radius: 24rpx;
	padding: 48rpx 0 !important;
	.u-button__text{
		font-size: 32rpx !important;
	}
}

</style>
