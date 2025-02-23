import React from "react";
import styles from "../styles/ComponentStyles/ApplyButton.module.css";

const ApplyButton: React.FC = () => {
  return (
    <div className={styles.ApplyButton}>
      <a href="https://docs.google.com/forms/" target="_blank" className={styles.ApplyLink}>
        Apply
      </a>
    </div>
  );
};

export default ApplyButton;