module.exports = (app) => {
	const db_sql = require('../db.js');
	
	app.get('/power',(req,res)=>{
		let data = req.query;
		let	sql
		let	sql_w;
		if (Object.keys(data).length == 0){
			sql = 'select * from power_link_tab';
			sql_w = null;
		}else if(data.id != undefined){
			sql = 'select * from power_link_tab where id = ?'
			sql_w = [data.id];
		}else{
			sql = 'select * from power_link_tab where last_id = ?'
			sql_w = [data.pid];
		}
		db_sql(sql,sql_w,(reson) =>{
			res.send(reson)
		})
	})
	
	app.get('/aside',(req,res) => {
		let	sql = 'select id as id,last_id as last_id,name label from power_link_tab';
		let	sql_w = null;
		db_sql(sql,sql_w,(reson) =>{
			let tree = [];
			//查询id所对应的所有下级数据,并将其放入到对应节点中
			function get_children(id,reson,the_node){
				for(let j = 0;j<reson.length;j++){//循环mysql数据
					if (id == reson[j].last_id){//判断mysql中的last_id是有对应的上级id
						if(the_node.children == undefined){//如果有上级id,判断上层数据是否有children属性
							the_node.children = [] //如果上层数据没有children属性,则增加
						}
						the_node.children.push(reson[j])//将该数据放入到上层数据的children中
						get_children(reson[j].id,reson,reson[j])//递归调用,查找该数据是否有下层(子节点)数据
					}							//参数一:该数据的id,参数二:mysql中的数据,参数三:该数据
				}
			}
				
				//判断数据是否为顶层数据,逻辑last_id 没有对应的 id数据
				function get_parent(pid,reson){
					let j = 0;
					for (let i = 0;i<reson.length;i++) {
						if (reson[i].id == pid){
							j++;
						}
					}
					if (j>0){
						return true
					}else{
						return false
					}
				}
				
				for(let i = 0;i<reson.length;i++){
					if (!get_parent(reson[i].last_id,reson)){//若数据为顶层数据,将数据放入到tree中
						tree.push(reson[i]);
					}
				}
				
				for(let k = 0;k<tree.length;k++){//针对tree进行循环
					get_children(tree[k].id,reson,tree[k])//参数一:顶层数据id,参数二:mysql数据,参数三:顶层数据
				}	
			res.send(tree)
		})
	})
	
	app.post('/power',(req,res)=>{
		let data = req.body;
		let sql = 'insert into power_link_tab set id = ?,name = ?,link_adress = ?,remark = ?';
		let sql_w = [data.id,data.name,data.link_adress,data.remark];
		db_sql(sql,sql_w,(reson) =>{
			res.send('123321')
		})
	})
	
	app.delete('/power',(req,res)=>{
		let data = req.query;
		let sql = 'delete from power_link_tab where id = ?';
		let sql_w = [data.id];
		db_sql(sql,sql_w,(reson) =>{
		 	res.send('删除成功')
		})
	})
	
	app.put('/power',(req,res)=>{
		let data = req.body;
		let sql = 'update power_link_tab set name = ?,link_adress = ?,remark = ? where id = ?';
		let sql_w = [data.name,data.link_adress,data.remark,data.id];
		db_sql(sql,sql_w,(reson) =>{
			res.send('123321')
		})
	})
}