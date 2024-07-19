import { NavLink } from "react-router-dom";
import styles from "./NavbarA.module.css";
import Logo from "/logo.png";
function NavbarA() {
    return (
        <nav className={styles.navbar}>
            <img src={Logo} alt="" />
            <ul className={styles.link}>
                <NavLink to='/doctor' className={styles.nav_link}><li>Home</li></NavLink>
                <NavLink to='/doctor/patient' className={styles.nav_link}><li>Patient</li></NavLink>
                <NavLink to='/doctor/formd' className={styles.nav_link}><li>Doctor</li></NavLink>
                <NavLink to='' className={styles.nav_link}><li>Employee</li></NavLink>
                <NavLink to='/doctor/formd' className={styles.nav_link}><li>Manager</li></NavLink>  
            </ul>
            <span className={styles.btn}>Blogs</span>
        </nav>
    )
}

export default NavbarA;
