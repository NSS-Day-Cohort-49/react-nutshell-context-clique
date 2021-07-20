import React,{ useState, createContext } from "react"

export const TaskContext = createContext()
export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return fetch("http://localhost:8088/tasks?_expand=user")
        .then(res => res.json())
        .then(setTasks)
    }

    const addTask = task => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        .then(getTasks)
    }
    // Double check props and interpolation 
    const deleteTask = task => {
        return fetch(`http://localhost:8088/tasks/${task.id}`), {
            method: "DELETE"
        }
        .then(getTasks)
    }

    const getTaskById = id => {
        return fetch(`http://localhost:8088/tasks/${id}?_expand=user`)
    }
import React,{ useState, createContext } from "react"

    return (
        <TaskContext.Provider value={{
            tasks, getTasks, addTask, deleteTask,getTaskById
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
