import React, { useEffect, useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { TaskContext } from "./TasksProvider"
import { UserContext } from "../users/UsersProvider"
import "./Tasks.css"



export const TasksForm = () => {
    const { addTask } = useContext(TaskContext)
    const { users, getUsers } = useContext(UserContext)

    const [ task, setTask ] = useState({
        userId: "",
        taskName: "",
        completionDate:Date.now()
    })
const history = useHistory()

useEffect(() => {
    getUsers()
}, [])

const handleControlledInputChange = (event) => {
  
    const newTask = {...task }
    
    newTask[event.target.id] = event.target.value 
  
    setTask(newTask)
}

const handleClickSaveTask = (event) => {
    event.preventDefault() 

const saveNewTask = () => {
   task.userId = parseInt(sessionStorage.getItem("nutshell_user"));
   addTask(task);
   alert(" Task information sent");

  
   const newTask = {...task} 
   newTask.text = '';
   setTask(newTask)
};
}

    return (
        <form>
            <h2 className="taskHeader"> New Task</h2>
            <div className="field">
            <label className="label" htmlFor="taskContent">Task Name</label>
            <textarea id="body" type="text" name="taskContent" className="content" rows="1" cols="60"placeholder="Task..." onChange={(event) => {handleControlledInputChange(event)}}>
            </textarea>
           
        </div>
        <div className="field">
            <label className="label" htmlFor="taskContent">Estimated Completion Date</label>
            <textarea id="body" type="text" name="taskContent" className="content" rows="1" cols="60"placeholder="Date of Completion..." onChange={(event) => {handleControlledInputChange(event)}}>
            </textarea>
            
            <button className="btn btn-primary" onClick={handleClickSaveTask}>
                New Task
            </button>
    
        </div>
        </form>
    )
    }