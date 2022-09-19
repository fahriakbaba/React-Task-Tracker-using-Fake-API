import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <main className={styles.container}>
      <h3 className={styles.title}>What is a task tracker?</h3>
      <p className={styles.text}>
        Simply put, a task tracker is a software that lets you map out
        deliverables into tasks and record the time and effort you put into
        each. Some people use task trackers to understand how they distribute
        their time between general activities, such as time spent writing an
        article or coding a website. This is extremely interesting from a
        personal productivity perspective, especially if you are looking to
        protect more space for specific types of deep work.
      </p>
    </main>
  );
}

export default AboutPage;
