<template>
	<div class="container">
		<div class="header">
			<div class="user_login">
				<el-dropdown>
				  <i class="el-icon-setting" style="margin-right: 15px"></i>
				  <el-dropdown-menu slot="dropdown">
				    <el-dropdown-item>查看</el-dropdown-item>
				    <el-dropdown-item>新增</el-dropdown-item>
				    <el-dropdown-item>删除</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
				<span>{{login_name}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['login_name'],
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="scoped">
	.header{
		background-color: #B3C0D1;
		color: #333;
		width: 100vw;
		height: 7vh;
		line-height: 7vh;
		position: relative;
	}
	.user_login{
		position: absolute;
		right: 15px;
	}
</style>
