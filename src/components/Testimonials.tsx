import React from "react";
import styles from "../styles/ComponentStyles/Testimonials.module.css";

const Testimonials: React.FC = () => {
  return (
    <div className={styles.testimonials}>
      <h2>Testimonials</h2>
      <p>
        This 1 year long fellowship journey was really outstanding. Under direct supervision from 
        world reputed mentors, international standard classes, presentations and examinations have 
        really made this program very prestigious. In my eyes, this program has two best parts. One 
        is the easiness of learning which makes this program versatile and attractive. <b>Another, and 
        most important, is discovering this amazing book "Anaesthesiology in Training Exam Review." </b>
        I've seen no other such 'easy to digest and pleasing to read' short book written for Anaesthesia 
        or Pain Medicine.
      </p>
      <p><strong>Dr. Mosharraf Hossain Palash, Dhaka, Bangladesh, 2023-2024 Fellow</strong></p>
    </div>
  );
};

export default Testimonials;
