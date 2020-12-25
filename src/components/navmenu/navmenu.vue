<template>
	<el-aside width="200px" style="background-color: rgb(238, 241, 246)" class = "navmenu">
	  <el-menu :default-openeds="['1', '3']" router>
	    <el-submenu index="1" v-for="item in nav_data">
	      <template slot="title"><i class="el-icon-setting"></i>{{item.label}}</template>
	      
				<el-submenu index="3-4"  v-for="c_item in item.children" v-if="c_item.children">
				  <template slot="title" >{{c_item.label}}</template>
				  <el-menu-item index="/power" v-for="c_c_item in c_item.children">{{c_c_item.label}}</el-menu-item>
				</el-submenu>

				<el-menu-item index="/power" v-for="c_item in item.children" v-if="!c_item.children">{{c_item.label}}</el-menu-item>
	
	    </el-submenu>
			
			<!-- <el-submenu index="index" v-for="item in nav_data" @click = 'cliadd()'> -->
			<!-- <el-submenu index="index" v-for="item in nav_data">
				<template slot="title">{{item.label}}</template>
				
				
				<el-submenu v-if="!item.children">
					<el-menu-item index="/power" >{{item.label}}</el-menu-item>
				</el-submenu>
				 -->
				<!-- <navmenu v-if="item.children" :nav_data = 'item.children'></navmenu> -->
				
				
				
			</el-submenu>
			
	  </el-menu>
	</el-aside>
	<!-- <p>nav_data</p> -->
</template>

<script>
	export default{
		name:'navmenu',
		props:['nav_data'],
		data(){
			return{
				index:'0'
			}
		},
		methods:{
			cliadd(){
				this.index++;
			}
		}
	}
</script>

<style>
</style>
