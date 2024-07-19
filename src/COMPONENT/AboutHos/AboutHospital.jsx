// import React from 'react'
import styles from "./MergeAbout.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMedical, faStethoscope, faUserMd } from '@fortawesome/free-solid-svg-icons';
function AboutHospital() {
  return (
    <div className={styles.main_hos}>
      <div className={styles.box}>
        <div className={styles.symbol}>
          <FontAwesomeIcon icon={faTruckMedical} className={styles.logo} />
        </div>
        <span className={styles.heading_logo}>
          Emergency Help
        </span>
        <p className={styles.about_hos}>
          In times of crisis, every moment counts. Our dedicated emergency team is ready to provide immediate, high-quality medical care around the clock.
        </p>
      </div>
      <h3>.....................</h3>
      <div className={styles.box}>
        <div className={styles.symbol}>
          <FontAwesomeIcon icon={faStethoscope} className={styles.logo} />
        </div>
        <span className={styles.heading_logo}>
          Enriched Pharmecy
        </span>
        <p className={styles.about_hos}>
          Trust our pharmacy for comprehensive and reliable service, dedicated to enhancing your well-being.
        </p>
      </div>
      <h3>..........................</h3>
      <div className={styles.box}>
        <div className={styles.symbol}>
          <FontAwesomeIcon icon={faUserMd} className={styles.logo} />
        </div>
        <span className={styles.heading_logo}>
          Medical Treatment
        </span>
        <p className={styles.about_hos}>
          Whether you require routine check-ups,or emergency services, trust us to deliver comprehensive and effective medical treatment that puts your health first.
        </p>
      </div>
    </div>
  )
}

export default AboutHospital;
