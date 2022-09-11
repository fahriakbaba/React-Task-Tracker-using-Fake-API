import React from "react";

function Task({task}) {


    return(<li>
        <h4>{task.text}</h4>
        <p>{task.day}</p>
    </li>)
}

export default Task;