import React from 'react';
import Task from '../Task/Task';

function Tasks( {tasks} ) {
  return (
    <ul>{tasks.map(task => <Task task={task} key={task.id} />)}</ul>
  )
}

export default Tasks;