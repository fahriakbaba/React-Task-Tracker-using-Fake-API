import React from "react";
import styles from "./Complete.module.css";
import { AiOutlineCaretDown } from "react-icons/ai";

function Complete({ completeItem }) {
    const [isShown, setIsShown] = React.useState(false);
    
    const toggleShow = () => {
        setIsShown(prevState => !prevState);
    };

  return (
    <section className={styles.item}>
      <article>
        <h4 className={styles.title}>{completeItem.text}</h4>
        {isShown && <p className={styles.infoText}>{completeItem.day}</p>}
      </article>
      <div className={styles.iconContainer}>
        <AiOutlineCaretDown
          className={styles.accordionIcon}
          onClick={toggleShow}
        />
      </div>
    </section>
  );
}

export default Complete;
