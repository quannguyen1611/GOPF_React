import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/ComponentStyles/Header.module.css";

const Header: React.FC = () => {
  const location = useLocation(); // Get current page path

  return (
    <>
      <div className={styles.schoolHeader}>
        <p>University of Minnesota</p>
      </div>
      <header className={styles.header}>
        <div>
          <img src="/photos/GOPFlogo.png" alt="Logo" className={styles.logo} />
        </div>
        <nav className={styles.nav}>
          <Link
            to="/"
            className={`${styles.navLink} ${location.pathname === "/" ? styles.active : ""}`}
          >
            Home
          </Link>
          <Link
            to="/program"
            className={`${styles.navLink} ${location.pathname === "/program" ? styles.active : ""}`}
          >
            Program
          </Link>
          <Link
            to="/news-and-events"
            className={`${styles.navLink} ${location.pathname === "/news-and-events" ? styles.active : ""}`}
          >
            News & Events
          </Link>
          <Link
            to="/faculty"
            className={`${styles.navLink} ${location.pathname === "/faculty" ? styles.active : ""}`}
          >
            Faculty
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
