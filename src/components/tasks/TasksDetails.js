
import React, { useContext, useEffect, useState} from "react"
import { TaskContext } from "./TasksProvider"
import { useParams } from "react-router-dom"


export const TasksDetails = () => {
    const { taskId } = useParams();
    const [task, setTask] = useState([])
    //const { articles, getArticles } = useContext(ArticleContext)
    //const { events, getEvents } = useContext(EventContext)
    //const { messages, getMessages } = useContext(MessageContext)
    const { getTaskById } = useContext(TaskContext)
    
    useEffect(() => {
        getTaskById(taskId)
        .then(response => {
            setTask(response)
        })
    }, [])

    return (
        <section className="taskArticle">
            <h2 className="taskArticle__title">Articles By: {taskId.userId}</h2>

        </section>
    )
}
