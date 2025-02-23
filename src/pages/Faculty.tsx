import React from "react";
import styles from "../styles/PageStyles/Faculty.module.css";
import Header from "../components/Header";

interface FacultyMember {
  name: string;
  title: string;
  department: string;
  institution: string;
  location: string;
  image: string;
}

const facultyList: FacultyMember[] = [
  {
    name: "Ratan K. Banik, MD, PhD",
    title: "Department of Anesthesiology",
    department: "University of Minnesota",
    institution: "Minneapolis, USA",
    location: "photos/faculty/RatanBanik.jpeg",
    image: "photos/faculty/RatanBanik.jpeg",
  },
  {
    name: "Mojca Remskar, MD, PhD, MACM",
    title: "Executive Vice Chair, Department of Anesthesiology",
    department: "University of Minnesota",
    institution: "Minneapolis, USA",
    location: "photos/faculty/Mojca.jpeg",
    image: "photos/faculty/Mojca.jpeg",
  },
  {
    name: "Vanessa Moll, MD, PhD, FCCM, FASA, DESA",
    title: "Vice Chair Quality and Safety, Department of Anesthesiology",
    department: "University of Minnesota",
    institution: "Minneapolis, USA",
    location: "photos/faculty/vanessa-moll.jpeg",
    image: "photos/faculty/vanessa-moll.jpeg",
  },
  {
    name: "Jacob Hutchins, MD, MHA",
    title: "Division Director of Regional Anesthesia, Acute Pain, and Ambulatory Anesthesia",
    department: "University of Minnesota",
    institution: "Minneapolis, USA",
    location: "photos/faculty/jake-hutchins.jpeg",
    image: "photos/faculty/jake-hutchins.jpeg",
  },
  {
    name: "Sam Eldabe, MD",
    title: "Department of Pain and Anaesthesia",
    department: "James Cook University Hospital",
    institution: "Middlesbrough, England",
    location: "photos/faculty/sam-eldabe.jpeg",
    image: "photos/faculty/sam-eldabe.jpeg",
  },
  {
    name: "Dhruv Bibra, MBBS, DA, DNB, FIPP, EDPM, FIPM",
    title: "Interventional Pain Physician",
    department: "Delhi Pain Management Centre",
    institution: "South Delhi, India",
    location: "photos/faculty/DhruvB.jpeg",
    image: "photos/faculty/DhruvB.jpeg",
  },
  {
    name: "Clarence Shannon IV, MD",
    title: "Director of the Comprehensive Pain Clinic",
    department: "University of Minnesota",
    institution: "Minneapolis, USA",
    location: "photos/faculty/clarence-shannon.jpeg",
    image: "photos/faculty/clarence-shannon.jpeg",
  },
];

const Faculty: React.FC = () => {
  return (
    <div className={styles.whole}>
      <Header />
      {facultyList.map((faculty, index) => (
        <div key={index} className={styles.facultyInfo}>
          <div className={styles.facultyPhoto}>
            <img src={faculty.image} alt={faculty.name} />
          </div>
          <div className={styles.facultyDetails}>
            <h2>{faculty.name}</h2>
            <p>{faculty.title}</p>
            <p>{faculty.department}</p>
            <p>{faculty.institution}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faculty;
