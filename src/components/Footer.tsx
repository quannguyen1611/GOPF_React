import React from "react";
import styles from "../styles/ComponentStyles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Global Online Pain Fellowship. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
