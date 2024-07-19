import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { dba } from '/src/firebasepatientdata';
import styles from "./MainDoctor.module.css";
import Navbar from '../NAVBAR/Navbar';
import Footer from '../FOOTER/Footer';

function MainDoctor() {
    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(dba, "doctors"));
                const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setDoctor(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <Navbar />
            <div className={styles.main}>
                <div className={styles.divmain}>
                    <div className={styles.boxheading}>
                        <div className={styles.boxhead}>
                            <span>Doctor Name</span>
                            <span>Field of Health</span>
                            <span>Phone Number</span>
                        </div>
                    </div>
                    <div className={styles.doctordata}>
                        {
                            doctor.map((value, i) => (
                                <div key={i} className={styles.box}>
                                    <span>{value.doctorName}</span>
                                    <span>{value.fieldOfHealth}</span>
                                    <span>{value.phone}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MainDoctor
