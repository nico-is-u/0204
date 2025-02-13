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
	
	
	/*每个页面公共css */
	.flex{
	    display: flex;
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
	
	
	/* 工具类 */
	.like-a-tag{
	    text-decoration: none;
	    color: rgb(255, 37, 74);
	}
	
</style>
