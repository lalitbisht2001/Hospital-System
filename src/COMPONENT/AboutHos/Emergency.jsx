import styles from "./Emergency.module.css";
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function Emergency() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.box}>
                    <div className={styles.heading}>
                        <p>
                            Do you need Emergency Medical
                            Care? Call @ 1234 56789
                        </p>
                    </div>
                    <p className={styles.para}>
                        Emergency health services are provided by hospitals, clinics, and emergency medical services (EMS) teams to address these critical situations promptly.
                    </p>
                    <div className={styles.btn}>
                        <Button variant="contained" className={styles.btn1}>Contact Now</Button>
                        <Button variant="outlined" className={styles.btn2}>Learn More <ArrowRightAltIcon /></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Emergency
