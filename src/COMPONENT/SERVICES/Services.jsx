
import styles from "./Services.module.css";
import Section from "/ABOUT/section-img.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faTooth, faEarListen, faEye, faHeartPulse, faDroplet } from '@fortawesome/free-solid-svg-icons';

function Services() {
    const treat = [
        {
            logo: <FontAwesomeIcon icon={faClipboardList} />,
            heading: "General Treatment",
            para: `From routine check-ups and preventive care to the 
            management of chronic illnesses and acute medical issues, 
            we are committed to ensuring you receive the best possible 
            treatment.`,
        },
        {
            logo: <FontAwesomeIcon icon={faTooth} />,
            heading: "Teeth Whitening",
            para: `Our expert dental team uses the latest techniques and 
            technologies to provide safe and effective whitening treatments 
            that remove stains and discoloration.`,
        },
        {
            logo: <FontAwesomeIcon icon={faEarListen} />,
            heading: "Ear Treatment",
            para: `We offer comprehensive care for conditions such as ear 
            infections, hearing loss, tinnitus (ringing in the ears), 
            balance disorders, and earwax impaction.`,
        },
        {
            logo: <FontAwesomeIcon icon={faEye} />,
            heading: "Vision Problems",
            para: `We specialize in the treatment of common vision problems such 
            as nearsightedness (myopia), farsightedness (hyperopia), astigmatism, 
            and presbyopia.`,
        },
        {
            logo: <FontAwesomeIcon icon={faHeartPulse} />,
            heading: "Heart Surgery",
            para: `Our team of highly skilled cardiothoracic surgeons and medical 
            professionals is dedicated to providing the highest level of care 
            using the latest surgical techniques and technologies.`,
        },
        {
            logo: <FontAwesomeIcon icon={faDroplet} />,
            heading: "Blood Transfusion",
            para: `Blood transfusions are critical for various medical conditions 
            and procedures, including surgery, trauma, anemia, cancer treatments, 
            and chronic blood disorders.`,
        },
    ];

    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <p className={styles.heading1}>We Offer Different Services To Improve Your Health</p>
                <div className={styles.photo}>
                    <img src={Section} alt="" />
                </div>
                <p className={styles.para}>
                    Our hospital is dedicated to providing a comprehensive range of healthcare services to meet the diverse needs of our patients. Whether you require routine check-ups, emergency care, or specialized treatments, our team of skilled professionals is here to ensure you receive the highest standard of care.
                </p>
            </div>
            <div className={styles.treatment}>
                {treat.map((value, i) => (
                    <div key={i} className={styles.box}>
                        <div className={styles.logo}>
                            {value.logo}
                        </div>
                        <div className={styles.about}>
                            <p className={styles.heading2}>{value.heading}</p>
                            <p className={styles.para2}>{value.para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
