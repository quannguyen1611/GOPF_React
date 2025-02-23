import React from "react";
import styles from "../styles/ComponentStyles/Schedule.module.css";

const Schedule: React.FC = () => {
  return (
    <div className={styles.scheduleSection}>
      <h1>Class Schedule</h1>
      <ul>
        <li>Session 1: March 9th, 2024</li>
        <li>Session 2: April 13th, 2024</li>
        <li>Session 3: May 4th, 2024</li>
        <li>Session 4: June 1st, 2024</li>
      </ul>
    </div>
  );
};

export default Schedule;