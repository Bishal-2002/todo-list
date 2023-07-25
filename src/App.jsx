import {useState, useEffect} from 'react'
import './App.css'
import TodoInputForm from './components/todoInputForm/TodoInputForm'
import TodoList from './components/todoList/TodoList'

const App = () => {

    const getData = () => {
        const storedTodos = localStorage.getItem('todos')
        if(storedTodos)    return JSON.parse(storedTodos)
        else return []
    }
    const [todos, setTodos] = useState(getData)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (todoText) => {
        const newTodo = {
            id: Date.now(),
            text: todoText,
            isCompleted: false
        }

        setTodos((curTodos) => {
            return [...curTodos, newTodo]
        })
    }

    const updateTodos = (newTodos) => {
        setTodos(newTodos)
    }

    return (
        <div className="todo-container">
            <h1>To-Do List</h1>
            <TodoInputForm addTodo={addTodo}/>
            <TodoList todos={todos} updateTodos={updateTodos}/>
        </div>
    )
}

export default App
