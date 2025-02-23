import React, { useState } from "react";
import styles from "../styles/PageStyles/Program.module.css";
import Header from "../components/Header";
import Curriculum from "../components/Curriculum";
import Schedule from "../components/Schedule";
import ClassOverview from "../components/ClassOverview";
import Objectives from "../components/Objectives";

const Program: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Curriculum");

  return (
    <div className={styles.programContainer}>
      <Header />

      {/* Tabs Navigation */}
      <div className={styles.tab}>
        <button
          className={`${styles.button} ${activeTab === "Curriculum" ? styles.active : ""}`}
          onClick={() => setActiveTab("Curriculum")}
        >
          Curriculum Overview
        </button>
        <button
          className={`${styles.button} ${activeTab === "Schedule" ? styles.active : ""}`}
          onClick={() => setActiveTab("Schedule")}
        >
          Class Schedule
        </button>
        <button
          className={`${styles.button} ${activeTab === "ClassOverview" ? styles.active : ""}`}
          onClick={() => setActiveTab("ClassOverview")}
        >
          Class Overview
        </button>
        <button
          className={`${styles.button} ${activeTab === "Objectives" ? styles.active : ""}`}
          onClick={() => setActiveTab("Objectives")}
        >
          Objectives
        </button>
      </div>

      {/* Content Rendering */}
      <div className={styles.content}>
        {activeTab === "Curriculum" && <Curriculum />}
        {activeTab === "Schedule" && <Schedule />}
        {activeTab === "ClassOverview" && <ClassOverview />}
        {activeTab === "Objectives" && <Objectives />}
      </div>
    </div>
  );
};

export default Program;

