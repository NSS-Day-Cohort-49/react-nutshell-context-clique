import React, { useContext, useEffect, useState} from "react"
import { FriendContext } from "./FriendsProvider"
import { useHistory, useParams } from "react-router-dom"


export const FriendsDetails = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({})
    //const { articles, getArticles } = useContext(ArticleContext)
    //const { events, getEvents } = useContext(EventContext)
    //const { messages, getMessages } = useContext(MessageContext)
    const { getFriendById, deleteFriend } = useContext(FriendContext)
    const history = useHistory()
    

    useEffect(() => {
        getFriendById(friendId)
        .then(response => {
            setFriend(response)
        })
    }, [])

    const handleDelete = () => {
        deleteFriend(friend.id)
        .then(() => {
            history.push("/friends")
        })
    }

    return (
        <section className="friendArticle">
            <h2 className="friendArticle__title">{friend.user?.name}</h2>
            <button onClick={ handleDelete }>Delete Friend</button>

        </section>
    )
}

