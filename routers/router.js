const TodoModel = require('../config/databases')
const bodyParser = require('body-parser')
const urlencodeParser = bodyParser.urlencoded({ extended: false })

module.exports = (app) => {
	//显示列表(全部数据)
	app.get('/', (req, res) => {
		TodoModel.find({}, (err, data) => {
			if (err) throw err
			res.render('todolist', { todos: data })
		})
	})

	//添加数据(post请求)
	app.post('/', urlencodeParser, (req, res) => {
		const todomodel = new TodoModel()
		todomodel.message = req.body.message
		todomodel.save((err, data) => {
			if (err) throw err
			res.json(data)
		})
	})

	//删除数据
	app.delete('/:_id', (req, res) => {
		TodoModel.findByIdAndRemove({ _id: req.params._id }, (err) => {
			if (err) throw err
		})
	})
}
