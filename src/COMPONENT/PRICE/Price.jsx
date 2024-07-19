import Section from "/ABOUT/section-img.png";
import styles from "./Price.module.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
function Price() {

    const price = [
        {
            logo: <FontAwesomeIcon icon={faHeart} />,
            name: "Heart Surgery",
            prices: "$150 ",
            about1: "Advanced Surgical Techniques",
            about2: "Comprehensive Cardiac Care",
            about3: "Post-Operative Support",
            about4: "Skilled Cardiothoracic Surgeons",
        },
        {
            logo: <FontAwesomeIcon icon={faEye} />,
            name: "Vision Problems",
            prices: "$80",
            about1: "Nearsightedness (Myopia)",
            about2: "Farsightedness (Hyperopia)",
            about3: "Astigmatism",
            about4: "Advanced Eye Care",
        },
        {
            logo: <FontAwesomeIcon icon={faTooth} />,
            name: "Teeth Whitening",
            prices: "$150",
            about1: "Expert Dental Team",
            about2: "Discoloration Removal",
            about3: "Remove Stains",
            about4: "Advanced Techniques",
        }
    ];

    return (
        <div className={styles.main}>
            <div className={styles.first_main}>
                <p className={styles.first_heading}>
                    We Provide You The Best Treatment In Reasonable Price
                </p>
                <img src={Section} alt="Section" />
                <p className={styles.first_para}>
                    From the moment you walk through our doors, you`ll experience our dedication to your well-being. We`re here to provide you and your loved ones with the best treatment options, ensuring your health is always our top priority.
                </p>
            </div>
            <div className={styles.second_main}>
                {price.map((value, i) => (
                    <div key={i} className={styles.priceItem}>
                        <div className={styles.logo}>{value.logo}</div>
                        <div className={styles.name}>{value.name}</div>
                        <div className={styles.price}>{value.prices}<span>/ Per Visit</span></div>
                        <div className={styles.about}>
                            <p>{value.about1}<CheckCircleOutlineIcon className={styles.check}/></p>
                            <p>{value.about2}<CheckCircleOutlineIcon className={styles.check}/></p>
                            <p>{value.about3}<CheckCircleOutlineIcon className={styles.check}/></p>
                            <p>{value.about4}<CheckCircleOutlineIcon className={styles.check}/></p>
                        </div>
                        <Button variant="outlined"><NavLink to='/user/form' className={styles.NavLink}>Book Now</NavLink></Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Price;
