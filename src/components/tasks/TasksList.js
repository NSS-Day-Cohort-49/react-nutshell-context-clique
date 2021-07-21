import React, { useContext, useState, useEffect} from "react"
import { TaskContext } from "./TasksProvider"
import { TaskCard } from "./TaskCard"
import { useHistory } from "react-router-dom";


export const TaskList = () => {
    // This state changes when `getTasks()` in invoked below

    const { tasks, getTasks, addTask} = useContext(TaskContext);
    const history = useHistory()

    //useEffect - reach out to the world for something

    useEffect(() => {
        console.log("TaskList: useEffect - getTasks")
        getTasks()
    }, [])

    const [task, setTask] = useState({
        userId: 0,
        text: "",
        isPublic: false
    });

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newTask = {...task }
        
        newTask[event.target.id] = event.target.value 
        // update state
        setTask(newTask)
    };

    const saveNewTask = () => {
       task.userId = parseInt(sessionStorage.getItem("nutshell_user"));
       addTask(task);
       alert(" Task information sent");

      
       let newTask = {...task} 
       newTask.text = '';
       setTask(newTask)
    };



return (
    <>
        
        <button onClick={() => { history.push("/tasks/create")}}>
                Add Task
            </button>
        <div className="task">
            {console.log("TaskList - Render: tasks", tasks)}
                {tasks.map((task) => {
                    return <TaskCard key={task.id} task={task} />;
                })
            }
        </div>
        <div className="field">
            <label className="label" htmlFor="taskContent">Task Name</label>
            <textarea id="body" type="text" name="taskContent" className="content" rows="1" cols="60"placeholder="Task..." onChange={(event) => {handleControlledInputChange(event)}}>
            </textarea>
           
        </div>
        <div className="field">
            <label className="label" htmlFor="taskContent">Estimated Completion Date</label>
            <textarea id="body" type="text" name="taskContent" className="content" rows="1" cols="60"placeholder="Date of Completion..." onChange={(event) => {handleControlledInputChange(event)}}>
            </textarea>
           
        </div>
    </>
        );
 };