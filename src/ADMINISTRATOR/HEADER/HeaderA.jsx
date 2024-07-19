import styles from "./HeaderA.module.css";
import Photo from "/ADMIN/Header.jpg";
import Button from '@mui/material/Button';
import { NavLink } from "react-bootstrap";

function HeaderA() {
    return (
        <div className={styles.main}>
            <img src={Photo} alt="" />
            <div className={styles.heading}>
                <p className={styles.heading1}>Bringing The Future of Healthcare</p>
                <p className={styles.heading2}>Deep created replenish herb without night fruit day earth evening Called his green were they`re fruitful to over Sea bearing sixth Earth face. Them lesser great you`ll second</p>
                <NavLink to="/form" className={styles.btn}><Button variant="contained" className={styles.btn1}>Appointement</Button></NavLink>
            </div>
        </div>
    )
}

export default HeaderA;
