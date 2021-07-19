import React, { useEffect, useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { FriendContext } from "./FriendsProvider"
import { UserContext } from "../users/UsersProvider"

//daniel

export const FriendsForm = () => {
    const { addFriend } = useContext(FriendContext)
    const { users, getUsers } = useContext(UserContext)

    const [ friend, setFriend ] = useState({
        userId: "",
        currentUserId: 0
    })

    const history = useHistory()

    useEffect(() => {
        getUsers()
    }, [])

    const handleControlledInputChange = (event) => {
       
        const newFriend = {...friend }
        newFriend[event.target.id] = event.target.value
        
        setFriend(newFriend)
        
    }

    const addNewFriendOption = (event) => {
        event.preventDefault()

        const userId = friend.userId
        const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
        

        if (userId === "") {
            window.alert("Please Enter a Name")
        } else {
            const newFriend = ({
                userId: parseInt(friend.userId),
                currentUserId: currentUserId
            })
            addFriend(newFriend)
            .then(() => history.push("/friends"))
        }
    }

    return (
        <form className="friendsForm">
            <h2 className="friendsForm__title">Add a Friend</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Friend Name:</label>
                    <input type="text" id="userId" required autoFocus className="form-control" placeholder="Add a friend..." value={friend.userId} onChange={handleControlledInputChange}></input>
                </div>
            </fieldset>

            <button className="btn btn-primary"
                onClick={ addNewFriendOption }>Save Friend
                
            </button>




        </form>
    )


}