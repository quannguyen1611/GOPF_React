import React, { useState } from "react";
import styles from "../styles/PageStyles/NewsAndEvents.module.css";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import GraduatesList from "../components/GraduatesList";
import GraduationVideo from "../components/GraduationVideo";

const NewsAndEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState("graduation-23-24");

  return (
    <div className={styles.graduatesPage}>
      <Header />

      <div className={styles.container}>
        {/* Tab Navigation */}
        <div className={styles.tab}>
            <button
            className={`${styles.button} ${activeTab === "graduation-23-24" ? styles.active : ""}`}
            onClick={() => setActiveTab("graduation-23-24")}
            >
            Graduation 23-24
            </button>
            <button
            className={`${styles.button} ${activeTab === "graduation-24-25" ? styles.active : ""}`}
            onClick={() => setActiveTab("graduation-24-25")}
            >
            Graduation 24-25
            </button>
        </div>
        {/* Content Rendering */}
        <div className={styles.content}>
            {/* Content based on active tab */}
            {activeTab === "graduation-23-24" && (
            <>
                <Testimonials />
                <GraduatesList />
                <GraduationVideo />
            </>
            )}

            {activeTab === "graduation-24-25" && (
            <div className={styles.noData}>
                <p>Graduation details for 2024-2025 will be available soon.</p>
            </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default NewsAndEvents;
