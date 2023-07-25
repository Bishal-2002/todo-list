import {useState, useFetch} from "react"
import {BsFillTrash3Fill} from 'react-icons/bs'

const TodoList = ({todos, updateTodos}) => {

    const handleChange = (id) => {
        const newTodos = [...todos]
        newTodos.forEach((curTodo) => {
            if(curTodo.id === id) {
                curTodo.isCompleted = !curTodo.isCompleted
            }
        })
        updateTodos(newTodos)
    }

    const handleDelete = (id) => {
        const newTodos = todos.filter(curTodo => {
            return curTodo.id !== id
        })
        updateTodos(newTodos)
    }

    return (
        <ul className="todo-list" id="todoList">
            {todos.map(todo => {
                return (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <input 
                            type="checkbox" 
                            checked={todo.isCompleted}
                            onChange={() => handleChange(todo.id)}
                        />
                        <a onClick={() => handleDelete(todo.id)}>
                            <BsFillTrash3Fill />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList