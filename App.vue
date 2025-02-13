<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	
	/* uView */
	@import "uview-ui/index.scss";
	
	
	/* 公共标签属性 */
	view{
		box-sizing: border-box;
	}
	
	
	/* flex部分 */
	.flex{
	    display: flex;
	}
	
	.flex-center{
	    justify-content: center;
	    align-items: center;
	}
	.flex-column{
	    flex-direction: column;
	}
	.flex-x-center{
	    justify-content: center;
	}
	.flex-x-end{
	    justify-content: flex-end;
	}
	.flex-y-center{
	    align-items: center !important;
	}
	.flex-y-end{
	    align-items: flex-end;
	}
	.flex-column{
	    flex-direction: column;
	}
	.flex-between{
	    justify-content: space-between;
	}
	
	
	
	// Flex垂直从上到下排列
	.flex_direction_column{
	    flex-direction: column;
	}
	
	// Flex垂直居中对齐
	.align_items_center{
	    align-items: center;
	}
	
	// Flex垂直靠左对齐
	.align_items_flex_start{
	    align-items: flex-start;
	}
	
	// Flex水平居中对齐
	.justify_content_center{
	    justify-content: center;
	}
	// Flex分散对齐
	.justify_content_space_between{
	    justify-content: space-between;
	}
	
	
	/* 公共容器 */
	
	// 白背景，正文
	.section-white{
		border-radius: 10px;
		background-color: #fff;
		&.section-padding{
			padding: 32rpx;
		}
		
		.section-title{
			font-size: 38rpx;
			padding-left: 28rpx;
			position: relative;
			&::before{
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
	.section-red{
		background-color: $bg-red;
		border-radius: 10px;

		padding: 12rpx;

		.section-red-content{
			border: 1px solid $font-gold;
			border-radius: 8px;
			padding: 14rpx 28rpx;

			&.list{
				font-size: 38rpx;
				color: $font-gold;
				gap: 16rpx;
				.left-side{
					letter-spacing: 2px;
				}
			}
		}
	}
	
	// 红背景 小菜单
	.menu-box{
		margin-top: 24rpx;
		
		padding: 48rpx 32rpx;
		
		width: 100%;
		background-image: url('/static/5.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		
		.item{
			color: $font-gold;
			gap: 16rpx;
			font-size: 28rpx;
			image{
				width: 100rpx;
			}
		}
	}
	
	
	/* 工具类 */
	.like-a-tag{
	    text-decoration: none;
	    color: rgb(255, 37, 74);
	}
	
</style>
