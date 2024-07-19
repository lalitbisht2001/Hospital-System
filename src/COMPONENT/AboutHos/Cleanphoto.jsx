import { useState, useEffect } from 'react';
import Section from "/ABOUT/section-img.png";
import styles from "./Cleanphoto.module.css";
import Photo1 from "/PHOTO/pf1.jpg";
import Photo2 from "/PHOTO/pf2.jpg";
import Photo3 from "/PHOTO/pf3.jpg";
import Photo4 from "/PHOTO/pf4.jpg";
import Button from '@mui/material/Button';

function Cleanphoto() {
    const photos = [Photo1, Photo2, Photo3, Photo4];
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [photos.length]);

    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <p className={styles.heading1}>
                    We Maintain Cleanliness Rules Inside Our Hospital
                </p>
                <img src={Section} alt="" />
                <p className={styles.para}>
                    Our hospital is committed to maintaining impeccable cleanliness for the health and safety of everyone.
                    Maintaining cleanliness is our priority for your safety.
                </p>
            </div>
            <div className={styles.photoWrapper}>
                {[0, 1, 2, 3].map((offset) => (
                    <div key={offset} className={styles.phototContainer}>
                        <img src={photos[(currentPhotoIndex + offset) % photos.length]} alt={`Slide ${offset + 1}`} />
                        <div className={styles.front}>
                            <Button variant="contained" className={styles.btn1}>View Details</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cleanphoto;
