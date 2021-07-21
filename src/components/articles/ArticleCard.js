import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import { ArticleContext } from "./ArticleProvider"

export const ArticleCard = ({ article }) => {
    const { deleteArticle } = useContext(ArticleContext)
    const history = useHistory()

    const articleDelete = () => {
        deleteArticle(article.id)
        .then(() => {
            history.push("/")
        })
    }

    return (
        <section className="article">
        <h6 className="article__title">{article.title}</h6>
        <div className="article__synopsis">{article.synopsis}</div>
        {/* i put 'to' here so that a prop error i was having would go away lol sorry it was annoying me */}
        <Link to={article.url} className="article__link">{article.url}</Link>
        <div className="article__poster">Posted By: {article.user?.name}</div>
        <div className="article__timestamp">Posted at: {article.timestamp}</div>
        <button onClick={articleDelete}>Delete Article</button>
    </section>
    )
}