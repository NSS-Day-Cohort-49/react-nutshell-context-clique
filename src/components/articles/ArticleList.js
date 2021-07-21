import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { ArticleCard } from "./ArticleCard"
import { ArticleContext } from "./ArticleProvider"
import { FriendContext } from "../friends/FriendsProvider"

export const ArticleList = () => {
    // This state changes when `getArticles()` is invoked below

    const { articles, getArticles } = useContext(ArticleContext)
    const { friends, getFriends } = useContext(FriendContext)
    const history = useHistory();

    //useEffect - reach out to the world for something

    useEffect(() => {
        console.log("ArticleList: useEffect - getArticles")
        getArticles()
        .then(getFriends)
    }, [])

    return (
        <>
            <button onClick={() => {history.push("/articles/create")}}>
                New Article
            </button>

            <div className="articles">
                {console.log("articleList: Render", articles)}
                {
                    articles.map(article => {
                        const friend = friends.find(f => f.id === article.userId)

                        return <ArticleCard key={article.id}
                        article={article}
                        friend={friend} />
                    })
                }
            </div>
        </>
    )
}