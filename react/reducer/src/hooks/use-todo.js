import {useState} from 'react'

const useTodo =() => {
    const [todos, setTodos] = useState([])
    const onAddTodo = () => {

    }

    return {todos, setTodos, onAddTodo}

}
export default useTodo