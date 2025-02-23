import React, { useState, useEffect } from "react";
import styles from "../styles/ComponentStyles/Slideshow.module.css";

const slides = [
  "/photos/peoplestudying.jpg",
  "/photos/GOPFinfo.png",
  "/photos/worldmap.jpg",
];

const Slideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshowContainer}>
      {slides.map((src, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
        >
          <img src={src} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
