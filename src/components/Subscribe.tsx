import React from "react";
import styles from "../styles/ComponentStyles/Subscribe.module.css";

const Subscribe: React.FC = () => {
    return (
      <>
        <div className={styles.Subscribe}>
        <h2>Don't miss out</h2>
        <p className={styles.SubText}>
          Want to attend 1 of the individual lectures? Please submit this{" "}
          <a href="https://form.jotform.com/232111034088141" target="_blank">
            form
          </a>
          .
          <br></br>
          Lectures are on Saturdays 3-5pm GMT.
        </p>
      </div>
      </>
    );
  };
  
export default Subscribe;