import React from "react";
import styles from "../styles/ComponentStyles/GraduatesList.module.css";

const highDistinctionGraduates = [
  "MD. MOFIZUR RAHMAN CHOWDHURY",
  "Mohammad Rasheduzzaman",
  "Dr. Md. Azizul Haque, MBBS DA",
  "Dr. Shahara Afroz MBBS, DA, MCPS",
  "Dr. Md. Mostafa Kamal MBBS, MD",
  "Riaz Ahmed Sakil, MBBS, FCGP, DA",
];

const otherGraduates = [
  "MUNNI AZAM MBBS DA",
  "TOUHIDUR RAHMAN MBBS DA",
  "Dr. Saikat Chakma MBBS DA",
  "DR. SABRINA AKHTER ONIA MBBS DA",
  "DR. ABUL KHAIR NAZRUL, MBBS, DA",
  "MD. KAMAL HOSSAIN",
  "Asmaul, MBBS DA",
  "OMAER Bin Atique MBBS, DA",
  "Dr. Md. Muinul Islam Shah MBBS, DA, FCPS",
  "NIRMAL KUMAR, MBBS DA",
  "DR. MD. MOSHARAF HOSSAIN MBBS, MD",
  "Asad Bin Taher MBBS, DA",
  "MD. MAHMUDUL HASAN MBBS, DA",
  "Dr. Mutasim Mehedi Masum, MBBS DA",
  "MD. ADNAN ARAFAT. MBBS DA.",
  "MD. ABDULLAH -HEL, MBBS DA",
  "Paula María del Carmen Gutiérrez Díaz",
  "MEHEDI HASAN, MBBS DA",
  "Ranajeet Kumar Mondal",
  "Dr.Rawnak, MBBS DA",
  "Dr. Md Zunaid, MBBS, MD, FIASP, FWFSA",
];

const GraduatesList: React.FC = () => {
  return (
    <div className={styles.graduates}>
      <h2>List of Graduates (2023-2024)</h2>

      <div className={styles.graduateSection}>
        <h3>Graduates with High Distinction ({">"}75% Score)</h3>
        <ul>
          {highDistinctionGraduates.map((graduate, index) => (
            <li key={index}>{graduate}</li>
          ))}
        </ul>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.graduateSection}>
        <h3>Other Graduates</h3>
        <ul>
          {otherGraduates.map((graduate, index) => (
            <li key={index}>{graduate}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GraduatesList;
