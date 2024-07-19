// import React from 'react'
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { NavLink } from "react-router-dom";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <div className={styles.main}>
                <div className={styles.box}>
                    <div className={styles.inner_box}>
                        <p className={styles.heading}>About Us</p>
                        <span className={styles.line}></span>
                    </div>
                    <p className={styles.para}>Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.</p>
                    <div className={styles.logo}>
                        <span>
                            <FacebookOutlinedIcon className={styles.logo1} />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faTwitter} size="2x" className={styles.logo1} />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faGoogle} size="2x" className={styles.logo1} />
                        </span>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.inner_box}>
                        <p className={styles.heading}>Quick Links</p>
                        <span className={styles.line}></span>
                    </div>
                    <ul className={styles.points}>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>services</li>
                        <li>Our Cases</li>
                        <NavLink to='/' className={styles.nav_link}><li>Back to Login</li></NavLink>
                    </ul>
                </div>
                <div className={styles.box}>
                    <div className={styles.inner_box}>
                        <p className={styles.heading}>Queries</p>
                        <span className={styles.line}></span>
                    </div>
                    <ul className={styles.points}>
                        <li>Consuling</li>
                        <li>Finance</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className={styles.box}>
                    <div className={styles.inner_box}>
                        <p className={styles.heading}>Newsletter</p>
                        <span className={styles.line}></span>
                    </div>
                    <p className={styles.para}>subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                    <div className={styles.email}><input type="email" placeholder="Email Address" /><SendOutlinedIcon className={styles.sent} /></div>
                </div>
            </div>
            <div className={styles.foot}>
                <p>
                    © Copyright {year} | All Rights Reserved by Mediplus
                </p>
            </div>
        </>
    )
}

export default Footer
