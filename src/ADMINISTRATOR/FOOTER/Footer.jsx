import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className={styles.main}>
            <div className={styles.block1}>
                <div className={styles.box}>
                    <p className={styles.heading}>Quick Links</p>
                    <div className={styles.innerbox}>
                        <ul>
                            <NavLink to='/' className={styles.navlink}><li>Home</li></NavLink>
                            <NavLink to='/' className={styles.navlink}><li>Features</li></NavLink>
                            <NavLink to='/' className={styles.navlink}><li>About us</li></NavLink>
                            <NavLink to='/' className={styles.navlink}><li>Back to Sign up</li></NavLink>
                        </ul>
                        <ul>
                            <li>Specialty</li>
                            <li>Benefits</li>
                            <li>Other Products</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.box}>
                    <p className={styles.heading}>Features</p>
                    <ul>
                        <li>E-Presc/ EMR/EHR with Digital Pen</li>
                        <li>Specialty EHR Modules</li>
                        <li>Integrated Online Appointments</li>
                    </ul>
                    <div className={styles.icon}>
                        <div className={styles.iconbox}><FontAwesomeIcon icon={faFacebook} /></div>
                        <div className={styles.iconbox}><FontAwesomeIcon icon={faInstagram} /></div>
                        <div className={styles.iconbox}><FontAwesomeIcon icon={faLinkedin} /></div>
                        <div className={styles.iconbox}><FontAwesomeIcon icon={faYoutube} /></div>
                    </div>
                </div>
                <div className={styles.lastbox}>
                    <p className={styles.heading}>
                        More About Us
                    </p>
                    <p className={styles.para} >
                        All our services are rendered as per the specifications and requirements detailed by the customers. These services are widely acclaimed by the customers due to their promptness, flexibility, timely execution and cost-effectiveness.
                    </p>
                </div>
            </div>
            <div className={styles.block2}>
                <pre>Copyright <span>{year}</span> Easy solution. All Rights Reserved.</pre>
            </div>
        </div>
    )
}

export default Footer;
