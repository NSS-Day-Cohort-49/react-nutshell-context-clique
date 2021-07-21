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
    const deleteArticle = articleId => {
        return fetch(`http://localhost:8088/articles/${articleId}`, {
            method: "DELETE"
        })
        .then(getArticles)
    }

    const getArticleById = id => {
        return fetch(`"http://localhost:8088/articles/${id}?_expand=user"`)
        .then(res => res.json())
    }

    return (
        <ArticleContext.Provider value={{
            articles, getArticles, addArticle, deleteArticle, getArticleById
        }}>
            {props.children}
        </ArticleContext.Provider>
    )
}
