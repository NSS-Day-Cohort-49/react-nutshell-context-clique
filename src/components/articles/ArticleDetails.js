import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import { useParams, useHistory } from "react-router-dom"
import { FriendContext } from "../friends/FriendsProvider"



export const ArticleDetails = () => {
    const { articleId } = useParams();
    const [article, setArticle] = useState([])
    const { friend, getFriends } = useContext(FriendContext)
    const { getArticleById, deleteArticle } = useContext(ArticleContext)
    const history = useHistory()

    useEffect(() => {
        getArticleById(articleId)
        .then(response => {
            setArticle(response)
        })
        .then(getFriends)
    }, [])


    const articleDelete = () => {
        deleteArticle(article.id)
        .then(() => {
            history.push("/")
        })
    }

}