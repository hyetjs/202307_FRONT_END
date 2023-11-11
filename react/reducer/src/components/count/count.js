
import { useReducer } from 'react'
import { countReducer } from '../../reducer/count'

const Count = () => {
    const [count, dipatch] = useReducer(countReducer, 0)
    // state명, 전달체 = useReducer(목적지, 기본값)
    /* 
        const [todo, setTodo] = useState([{id:....},{id:....}])
        const onAddTodo = () => {
            setTodos([......, { .... }])
        }   
    */


    const onAddCount = () => {
        // setState(count + 1)
        dipatch({
            type: "INCREMENT",
            payload: {
                count: 1
            }
        })
    }

    return (
        <div>
            <button>-</button>
            {count}
            <button onClick={onAddCount}>+</button>
        </div>
    )
}
export default Count