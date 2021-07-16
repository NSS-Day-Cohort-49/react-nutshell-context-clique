import React, { useContext, useEffect, useState} from "react"
import { FriendContext } from "./FriendsProvider"
import { useParams } from "react-router-dom"


export const FriendsDetails = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState([])
    //const { articles, getArticles } = useContext(ArticleContext)
    //const { events, getEvents } = useContext(EventContext)
    //const { messages, getMessages } = useContext(MessageContext)
    const { getFriendById } = useContext(FriendContext)
    
    useEffect(() => {
        getFriendById(friendId)
        .then(response => {
            setFriend(response)
        })
    }, [])

    return (
        <section className="friendArticle">
            <h2 className="friendArticle__title">Articles By: {friendId.userId}</h2>

        </section>
    )
}

