import React, { useContext, useEffect} from "react"
import { TaskContext } from "./TasksProvider"
import { TaskCard } from "./TaskCard"
import { useHistory } from "react-router-dom"

export const TaskList = () => {
    // This state changes when `getTasks()` in invoked below

    const { tasks, getTasks } = useContext(TaskContext)
    const history = useHistory();

    //useEffect - reach out to the world for something

    useEffect(() => {
        console.log("TaskList: useEffect - getTasks")
        getTasks()
    }, [])

    return (

        <>
        <h2>Tasks</h2>
        <button onClick={() => {history.push("/tasks/create")}}>
            Create Tasks
        </button>
        <div className="tasks">
          ...
        </div>
      </>
    )
}