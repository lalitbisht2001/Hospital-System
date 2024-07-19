// import React from 'react'
import styles from "./News.module.css";
import Section from "/ABOUT/section-img.png";
import photo1 from "/NEWS/blog1.jpg";
import photo2 from "/NEWS/blog2.jpg";
import photo3 from "/NEWS/blog3.jpg";
function News() {
    return (
        <div className={styles.main}>
            <div className={styles.first_main}>
                <p className={styles.head1}>Keep Up With Our Most Recent Medical News.</p>
                <div className={styles.img}>
                    <img src={Section} alt="" />
                </div>
                <p className={styles.head2}>Through our newsletters, social media updates, and dedicated patient resources, we aim to bridge the gap between medical expertise and patient understanding.</p>
            </div>
            <div className={styles.second_main}>
                <div className={styles.big_box}>
                    <div className={styles.photo}>
                        <img src={photo1} alt="" />
                    </div>
                    <div className={styles.box}>
                        <span>22 May 2024</span>
                        <p className={styles.head1}>We have annouced our new product</p>
                        <p className={styles.head2}>Lorem Ipsum Dolor A Sit Ameti, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Incididunt Sed.</p>
                    </div>
                </div>
                <div className={styles.big_box}>
                    <div className={styles.photo}>
                        <img src={photo2} alt="" />
                    </div>
                    <div className={styles.box}>
                        <span>2 June 2024</span>
                        <p className={styles.head1}>Top five way for solving teeth problem</p>
                        <p className={styles.head2}>Lorem Ipsum Dolor A Sit Ameti, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Incididunt Sed.</p>
                    </div>
                </div>
                <div className={styles.big_box}>
                    <div className={styles.photo}>
                        <img src={photo3} alt="" />
                    </div>
                    <div className={styles.box}>
                        <span>12 July 2024</span>
                        <p className={styles.head1}>We provide highly business solutions</p>
                        <p className={styles.head2}>Lorem Ipsum Dolor A Sit Ameti, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Incididunt Sed.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;
