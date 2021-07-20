import React, { useContext, useEffect, useState} from "react"
import { FriendContext } from "./FriendsProvider"
import { useParams } from "react-router-dom"
import { ArticleContext } from "../articles/ArticleProvider"


export const FriendsDetails = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState([])
    const { article, getArticles } = useContext(ArticleContext)
    //const { events, getEvents } = useContext(EventContext)
    //const { messages, getMessages } = useContext(MessageContext)
    const { getFriendById } = useContext(FriendContext)
    
    useEffect(() => {
        getFriendById(friendId)
        .then(response => {
            setFriend(response)
        })
        .then(getArticles)
    }, [])

    return (
        <section className="friendArticle">
<<<<<<< HEAD
            <h2 className="friendArticle__title">
                Articles By: {friend.user?.name}
            </h2>
            <div className="friendArticle">
                {article.userId}
            </div>
=======
            <h2 className="friendArticle__title">Articles By: {friend.user?.name}</h2>
>>>>>>> main

        </section>
    )
}

