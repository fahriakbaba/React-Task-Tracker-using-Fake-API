import React from "react";
import styles from "./Task.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { useGlobalContext } from "../../context";

function Task({ task }) {
  const { deleteTask, updateTask } = useGlobalContext();

  const handleToggle = () => {
    updateTask(task.id);
  };

  return (
    <li
      onDoubleClick={handleToggle}
      className={`${task.reminder && styles.borderLeft} ${styles.listItem}`}
    >
      <h3 className={styles.title}>
        <span className={`${task.reminder && styles.textCSS}`}>{task.text}</span>
        <RiDeleteBinLine
          className={styles.icon}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p className={`${task.reminder && styles.textCSS}`}>{task.day}</p>
    </li>
  );
}

export default Task;
