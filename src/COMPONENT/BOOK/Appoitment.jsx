// import React from 'react'
import styles from "./Appoitment.module.css";
import Section from "/ABOUT/section-img.png";
import Photo from "/NEWS/contact-img.png";
import Button from '@mui/material/Button';
function Appoitment() {
    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <p>
                    We Are Always Ready To Help You. Book An Appointment
                </p>
                <img src={Section} alt="" />
            </div>
            <div className={styles.form_div}>
                <form className={styles.form}>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Phone" />
                    <input type="email" placeholder="Email" />
                    <select name="department" className="selector" >
                        <option>Department</option>
                        <option value="">Cardiac Clinic</option>
                        <option value="">Neurology</option>
                        <option value="">Dentistry</option>
                        <option value="">Gastroenterology</option>
                    </select>
                    <select name="Doctor" className="doctor" >
                        <option>Doctor</option>
                        <option value="">Dr.Arjun Badyari</option>
                        <option value="">Dr.Priya Rawat</option>
                        <option value="">Dr.Gaurav Joshi</option>
                    </select>
                    <input type="date" />
                    <div>
                        <textarea name="textarea" cols="60" rows="9" placeholder="Write Your Message Here">
                        </textarea>
                    </div>
                    <Button variant="contained" className={styles.btn1}>Book An Appoitment</Button>
                    <p>(we will be confirm by an text Message)</p>
                </form>
                <div className={styles.photo}>
                    <img src={Photo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Appoitment;
