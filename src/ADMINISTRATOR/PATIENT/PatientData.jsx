import styles from "./Patient.module.css";
import { NavLink } from "react-router-dom";
function PatientData() {
    return (
        <div className={styles.main}>
            <div className={styles.box}>
                <NavLink to='/doctor/patient/history' className={styles.link}>
                    <span >Registration Data</span>
                </NavLink>
                <NavLink to='/doctor/patient/searchpatient' className={styles.link}>
                    <span>Patient Data (History)</span>
                </NavLink>
                <NavLink to='/doctor/patient/currentpatient' className={styles.link}>
                    <span>Today`s Patient List</span>
                </NavLink>
            </div>
        </div>
    )
}

export default PatientData
