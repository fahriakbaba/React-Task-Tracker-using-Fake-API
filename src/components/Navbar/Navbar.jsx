import React from "react";
import styles from "./Navbar.module.css";
import { SiTodoist } from "react-icons/si";
import { Link } from "react-router-dom";

const linksData = [
  {
    id: 1,
    to: "/",
    text: "Home",
  },
  {
    id: 2,
    to: "/add",
    text: "Add Task",
  },
  {
    id: 3,
    to: "/delete",
    text: "Deleted Task",
  },
  {
    id: 4,
    to: "/complete",
    text: "Completed Task",
  },
];

function Navbar() {
  const [value, setValue] = React.useState(null);
  console.log(value);

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>
        <SiTodoist className={styles.icon} />
        Task Tracker
      </h1>
      <nav>
        <ul className={styles.list}>
          {linksData.map((link, index) => {
            console.log("index: " , index);
            console.log("value: ", value);

            return (
              <li onClick={() => setValue(index)}>
                <Link to={link.to} className={`${styles.link}`} key={index} style={{
                  color: index===value && "#b92632"
                }} >
                  {link.text}
                </Link>
              </li>
            )
          } )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
