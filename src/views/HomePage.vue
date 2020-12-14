<template>
	<el-container style="height: 500px; border: 1px solid #eee">
	  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
	    <el-menu :default-openeds="['1', '3']" router>
	      <el-submenu index="1">
	        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
	        <el-menu-item-group>
	          <el-menu-item index="/power">权限基础数据</el-menu-item>
	        </el-menu-item-group>
	          <el-menu-item index="3-3">选项2</el-menu-item>
	        </el-menu-item-group>
	        <el-submenu index="3-4">
	          <template slot="title">选项4</template>
	          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
	        </el-submenu>
	      </el-submenu>
	    </el-menu>
	  </el-aside>
	  
	  <el-container>
	    <el-header style="text-align: right; font-size: 12px">
	      <el-dropdown>
	        <i class="el-icon-setting" style="margin-right: 15px"></i>
	        <el-dropdown-menu slot="dropdown">
	          <el-dropdown-item>查看</el-dropdown-item>
	          <el-dropdown-item>新增</el-dropdown-item>
	          <el-dropdown-item>删除</el-dropdown-item>
	        </el-dropdown-menu>
	      </el-dropdown>
	      <span>王小虎</span>
	    </el-header>
	    
	    <el-main>
	      <router-view></router-view>
	    </el-main>
	  </el-container>
	</el-container>
</template>

<script>
	export default {
	    data() {
	      return {
	      }
	    }
	  };
</script>

<style scoped="scoped">
@import '../assets/css/base.css';
	.el-container{
		height: calc(100vh - 1px) !important;
		width: 100vw;
	}
	.el-container .el-container{
		width: 82vw;
		background-color: palegoldenrod;
	}
	.el-header {
	   background-color: #B3C0D1;
	   color: #333;
	   line-height: 60px;
	  }
	
	.el-main{
		height: 80vh;
		padding: 0px;
	}  
	
	.el-aside {
	  color: #333;
		width: 18vw !important;
		height: calc(100vh - 1px) !important;
	}
</style>
