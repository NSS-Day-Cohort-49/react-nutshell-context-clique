import React, { useContext, useEffect} from "react"
import { FriendContext } from "./FriendsProvider"
import { FriendCard } from "./FriendCard"
import { useHistory } from "react-router-dom"

export const FriendList = () => {
    // This state changes when `getFriends()` in invoked below

    const { friends, getFriends } = useContext(FriendContext)
    const history = useHistory();

    //useEffect - reach out to the world for something

    useEffect(() => {
        console.log("FriendList: useEffect - getFriends")
        getFriends()
    }, [])

    return (
        <>
            <button onClick={() => { history.push("/friends/create")}}>
                Add Friend
            </button>

            <div className="friends">
                {console.log("friendList: Render", friends)}
                {
                    friends.map(friend => {
                        return <FriendCard key={friend.id}
                        friend={friend} />
                    })
                }
                
            </div>
        </>
    )
}