import React from "react";
import styles from "../styles/ComponentStyles/GraduationTabs.module.css";

interface GraduationTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const GraduationTabs: React.FC<GraduationTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className={styles.tabs}>
      <button
        className={`${styles.tabButton} ${activeTab === "graduation-23-24" ? styles.active : ""}`}
        onClick={() => setActiveTab("graduation-23-24")}
      >
        Graduation 2023-2024
      </button>
      <button
        className={`${styles.tabButton} ${activeTab === "graduation-24-25" ? styles.active : ""}`}
        onClick={() => setActiveTab("graduation-24-25")}
      >
        Graduation 2024-2025
      </button>
    </div>
  );
};

export default GraduationTabs;
