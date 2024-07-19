import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "/logo.png";
import Button from '@mui/material/Button';

function Navbar() {
    return (
        <div className={styles.main}>
            <img src={logo} alt="reloading.." />
            <ul>
                <NavLink to='/user' className={styles.nav_link}><li>Home</li></NavLink>
                <NavLink to='/user/userdoctor' className={styles.nav_link}><li>Doctor</li></NavLink>
                <li>Services</li>
                <li>Blogs</li>
                <li>Contact us</li>
            </ul>
            <NavLink to="/user/form" ><Button variant="contained" className={styles.btn}>Book Appointment</Button></NavLink>
        </div>
    );
}

export default Navbar;
