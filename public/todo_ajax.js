window.onload = () => {
	const form = document.getElementById('todoform')
	const submitFormData = () => {
		const item = document.getElementById('item')
		const todo = { message: item.value.trim() }
		const xhr = new XMLHttpRequest()
		xhr.open('POST', '/', true)
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
		xhr.send('message=' + todo.message)
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				location.reload()
			}
		}
  }

	form.addEventListener('submit', (event) => {
		event.preventDefault()
		submitFormData()
  })

	const todo_li = document.getElementsByClassName('todo_li')
	for (let i = 0; i < todo_li.length; i++) {
		const _id = todo_li[i].attributes.todo_id.nodeValue
		todo_li[i].onclick = () => {
			const ajax = new XMLHttpRequest()
			ajax.open('DELETE', '/' + _id, true)
      ajax.send('_id=' + _id)
      location.reload()
		}
	}
}
