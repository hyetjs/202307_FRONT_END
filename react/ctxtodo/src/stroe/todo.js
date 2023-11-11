import { createContext, useContext, useState } from "react";

//1 생성
export const TodoContext = createContext()
export const useTodo = () => useContext(TodoContext)
// useContext(TodoContext)를 사용할 때마다 매번 import하면 불편하니까...

//2 프로바이더
const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([
        {
          id: 1,
          title: "example-1",
          content: "example-1",
          state: true,
        },
        {
          id: 2,
          title: "example-2",
          content: "example-2",
          state: false
        }
      ])
    
    return (
        <TodoContext.Provider value={{todos, setTodos}}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoProvider