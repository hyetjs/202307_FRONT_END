import { useContext } from 'react'
import { UserContext, useUser } from '../../context/store'
import AddUser from './addUser'

const User = () => {
    // const {user, setUser} = useContext(UserContext)
    const {users, setUsers} = useUser()

    return (
    <div>
        {users.map(user=> (
            <div>{user.name}</div>
        ))}
        <AddUser/>
    </div>
    )
}
export default User