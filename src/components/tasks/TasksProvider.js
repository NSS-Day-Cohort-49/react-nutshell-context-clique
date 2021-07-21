import React,{ useState, createContext } from "react"

export const TaskContext = createContext()
export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return fetch("http://localhost:8088/tasks?_expand=user")
        .then(res => res.json())
        .then(setTasks)
    }

    const addTask = (task) => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        .then(getTasks)
    }


    const getTaskById = id => {
        return fetch(`http://localhost:8088/tasks/${id}?_expand=user`)
    }
    // Double check props and interpolation 
    const deleteTask = (taskId) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`), {
            method: "DELETE"
        }
        .then(getTasks)
    }

    const updateTask = (task) => {
        return fetch(`http://localhost:8088/messages/${task.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(task)
        })
          .then(getTasks)
      };


    return (
        <TaskContext.Provider value={{
            tasks, getTasks, addTask, deleteTask,getTaskById
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
