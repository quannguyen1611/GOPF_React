import React from "react";
import styles from "../styles/ComponentStyles/ClassOverview.module.css";

const ClassOverview: React.FC = () => {
  return (
    <div className={styles.classSection}>
      <h1>Class Overview</h1>
      <p>
      This is a course designed for anesthesiology residents, fellows, or faculty, who are interested in regional 
      anesthesia and pain medicine. Through integrating traditional and new pedagogic methods, this program will help 
      you enhancing clinical skills while staying on top of the latest trends and developments. Our learning model is 
      comprised of live online lectures, live quiz, real time quiz results, and quiz discussion. This 12-month program 
      will cover key topics suggested by the ‘American Board of Anesthesiology’ .The Interactive quiz will help review 
      concepts and provide a deeper understanding of the topics. Individual and team assignments on scientific writing 
      will help you position yourself for a successful, multifaceted career in pain medicine.
      </p>
    </div>
  );
};

export default ClassOverview;