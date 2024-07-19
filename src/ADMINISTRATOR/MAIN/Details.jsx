import style from "./Details.module.css";
import Image1 from "/ADMIN/tab4.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faProcedures, faExchangeAlt, faHospital } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import Image2 from "/ADMIN/laboratory-1.png";
import Image3 from "/ADMIN/user-friendly.png";
import Image4 from "/ADMIN/UNITED.png";
import Image5 from "/ADMIN/tele.jpg";
function Details() {
    const [user, setUser] = useState(26000);
    const [money, setMoney] = useState(10);
    useEffect(() => {
        const interval = setInterval(() => {
            setUser(prev => prev + 10);
            setMoney(prev => prev + 5);
        }, 2000);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className={style.main}>
            <div className={style.heading}>
                <p>Easy HMS for <span>Ophthalmology</span></p>
            </div>
            <div className={style.block1}>
                <img src={Image1} alt="" />
                <div className={style.para1}>
                    <p>
                        The most stressful and challenging responsibilities in ophthalmology are treating patients, creating treatment programs, and writing prescriptions. The Ophthalmology EMR System can help ophthalmologists manage their
                        workflows more efficiently because it saves time and money. This tool helps with the best possible clinical and administrative tasks. Even renowned ophthalmologists occasionally experience entrepreneurial
                        difficulties. This system helps clinicians maximize the performance of their team members in order to offer the best possible patient care. By improving patient flow and enhancing patient satisfaction, it improves their revenue.
                    </p>
                </div>
            </div>
            <div className={style.counter}>
                <div className={style.box1}>
                    <span className={style.logo}><FontAwesomeIcon icon={faProcedures} /></span>
                    <div className={style.innerbox}>
                        <p className={style.count}>10 crore + </p>
                        <p className={style.name}>Patients</p>
                    </div>
                </div>
                <div className={style.box1}>
                    <span className={style.logo}><FontAwesomeIcon icon={faUserMd} /></span>
                    <div className={style.innerbox}>
                        <p className={style.count}>{user} + </p>
                        <p className={style.name}>Users</p>
                    </div>
                </div>
                <div className={style.box1}>
                    <span className={style.logo}><FontAwesomeIcon icon={faExchangeAlt} /></span>
                    <div className={style.innerbox}>
                        <p className={style.count}>{money} Crore+</p>
                        <p className={style.name}>Transaction</p>
                    </div>
                </div>
                <div className={style.box1}>
                    <span className={style.logo}><FontAwesomeIcon icon={faHospital} /></span>
                    <div className={style.innerbox}>
                        <p className={style.count}>650 +</p>
                        <p className={style.name}>Hospitals</p>
                    </div>
                </div>
            </div>
            <div className={style.block1}>
                <div className={style.para2}>
                    <h3>Laboratory</h3>
                    <p>
                        An element or function known as a `laboratory module` in EMR software enables healthcare professionals to organize and access data pertaining to laboratory tests and results inside the electronic medical record system. An EMR system`s laboratory module is essential because laboratory tests are important for identifying and keeping track of patient problems. Enhancing patient care and safety while reducing administrative procedures for healthcare providers is possible through effective management of this data within the EMR Software for Ophthalmology.
                    </p>
                </div>
                <img src={Image2} alt="" />
            </div>
            <div className={style.block1}>
                <img src={Image3} alt="" />
                <div className={style.para2}>
                    <h3>User <span>Friendly</span></h3>
                    <p>
                        A user-friendly module is a particular feature or component of EMR Software for Ophthalmology that is intended to be simple to use, intuitive, and user-friendly for healthcare professionals who deal with the system frequently, such as doctors, nurses, and office staff. The main objective of user-friendly modules is to make it easier to record, access, and manage patient health information, which will ultimately lead to better patient care and more effective workflow. A user-friendly Eye EMR improves efficiency, reduces errors, enhances patient care, and minimizes staff learning curve, requiring continuous feedback and involvement from end-users.
                    </p>
                </div>
            </div>
            <div className={style.block1}>
                <div className={style.para2}>
                    <h3>Seamless <span>Integration</span></h3>
                    <p>
                    Patient management system for ophthalmology utilize 24x7 bots to effectively communicHospital management software applications integrate 24x7 bots, automated chatbots, to enhance patient communication and efficiency. These bots send notifications, alerts, and reminders via various channels, promoting a patient-centric approach. This allows healthcare providers to reach individuals through their preferred means, improving the overall patient experience and effective information dissemination.
                    </p>
                </div>
                <img src={Image4} alt="" />
            </div>
            <div className={style.block1}>
                <img src={Image5} alt="" />
                <div className={style.para2}>
                    <h3>Tele <span>Consultation</span></h3>
                    <p>
                    The COVID-19 pandemic has accelerated the use of tele-consultation, particularly in ophthalmology. Centralized emr for eye software has been used to facilitate remote consultations, enhancing diagnosis accuracy and continuity of care. Medical management system for ophthalmology have also been integrated to streamline the process, promoting a more patient-centered approach to ophthalmic healthcare delivery. This integration not only addresses pandemic challenges but also improves accessibility and quality of care.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Details
