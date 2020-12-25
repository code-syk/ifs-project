<template>
	<div class="table_content"> 
	 	<el-button class="add" type="primary" @click='add_data' v-if="isActive">新建</el-button>
	  <el-table :data="table_data" border style="width: 100%" v-if="isActive">
	    <el-table-column prop="id" label="序号" width="120"> </el-table-column>
			<el-table-column prop="last_id" label="上级序号" width="120"> </el-table-column>
	    <el-table-column prop="name" label="名称" width="120"> </el-table-column>
	    <el-table-column prop="link_adress" label="连接地址" width="120"> </el-table-column>
	    <el-table-column prop="remark" label="地址" width="200"> </el-table-column>
	  		<el-table-column label="操作" fixed="right" width="150">
	  			<template slot-scope="scope">
	  			   <el-button @click='deleteClick(table_data[scope.$index].id)' type="text" size="small">删除</el-button>
	  			   <el-button @click='updateClick(table_data[scope.$index].id)' type="text" size="small">编辑</el-button>
	  		  </template>
	  	  </el-table-column>
	  </el-table>

		<el-form ref="form" :model="form" label-width="80px" v-if="!isActive">
		  <el-form-item label="序号" >
		    <el-input v-model="form.id"></el-input>
		  </el-form-item>
			<el-form-item label="上级序号" >
			  <el-input v-model="form.last_id"></el-input>
			</el-form-item>
			<el-form-item label="名称">
			  <el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="连接地址">
			  <el-input v-model="form.link_adress"></el-input>
			</el-form-item>
			<el-form-item label="地址">
			  <el-input v-model="form.remark"></el-input>
			</el-form-item>
		  <el-form-item>
		    <el-button type="primary" class="el_bt" @click = 'set_data()'>立即创建</el-button>
				<el-button class="el_bt" @click = 'show_data()'>取消</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default{
		props:['table_data'],
		data(){
			return{
				isActive:true,
				form: {
				  id: '',
					last_id:'',
				  name: '',
				  link_adress: '',
				  remark: ''
				},
				i_u:false
			}
		},
		methods:{
			test_data(){
				console.log('aaa')
			},
			show_data(){
				this.isActive = true;
			},
			async deleteClick(id) {
				await this.rq.requests.delete('/power?id='+ id);
				this.open('删除成功');
				this.$parent.get_con_data();
			},
			selectFrom(id){
				this.rq.requests.get('/power?id='+ id).then(res => {
					this.form = res.data[0];
				});
			},
			updateClick(id){
				this.isActive = false; //显示录入框
				this.selectFrom(id);//显示录入框中内容
				this.i_u = true;
			},
			add_data(){
				this.isActive = false;
				this.i_u = false;
			},
			async set_data(){
				if (this.i_u){
					let data = {
						id:this.form.id,
						name: this.form.name,
						link_adress: this.form.link_adress,
						remark: this.form.remark
					};					
				await	this.rq.requests.put('/power',data);
				this.$parent.get_con_data();
				this.open('修改成功');
				}else{
					let data = {
						id:this.form.id,
						name: this.form.name,
						link_adress: this.form.link_adress,
						remark: this.form.remark
					};					
					await	this.rq.requests.post('/power',data);
					this.$parent.get_con_data();
					this.open('新增成功');
				}
				this.isActive = true;
			},
			open(mess){
			  this.$message(mess);
			}
		}
	}
</script>

<style scoped="scoped">
.add{
	width: 100%;
	position: sticky;
	top: 0;
	z-index: 200;
}
.el-form-item{
	width: 60%;
}
</style>
