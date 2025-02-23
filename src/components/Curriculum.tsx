import React from "react";
import styles from "../styles/ComponentStyles/Curriculum.module.css";

const Curriculum: React.FC = () => {
  // Curriculum Data
  const curriculumData = [
    {
      date: "March 9th 2024",
      title: "Regional Anesthesia 101",
      topics: [
        "Basic Science: Principles of Ultrasound",
        "Basic Science: Local Anesthetics and Adjuvants for Nerve Blocks",
        "Acute Postoperative Pain: Patient-Controlled Analgesia",
        "Acute Postoperative Pain: Pediatric Regional Anesthesia",
      ],
      lectureLink:
        "https://docs.google.com/presentation/d/1igfc93_FKeXfOAYyj8LJEFfO0MJt-UUQKckB8tFHQTQ/edit#slide=id.p",
      audioLink: "Audio_LINK",
    },
    {
      date: "April 13th 2024",
      title: "Regional Anesthesia 201",
      topics: [
        "General Topics: Nerve Injury in Regional Anesthesia",
        "General Topics: Bier block",
        "General Topics: Local Anesthetic Systemic Toxicity",
        "General Topics: Post-Dural Puncture Headache",
      ],
      lectureLink:
        "https://docs.google.com/presentation/d/1_ZS0TxFwLKkqH2pFlJaAElQsD-iefDnQUbXm898GgtQ/edit#slide=id.p",
      audioLink: "Audio_LINK",
    },
    {
      date: "May 4th 2024",
      title: "Regional Anesthesia 301",
      topics: [
        "Neuraxial Block: Overview",
        "Neuraxial Block: Spine Anatomy; Epidural (Cervical, Thoracic, Lumbar, Caudal)",
        "Neuraxial Block: Epidural Adjuvants",
        "Neuraxial Block: Spinal and Combined Spinal Epidural",
        "Neuraxial Block: Cardiac, Pulmonary, GI, GU, Endocrine, and Metabolic Effects",
        "Neuraxial Block: ASRA Guidelines",
      ],
      lectureLink:
        "https://docs.google.com/presentation/d/1_ZS0TxFwLKkqH2pFlJaAElQsD-iefDnQUbXm898GgtQ/edit#slide=id.p",
      audioLink: "Audio_LINK",
    },
    {
      date: "June 1st 2024",
      title: "Regional Anesthesia 401",
      topics: [
        "Lower Extremity Blocks: Sciatic Nerve Block",
        "Lower Extremity Blocks: Femoral Nerve Block and Adductor Canal Block",
        "Lower Extremity Blocks: Lumbar Plexus Block and Obturator Nerve Block",
        "Lower Extremity Blocks: Popliteal Sciatic Block",
        "Lower Extremity Blocks: Ankle Block",
      ],
      lectureLink:
        "https://docs.google.com/presentation/d/15NF3QyMZmQAx5dNmeL6Xoby_0rvFE1GAs4RjVPuhYYE/edit#slide=id.p",
      audioLink: "Audio_LINK",
    },
  ];

  return (
    <div className={styles.curriculumSection}>
      <h1>Curriculum Overview</h1>
      {curriculumData.map((session, index) => (
        <div key={index}>
          <h3>{session.date}: {session.title}</h3>
          <ul>
            {session.topics.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </ul>
          <a href={session.lectureLink} className={styles.applyLink} target="_blank" rel="noopener noreferrer">
            Lecture link
          </a>{" "}
          |{" "}
          <a href={session.audioLink} className={styles.applyLink} target="_blank" rel="noopener noreferrer">
            Audio link
          </a>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Curriculum;
