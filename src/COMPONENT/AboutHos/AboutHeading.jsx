// import React from 'react'
import Section from "/ABOUT/section-img.png";
import styles from "./MergeAbout.module.css";
function AboutHeading() {
    return (
        <div className={styles.main_heading}>
            <p className={styles.head}>We Are Always Ready To Help You & Your Family</p>
            <img src={Section} alt="" />
            <div className={styles.para}>
                <p>To keep the body in good health is a duty, otherwise we shall not be able to keep our mind strong and clear.
                    is not valued until sickness comes. Remember to take care of yourself.
                    you cannot pour from an empty cup.
                </p>
            </div>
        </div>
    )
}

export default AboutHeading;
