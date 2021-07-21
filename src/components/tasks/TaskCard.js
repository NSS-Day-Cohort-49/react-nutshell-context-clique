import React, {useContext} from "react"
import { TaskContext } from "./TasksProvider";
import { useHistory} from "react-router-dom"

export const TaskCard = ({ task }) => {

    const { editTask } = useContext(TaskContext)
    const {deleteTask} = useContext(TaskContext)

    const history = useHistory();

    const handleEdit = () => {
        editTask(task.id)
        .then(() => {
          history.push("/tasks")
        })
        alert("Task has been edited!")
      };

    const handleDelete = () => {
      deleteTask(task.id)
      .then(() => {
        history.push("/tasks")
      })
      alert("Task has been deleted!")
    };

    return (

        <div className="task__wrapper">
            <section className="task">
                <div className="task__buttons">
                    <button className="edit__task"onClick={handleEdit}>Edit</button>
                    <button className="delete__task" onClick={handleDelete}>Delete</button>
                </div>
            </section>
        </div>
    )
};
