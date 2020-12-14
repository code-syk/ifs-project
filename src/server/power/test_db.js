//加载数据库驱动
const mysql = require('mysql')

	//创建数据库连接
	const connection = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'root',
		database:'ifs'
	})
	
	let	sql = 'select * from power_link_tab';
	let	sql_w = null;
	
	let tree = [];
		function get_data(sql,sql_w,callback){
			//连接数据库,并执行sql语句
			connection.query(sql,sql_w,(err,res,fie)=>{
				if(err) throw err;
				callback(res)
			})
		}
		//查询id所对应的所有下级数据,并将其放入到对应节点中
		function get_children(id,res,the_node){
			for(let j = 0;j<res.length;j++){//循环mysql数据
				if (id == res[j].last_id){//判断mysql中的last_id是有对应的上级id
					if(the_node.children == undefined){//如果有上级id,判断上层数据是否有children属性
						the_node.children = [] //如果上层数据没有children属性,则增加
					}
					the_node.children.push(res[j])//将该数据放入到上层数据的children中
					get_children(res[j].id,res,res[j])//递归调用,查找该数据是否有下层(子节点)数据
				}							//参数一:该数据的id,参数二:mysql中的数据,参数三:该数据
			}
		}
		
		//判断数据是否为顶层数据,逻辑last_id 没有对应的 id数据
		function get_parent(pid,res){
			let j = 0;
			for (let i = 0;i<res.length;i++) {
				if (res[i].id == pid){
					j++;
				}
			}
			if (j>0){
				return true
			}else{
				return false
			}
		}
		
	 	get_data(sql,sql_w, (res) =>{
			for(let i = 0;i<res.length;i++){
				if (!get_parent(res[i].last_id,res)){//若数据为顶层数据,将数据放入到tree中
					tree.push(res[i]);
				}
			}
			
			for(let k = 0;k<tree.length;k++){//针对tree进行循环
				get_children(tree[k].id,res,tree[k])//参数一:顶层数据id,参数二:mysql数据,参数三:顶层数据
			}	
			//console.log(tree)
			//console.log(tree[0])
			console.log(tree[0].children[0])
			//console.log(tree[0].children[0].children[0])
		});
	//console.log(arr)
	//关闭数据库连接
	connection.end();