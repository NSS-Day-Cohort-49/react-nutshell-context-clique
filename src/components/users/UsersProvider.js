import { createContext } from "react";
import { useState } from "react";
//Daniel

export const UserContext = createContext()
export const UserProvider = (props) => {

    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/users?_embed=articles&_embed=friends")
        .then(res => res.json())
        .then(setUsers)
    }

    const addUsers = user => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(getUsers)
    }

    return (
        <UserContext.Provider value={{
            users, setUsers, getUsers, addUsers
        }}>
            {props.children}
        </UserContext.Provider>
    )

}