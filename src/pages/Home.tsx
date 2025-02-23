import React from "react";
import styles from "../styles/PageStyles/Home.module.css";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import ContactForm from "../components/ContactForm";
import Subscribe from "../components/Subscribe";
import ApplyButton from "../components/ApplyButton";

const Home: React.FC = () => {

  return (
    <div className={styles.whole}>
      <Header></Header>

      {/* Main Content */}
      <div className={styles.overview}>
        <div className={styles.globalPainText}>
          <p className={styles.WelcomeText}>
          <b>
            Welcome to Global Online Pain Fellowship
          </b>
          </p>
          <ApplyButton></ApplyButton>
        </div>

        {/* Slideshow */}
        <Slideshow></Slideshow>
      </div>

      {/* About Section */}
      <div className={styles.Intro}>
        <h2>About Us</h2>
        <p className={styles.IntroText1}>
          Appropriate pain education is essential for successful pain management.  Limited knowledge, 
          inadequate training of evidence based pain management, and insufficient resources are important 
          barriers for good pain management in the low resource countries. In these counties, there is no 
          structured pain fellowship exists. Therefore, there are significant variations in the quality and 
          levels of pain care.
        </p>
        <p className={styles.IntroText2}>
          A major shift in education in the past few years is the incorporation of video conferencing and other 
          online learning methodologies. These changes open new opportunities for teachers and students. 
          The goal of this 'Global Online Pain Fellowship' is to create a program to teach and train young 
          anesthesiologists and test their knowledge and thought processes, through which relative uniformity 
          of knowledge base and judgment are measured and certified for specialists . The Fellowship will 
          involve a commitment of one year of training through a structured course curriculum, with monthly 
          live lectures and live online examinations . Upon successful completion of course a certificate will
          be issued recognizing the satisfactory attendance (<b>80% score</b>), and passing the examinations (<b>70% score</b>). 
          Such certification will ensure that the candidates have acquired an established global standard of 
          core knowledge, and matured their judgment process through live online lectures and successful 
          completion of all examinations. <span style={{ textDecoration: "underline" }}>Candidates who show
          outstanding performance (<b>80% score</b>) on the examination are granted the 'certificate with Honors'.</span> 
          The certificate with Honors may assist in advancement of their academic careers.
        </p>
      </div>

      {/* Subscribe Section */}
      <Subscribe></Subscribe>

      {/* Contact Section */}
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
