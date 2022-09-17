import React from "react";
import styles from "./Task.module.css";
import { RiDeleteBinLine } from "react-icons/ri";

function Task({ task }) {
  return (
    <li className={`${task.reminder && styles.borderLeft} ${styles.listItem}`}>
      <h3 className={styles.title}>
        {task.text} <RiDeleteBinLine className={styles.icon} />
      </h3>
      <p>{task.day}</p>
    </li>
  );
}

export default Task;
