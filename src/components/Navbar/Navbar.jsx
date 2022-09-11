import React from "react";
import styles from "./Navbar.module.css";
import { SiTodoist } from 'react-icons/si';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>
        <SiTodoist className={styles.icon} />
        Task Tracker
      </h1>
      <nav>
        <ul className={styles.list}>
          <li><Link to="/" className={styles.link}>Home</Link></li>
          <li><Link to={"/add"} className={styles.link}>Add Task</Link></li>
          <li><Link to={"/delete"} className={styles.link}>Deleted Task</Link></li>
          <li><Link to={"/complete"} className={styles.link}>Completed Task</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
