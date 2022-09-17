import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function Notfound() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p  className={styles.info}>page not found</p>
      <butto className={styles.btn} >
        <Link to={"/"} className={styles.link}>Back Home</Link>
      </butto>
    </section>
  );
}

export default Notfound;
