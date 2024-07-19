// import React from 'react';
import styles from './Timebox.module.css';
// import { NavLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Timebox({ TimeBox }) {
    return (
        <div className={styles.box}>
            {TimeBox.map((value, i) => (
                <div className={styles.main} key={i}>
                    <p className={styles.heading}>{value.heading}</p>
                    {value.heading === 'Opening Hours' ? (
                        <pre className={styles.para}>{value.para}</pre>
                    ) : (
                        <p className={styles.para}>{value.para}</p>
                    )}
                    {/* <NavLink to={value.link} className={styles.link}>LEARN MORE</NavLink> */}
                    <span className={styles.learn_more}>LEARN MORE <ArrowForwardIcon /></span>
                </div>
            ))}
        </div>
    );
}

export default Timebox;
