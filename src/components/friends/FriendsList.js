import React, { useContext, useEffect} from "react"
import { FriendContext } from "./FriendsProvider"
import { FriendCard } from "./FriendCard"
import { useHistory } from "react-router-dom"
import "./Friend.css"
import { MessageContext } from "../messages/MessageProvider"

export const FriendList = () => {
    // This state changes when `getFriends()` in invoked below

    const { friends, getFriends } = useContext(FriendContext)
    const history = useHistory();
    const { messages, getMessages } = useContext(MessageContext)
    

    //useEffect - reach out to the world for something

    useEffect(() => {
        getFriends()
        .then(getMessages)
    }, [])

    return (
        <>
            <button className="fbtn" onClick={() => { history.push("/friends/create")}}>
                Add Friend
            </button>

            <div className="friends">
                {console.log("friendList: Render", friends)}
                {
                    friends.filter((friend) => {
                        return parseInt(sessionStorage.getItem("nutshell_user")) === friend.currentUserId
                    }).map((friend) => {
                        const message = messages.filter( m => {
                             return m.userId === friend.userId
                        }).map(m => { return  <p>{m.body}</p> } )
                        {console.log(message)}

                        return <FriendCard key={friend.id}
                        friend={friend}
                        message={message} />
                    })
                }
                
            </div>
        </>
    )
}