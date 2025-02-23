import React from "react";
import styles from "../styles/ComponentStyles/Objectives.module.css";

const Objectives: React.FC = () => {
  return (
    <div className={styles.objectivesSection}>
      <h1>Course Learning Objectives</h1>
      <ul>
        <li>Understand regional anesthesia</li>
        <li>Prepare for the in-training exam</li>
        <li>Learn about pain management techniques</li>
      </ul>
    </div>
  );
};

export default Objectives;