import React, {useState, createContext } from "react"

export const ArticleContext = createContext()
export const ArticleProvider = (props) => {
    const [articles, setArticles] = useState([])

    const getArticles = () => {
        return fetch("http://localhost:8088/articles?_expand=user")
        .then(res => res.json())
        .then(setArticles)
    }

    const addArticle = article => {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article)
        })
        //.then(response => response.json())
        .then(getArticles)
    }
    const deleteArticle = article => {
        return fetch(`http://localhost:8088/articles/${article.id}`), {
            method: "DELETE"
        }
        .then(getArticles)
    }

    return (
        <ArticleContext.Provider value={{
            articles, getArticles, addArticle, deleteArticle
        }}>
            {props.children}
        </ArticleContext.Provider>
    )
}
