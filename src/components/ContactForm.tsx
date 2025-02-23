import React from "react";
import styles from "../styles/ComponentStyles/ContactForm.module.css";

const ContactForm: React.FC = () => {
  return (
    <div className={styles.contactSection}>
      <h2>Contact Us</h2>
      <form action="https://www.jotform.com/build/241519322122142/publish/embed" method="POST" className={styles.contactForm}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;