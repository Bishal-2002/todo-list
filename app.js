let todos = []

const renderTodo = () => {
    const todoList = document.querySelector('#todoList')
    todoList.innerHTML = ''

    todos.forEach((todo) => {
        const todoItem = document.createElement('li')
        
        const todoCheckbox = document.createElement('input')
        todoCheckbox.type = 'checkbox'
        todoCheckbox.checked = todo.isCompleted
        todoCheckbox.addEventListener('click', () => toggleComplete(todo.id))

        const todoText = document.createElement('span')
        todoText.textContent = todo.text

        const deleteButton = document.createElement('a')
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
        deleteButton.addEventListener('click', () => deleteTodo(todo.id))
        
        todoItem.appendChild(todoText)
        todoItem.appendChild(todoCheckbox)
        todoItem.appendChild(deleteButton)
        todoList.appendChild(todoItem)
    })
}


const submitButton = document.querySelector('#submitButton')
submitButton.addEventListener('click', (event) => {
    addTodos(event)
})

const addTodos = (event) => {
    event.preventDefault()
    const todoInput = document.querySelector('#todoInput')
    const todoText = todoInput.value.trim()

    if(todoText !== '') {
        const todo = {
            id: Date.now(),
            text: todoText,
            isCompleted: false
        }
        
        todos.push(todo)
        todoInput.value = ''
        renderTodo()
        updateLocalStorage()
    }
}

const toggleComplete = (todoID) => {
    todos = todos.map((todo) => {
        if(todo.id === todoID)  todo.isCompleted = !todo.isCompleted
        return todo
    })
    updateLocalStorage()
}

const deleteTodo = (todoID) => {
    todos = todos.filter((todo) => {
        if(todo.id === todoID)  return false;
        return true;
    })
    renderTodo()
    updateLocalStorage()
}

const storedTodos = localStorage.getItem('todos')
if(storedTodos){
    todos = JSON.parse(storedTodos)
    renderTodo()
}

const updateLocalStorage = () => localStorage.setItem('todos', JSON.stringify(todos))



