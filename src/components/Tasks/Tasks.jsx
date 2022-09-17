import React from 'react';
import Task from '../Task/Task';
import styles from "./Tasks.module.css";

function Tasks( {tasks} ) {
  return (
    <ul className={styles.list}>{tasks.map(task => <Task task={task} key={task.id} />)}</ul>
  )
}

export default Tasks;