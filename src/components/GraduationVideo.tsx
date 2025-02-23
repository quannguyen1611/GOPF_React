import React from "react";
import styles from "../styles/ComponentStyles/GraduationVideo.module.css";

const GraduationVideo: React.FC = () => {
  return (
    <div className={styles.videoContainer}>
      <h2>Graduation Ceremony (Dhaka, Bangladesh)</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/gj80qx8a828?start=2"
        title="Graduation Ceremony"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GraduationVideo;
