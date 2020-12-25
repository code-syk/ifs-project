<template>
	<div class="power">
		<div id="the_left">
			<Aside></Aside>
		</div>
		<div id="the_center" @mousedown="get_width($event)"></div>
		<div id="the_right">
			<TableData :table_data = 'tableData'></TableData>
		</div>
	</div>
</template>

<script>
	import Aside from './aside/aside.vue'
	import TableData from './content/table_data.vue'
	export default{
		name:'Power',
		components:{
			Aside,
			TableData
		},
		data(){
			return {
				tableData:[],
				isActive: true
			}
		},
		methods:{
			get_con_data(id){
				if (id == undefined){
					this.rq.requests.get('/power').then(res => {
						this.tableData = res.data;
					})
				}else{
					this.rq.requests.get('/power?pid='+ id).then(res => {
						this.tableData = res.data;
					})
				}
				 
			},
			get_width (e){
				let mouse_x = e.pageX;
				let move_left = document.getElementById("the_left");
				let left_x = move_left.offsetWidth;
				let move_center = document.getElementById("the_center");
				let move_right = document.getElementById("the_right");
				let right_x = move_right.offsetWidth;
				document.onmousemove = function(e){
					let move_x = e.pageX-mouse_x;
					if(move_x<=400 && move_x>-200){
						move_left.style.width = left_x+move_x+'px'
						move_right.style.width = right_x-move_x+'px'
						console.log(move_x)
					}
					
				}
				document.onmouseup = function(){
					document.onmousemove = null;
				}
			}
		},
		created() {
			this.get_con_data();
		}
	}
</script>

<style scoped="scoped">
	@import '../../assets/css/base.css';
	.power{
		height:93vh;
	}
	#the_left{
		background-color: pink;
		float: left;
		height: 100%;
		width: 20vw;
	}
	#the_center{
		background-color: burlywood;
		float: left;
		height: 100%;
		width: 10px;
	}
	#the_right{
		background-color: yellowgreen;
		float: left;
		overflow-y: scroll;
		overflow-x: hidden;
		height: 100%;
		width:  calc(100vw - 38vw - 12px);
		position: relative;
	}
</style>
