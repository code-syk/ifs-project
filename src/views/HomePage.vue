<template>
	<div class="homePage">
		<theHeader :login_name = 'login_name'></theHeader>
		
		<div class="main">
			<div class="navMenu">
				<navMenu :nav_data = 'aside_tree' id="c_navMenu"></navMenu>
			</div>
			
			<div class="content">
				 <router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import theHeader from '../components/header/header.vue'
	import navMenu from '../components/navmenu/navmenu.vue'
	export default {
	    data() {
	      return {
					aside_tree:[],
					login_name:'王小虎'
	      }
	    },
			methods:{
				get_tree(){
					this.rq.requests.get('/aside').then(res => {
						this.aside_tree = res.data;
						console.log(this.aside_tree)
					})
				}
			},
			components:{
				theHeader,
				navMenu
			},
			created() {
				this.get_tree();
			}
	  };
</script>

<style scoped="scoped">
@import '../assets/css/base.css';
	.homePage{
		height: calc(100vh - 1px) !important;
		width: 100vw;
	}
	.main{
		display: flex;
	}
	.navMenu{
		color: #333;
		width: 18vw !important;
		height: 93vh !important;
		overflow-y: scroll;
	}
	#c_navMenu{
		width: 100% !important;
	}
	.content{
		height: 93vh !important;
	}
</style>
