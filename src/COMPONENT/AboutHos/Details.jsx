// import React from 'react'
import styles from "./Details.module.css";
import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useEffect, useState } from "react";
function Details() {
    const [patientCount, setPatientCount] = useState(4000);
    useEffect(() => {
        const interval = setInterval(() => {
            setPatientCount(prevCount => prevCount + 10);
        }, 2000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className={styles.main_div}>
            <div className={styles.innerbox}>
                <div className={styles.box}>
                    <div className={styles.photo}>
                        <HouseIcon className={styles.logo} />
                    </div>
                    <div className={styles.count}>
                        <p className={styles.number}>3468</p>
                        <p className={styles.heading}>Hospital Rooms</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.photo}>
                        <PersonIcon className={styles.logo} />
                    </div>
                    <div className={styles.count}>
                        <p className={styles.number}>550</p>
                        <p className={styles.heading}>Specialist Doctors</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.photo}>
                        <SentimentSatisfiedAltIcon className={styles.logo} />
                    </div>
                    <div className={styles.count}>
                        <p className={styles.number}>{patientCount}</p>
                        <p className={styles.heading}>Happy Patients</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.photo}>
                        <CalendarMonthIcon className={styles.logo} />
                    </div>
                    <div className={styles.count}>
                        <p className={styles.number}>34</p>
                        <p className={styles.heading}>Years of Experience</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
