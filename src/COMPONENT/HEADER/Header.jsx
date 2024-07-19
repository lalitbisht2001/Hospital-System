import Slide1 from "/SLIDE/slide1.jpg";
import Slide2 from "/SLIDE/slide2.jpg";
import Slide3 from "/SLIDE/slide3.jpg";
import styles from "./Header.module.css";
import { useEffect } from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import Timebox from "./Timebox";

function Header() {
  const photos = [
    {
      image: Slide1,
    },
    {
      image: Slide2,
    },
    {
      image: Slide3,
    },
  ];

  const TimeBox = [
    {
      heading: "Emergency Cases",
      para: `In emergency cases, every second counts. 
      Our expert medical team is dedicated to 
      providing immediate and compassionate care, 
      ensuring you receive the best possible treatment 
      when you need it most.`,
      link: ""
    },
    {
      heading: "Doctors Timetable",
      para: `Stay informed with our comprehensive doctors' 
      timetable. Our team of dedicated specialists is 
      available to provide you with top-quality care, 
      tailored to fit your schedule and medical needs.`,
      link: ""
    },
    {
      heading: "Opening Hours",
      para: `Monday - Friday   8:00am - 2:00pm
Saturday          9:00am - 4:00pm
Sunday            9:00am - 12:30pm
      `,
      link: ""
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className={styles.main_box}>
      <div className={styles.main_photo}>
        <img src={photos[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <div className={styles.heading}>
        <div className={styles.inner_heading}>
          <p className={styles.head_1}>We Provide <span>Medical</span> Services</p>
          <p className={styles.head_1}>That You Can <span>Trust!</span></p>
        </div>
        <p className={styles.heading2}>
          Committed to your wellbeing with excellence in every service. Your health, our highest priority.
        </p>
        <div className={styles.btn}>
          <Button variant="contained" className={styles.btn1}>Get Appointement</Button>
          <Button variant="contained" className={styles.btn2}>Learn More</Button>
        </div>
      </div>
      <Timebox TimeBox={TimeBox} />
    </div>
  );
}

export default Header;

