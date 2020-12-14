//加载数据库驱动
const mysql = require('mysql')

const db_sql = (sql,data,callback) =>{
	//创建数据库连接
	const connection = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'root',
		database:'ifs'
	})
	//连接数据库
	connection.query(sql,data,(err,res,fie)=>{
		if(err) throw err;
		callback(res);
	})
	//关闭数据库连接
	connection.end();
}

module.exports = db_sql;