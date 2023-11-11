import { useUser } from "../../context/store"

const AddUser = () => {
    const {users, setUsers} = useUser()
    const onAddUser = (e) => {
        e.preventDefault()
        setUsers([...users, {
            id: Math.floor(Math.random() * 1000000),
            name: e.target.name.value
        }])
    }

    /* 
      const {todos, setTodos, onAddTodo} = useTodo
    */

    return (
        <form onSubmit={onAddUser}>
            <input name="name"/>
            <button>추가</button>
        </form>
    )
}
export default AddUser