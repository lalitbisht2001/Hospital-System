import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '/src/firebasepatientdata';
import style from "./SearchPatient.module.css";
import NavbarA from '../HEADER/NavbarA';
import Footer from '../FOOTER/Footer';
import PatientData from './PatientData';

function Current() {
    const [patientInfo, setPatientInfo] = useState([]);
    const [loading, setLoading] = useState(false);

    const getCurrentDate = () => {
        const today = new Date();
        const mm = today.getMonth() + 1;
        const dd = today.getDate();
        const yyyy = today.getFullYear();
        return `${mm}/${dd}/${yyyy}`;
    };

    const fetchDataForCurrentDate = async () => {
        setLoading(true);
        setPatientInfo([]);

        const currentDate = getCurrentDate();
        try {
            const patientCollection = collection(db, "patient");
            const q = query(patientCollection, where('date', '==', currentDate));
            const querySnapshot = await getDocs(q);

            const patients = [];
            querySnapshot.forEach(doc => {
                patients.push({ id: doc.id, ...doc.data() });
            });

            setPatientInfo(patients);
        } catch (error) {
            console.error("Error fetching patient data: ", error);
            setPatientInfo([{ error: "Error fetching patient data" }]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDataForCurrentDate();
    }, []);

    return (
        <>
            <NavbarA />
            <PatientData />
            <div className={style.main}>
                <p className={style.heading}>Today`s Patient Data</p>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className={style.result}>
                        {patientInfo.length === 0 ? (
                            <div>No data available for today</div>
                        ) : (
                            <table className={style.table}>
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Aadhaar Number</th>
                                        <th>Date Of Birth</th>
                                        <th>Sex</th>
                                        <th>Height</th>
                                        <th>Weight</th>
                                        <th>Address</th>
                                        <th>Problem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {patientInfo.map(patient => (
                                        <tr key={patient.id}>
                                            <td>{patient.firstname}</td>
                                            <td>{patient.secondname}</td>
                                            <td>{patient.adharno}</td>
                                            <td>{patient.dob}</td>
                                            <td>{patient.sex}</td>
                                            <td>{patient.height}</td>
                                            <td>{patient.weight}</td>
                                            <td>{patient.address}</td>
                                            <td>{patient.problem}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Current;
