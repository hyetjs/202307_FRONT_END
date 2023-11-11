import { useState } from "react"

const useTodo = () => {
    const [todos, setTodos] = useState();

    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }

    return {addTodo, todos}
}
export default useTodo

