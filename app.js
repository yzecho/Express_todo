const express = require('express')
const app = express()
const todoApp = require('./routers/router')

//模版引擎
app.set('view engine', 'ejs')
//静态资源
app.use(express.static('./public'))

todoApp(app)
//监听端口
app.listen(3000, () => {
	console.log('server started on port 3000')
})
