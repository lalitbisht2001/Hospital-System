import { useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '/src/firebasepatientdata';
import NavbarA from '../HEADER/NavbarA';
import PatientData from './PatientData';
import Footer from '../FOOTER/Footer';
import styles from "./SearchPatient.module.css";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchPatientByAdharno() {
    const [adharno, setAdharno] = useState('');
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);

    const handleSearch = async () => {
        try {
            const patientCollection = collection(db, "patient");
            const q = query(patientCollection, where('adharno', '==', adharno));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const patientData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setPatients(patientData);
                setSelectedPatient(patientData[0]);
            } else {
                setPatients([]);
                setSelectedPatient(null);
            }
        } catch (error) {
            console.error("Error fetching patient data:", error);
            setPatients([]);
            setSelectedPatient(null);
        }
    };

    return (
        <>
            <NavbarA />
            <PatientData />
            <div className={styles.main}>
                <div className={styles.heading}>
                    <p>Patient Details</p>
                </div>
                <div className={styles.searchbar}>
                    <input
                        type="text"
                        value={adharno}
                        onChange={(e) => setAdharno(e.target.value)}
                        placeholder="Enter Aadhaar number"
                    />
                    <button onClick={handleSearch} className={styles.button}>Search</button>
                </div>
                {selectedPatient && (
                    <div className={styles.box}>
                        <div className={styles.outerphoto}>
                            <div className={styles.photo}>
                                <FontAwesomeIcon icon={faUser} size="2x" className={styles.icon} />
                            </div>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.innerdetails}>
                                <div className={styles.data1}>
                                    <span className={styles.data2}>Name</span>
                                    <p>{selectedPatient.firstname} {selectedPatient.secondname}</p>
                                </div>
                                <div className={styles.data1}><span className={styles.data2}>DOB</span><p>{selectedPatient.dob}</p></div>
                                <div className={styles.data1}><span className={styles.data2}>Phone No</span><p>{selectedPatient.phone}</p></div>
                                <div className={styles.data1}><span className={styles.data2}>Sex</span><p>{selectedPatient.sex}</p></div>
                                <div className={styles.data1}><span className={styles.data2}>Email</span><p>{selectedPatient.email}</p></div>
                                <div className={styles.data1}><span className={styles.data2}>Marital</span><p>{selectedPatient.marital}</p></div>
                                <div className={styles.data1}><span className={styles.data2}>Address</span><p>{selectedPatient.address}</p></div>
                            </div>
                        </div>
                    </div>
                )}
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Check Up Dates</th>
                                <th>Problem</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient, i) => (
                                <tr key={i}>
                                    <td>{patient.date}</td>
                                    <td>{patient.problem}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SearchPatientByAdharno;
