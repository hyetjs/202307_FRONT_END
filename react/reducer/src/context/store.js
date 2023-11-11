import { createContext, useState, useContext} from 'react'

// 1 저장할 공간을 먼저 생성
export const UserContext = createContext();
export const useUser = () => useContext(UserContext)

// 2. 저장된 데이터를 원하는 컴포넌트(자식 컴포넌트)에게 보내줄 수 있는 덮개
// Provider
const UserProvider = ({children}) => {
    const [users, setUsers] = useState([
        {
            id: "1",
            name: "김성용"
        },{
            id: "2",
            name: "신짱구"
        }
    ]);

    return (
            <UserContext.Provider value={{users, setUsers}}>
                    {children}
            </UserContext.Provider>
    )
}
export default UserProvider

// java -> spring-boot -> js