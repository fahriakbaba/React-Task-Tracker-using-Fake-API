import React from "react";
import styles from "./SearchTask.module.css";

function SearchTask({ handleSearch, search }) {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Search Task</h3>
      <input
        type="text"
        placeholder="Please, search tasks  you want."
        value={search}
        onChange={handleSearch}
        className={styles.input}
      />
    </section>
  );
}

export default SearchTask;
