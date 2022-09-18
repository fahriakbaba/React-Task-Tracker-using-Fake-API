import React from "react";
import styles from "./AddTaskForm.module.css";
import { useGlobalContext } from "../../context";

function AddTaskForm() {
  const [formData, setFormData] = React.useState({
    text: "",
    day: "",
    reminder: false,
    id: Date.now().toString(),
  });

  const { addTask } = useGlobalContext();

  const handleFormChange = (e) => {
    const { type, name, value, checked } = e.target;
    setFormData((oldFormData) => ({
      ...oldFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if( !formData.text && !formData.day) return;
    addTask(formData);
    setFormData({
      text: "",
      day: "",
      reminder: false,
      id: Date.now().toString(),
    });
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="task">
          Task
        </label>
        <input
          className={styles.formControl}
          id="task"
          type="text"
          placeholder="Add Task"
          name="text"
          value={formData.text}
          onChange={handleFormChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="day and time">
          Day &amp; Time
        </label>
        <input
          className={styles.formControl}
          id="day and time"
          type="date"
          placeholder="Add Day &amp; Time"
          name="day"
          value={formData.day}
          onChange={handleFormChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label
          className={`${styles.formLabel} ${styles.reminderLabel}`}
          htmlFor="set reminder"
        >
          Set Reminder
          <input
            className={styles.checkbox}
            id="set reminder"
            type="checkbox"
            name="reminder"
            checked={formData.reminder}
            onChange={handleFormChange}
          />
        </label>
      </div>
      <button className={styles.btn} type="submit" onClick={handleFormSubmit}>
        Save Task
      </button>
    </form>
  );
}

export default AddTaskForm;
