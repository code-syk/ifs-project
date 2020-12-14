const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db_sql = require('./db.js');
//解决跨域问题
app.use(require('cors')());
//挂载内置界面
app.use(express.static('../../src'));
//挂载参数处理中间件(post)
app.use(bodyParser());
app.use(bodyParser.json())

require('./power/index.js')(app);

app.listen(8000,'localhost',()=>{
	console.log('http://localhost:8000')
})