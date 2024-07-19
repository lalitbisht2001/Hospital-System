import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { dba } from '/src/firebasepatientdata';
import styles from "./FormD.module.css";

function FetchDoctor() {
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
            <div className={styles.fetch_main}>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Doctor Name</th>
                            <th>Age</th>
                            <th>Experience</th>
                            <th>Address</th>
                            <th>Phone No.</th>
                            <th>Gender</th>
                            <th>Field Of Health</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {doctor.map((doctors) => (
                            <tr key={doctors.id}>
                                <td>{doctors.doctorName}</td>
                                <td>{doctors.age}</td>
                                <td>{doctors.experience}</td>
                                <td>{doctors.address}</td>
                                <td>{doctors.phone}</td>
                                <td>{doctors.gender}</td>
                                <td>{doctors.fieldOfHealth}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default FetchDoctor;
