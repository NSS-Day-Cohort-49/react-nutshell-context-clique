import React from "react"

export const ArticleCard = ({ article }) => (
    <section className="article">
        <h3 className="article__name">{article.name}</h3>
    </section>
)