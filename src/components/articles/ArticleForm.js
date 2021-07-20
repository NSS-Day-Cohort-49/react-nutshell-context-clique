import React, {useContext, useEffect, useState} from "react"
import { ArticleContext } from "./ArticleProvider"
import { useHistory } from "react-router-dom";
import { FriendContext } from "../friends/FriendsProvider";

export const ArticleForm = () => {
    const { addArticle } = useContext(ArticleContext)
    const { friends, getFriends } = useContext(FriendContext)

    /* With React, we do not target the DOM with `document.querySelector().` 
    Instead, our return(render) reacts to state or props.
    Define the initial state of the form inputs with useState()*/

    const [article, setArticle] = useState({
        title: "",
        synopsis: "",
        url: "",
        timestamp:"",
        currentUserId: 0
    });

    const history = useHistory();
    /* reach out to the world and get timestamp and user state on initialization */

    useEffect(() => {
        getFriends()
    }, [])

    /* When a field changes, update state. The return will re-render and display
    based on the values in state*/

    // Controlled component
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array, always create a copy,
         make changes, and then set state */ 

         const newArticle = {...article}
         /* Article is an object with properties. Set the property to the new value using 
            object bracket {} notation */
        
        newArticle[event.target.id] = event.target.value
        // Update State

        setArticle(newArticle)
    }

    const handleClickSaveArticle = (event) => {
        event.preventDefault() // Prevents the browser from submitting the form

        const userId = parseInt(sessionStorage.getItem("nutshell_user"))

            const newArticle = {
                title: article.title,
                synopsis: article.synopsis,
                url: article.url,
                userId: userId,
                timestamp: Date.now()
            }
            addArticle(newArticle)
            .then(() => history.push("/articles"))
    }

    return (
        <form className="articleForm">
            <h2 className="articleForm__title">New Article</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" required autoFocus className="form-control" placeholder="Article Title" value={article.title} onChange={handleControlledInputChange} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="synopsis">Synopsis:</label>
                    <input type="text" id="synopsis" required autoFocus className="form-control" placeholder="Synopsis" value={article.synopsis} onChange={handleControlledInputChange} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="url">Url:</label>
                    <input type="text" id="url" required autoFocus className="form-control" value={article.url} onChange={handleControlledInputChange} />
                </div>
            </fieldset>

            <button className="btn btn-primary" onClick={handleClickSaveArticle}>
                Save Article
            </button>
        </form>
    )
}