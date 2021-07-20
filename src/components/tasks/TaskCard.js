import React from "react"
import { Link } from "react-router-dom"

export const TaskCard = ({ task }) => (

    <section className="task">
        <h3 className="task__name" >
            <Link to={`/tasks/detail/${task.userId}`}>
                {task.user.name}
            </Link>
        </h3>
    </section>
)