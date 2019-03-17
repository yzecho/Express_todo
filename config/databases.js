const mongoose = require('mongoose')

const conn = 'mongodb://localhost/todolist'
mongoose.connect(conn, { useNewUrlParser: true })

mongoose.connection.on('connected', () => {
	console.log('mongo connect success')
})

let todoSchema = new mongoose.Schema({
	message: String
})

//关联模型
let TodoModel = mongoose.model('todolist', todoSchema)

module.exports = TodoModel
