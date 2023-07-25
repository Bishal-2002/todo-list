import {useState, useFetch} from "react"

const TodoInputForm = ({addTodo}) => {
    const [todoInput, setTodoInput] = useState("")

    const handleChange = (evt) => {
        const newInput = evt.target.value
        setTodoInput(newInput)
    } 

    const submitHandler = (evt) => {
        evt.preventDefault()
        addTodo(todoInput)
        setTodoInput("")
    }

    return (
        <form className="todo-form">
            <input 
                type="text" id="todoInput" 
                placeholder="Enter a task..." 
                value={todoInput} onChange={handleChange} required
            />
            <button 
                type="submit" id="submitButton"
                onClick={submitHandler}
            >
                Add
            </button>
        </form>
    )
}

export default TodoInputForm