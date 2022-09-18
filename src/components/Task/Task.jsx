import React from "react";
import styles from "./Task.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { useGlobalContext } from "../../context";

function Task({ task }) {
  const { deleteTask } = useGlobalContext();

  return (
    <li className={`${task.reminder && styles.borderLeft} ${styles.listItem}`}>
      <h3 className={styles.title}>
        {task.text}
        <RiDeleteBinLine className={styles.icon} onClick={() => deleteTask(task.id)} />
      </h3>
      <p>{task.day}</p>
    </li>
  );
}

export default Task;
