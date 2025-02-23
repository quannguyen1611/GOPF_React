import React, { useState } from "react";
import styles from "../styles/ComponentStyles/TabNav.module.css";

const TabNav: React.FC<{ tabs: string[], onSelect: (tab: string) => void }> = ({ tabs, onSelect }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    onSelect(tab);
  };

  return (
    <div className={styles.tabNav}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? styles.active : ""}
          onClick={() => handleClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNav;