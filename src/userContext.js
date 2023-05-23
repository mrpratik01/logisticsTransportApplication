import { useState,createContext } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    let value = {
        username: '',
        email: '',
        phoneNumber: '',
        userID : ''
    }
    const [users, setUsers] = useState(value)




    const updateUserDetails = (data) => {
        setUsers(data)
    }


    return <UserContext.Provider value={{
        updateUserDetails,
        users
    }}>
        {children}
    </UserContext.Provider>
}