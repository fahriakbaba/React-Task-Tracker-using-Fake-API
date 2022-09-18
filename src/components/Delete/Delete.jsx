import React from "react";
import styles from "./Delete.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineCaretDown } from "react-icons/ai";

function Delete({ deleteItem, setDeletedTasks }) {
  const [show, setShow] = React.useState(false);

  const toggleShow = () => {
    setShow(prevState => !prevState);
  };

  const handleDelete = (id) => {
    setDeletedTasks(prevState => {
        return prevState.filter(item => item.id !== id);
    });
  };

  return (
    <section className={styles.item}>
      <article>
        <h4 className={styles.title}>{deleteItem.text}</h4>
        {show && <p className={styles.infoText}>{deleteItem.day}</p>}
      </article>
      <div className={styles.iconContainer}>
        <AiOutlineCaretDown
          className={styles.accordionIcon}
          onClick={toggleShow}
        />
        <RiDeleteBin5Line className={styles.icon} onClick={() => handleDelete(deleteItem.id)} />
      </div>
    </section>
  );
}

export default Delete;
