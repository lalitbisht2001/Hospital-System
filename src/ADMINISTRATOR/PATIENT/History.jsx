import styles from "./History.module.css";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '/src/firebasepatientdata';
import PatientData from "./PatientData";
import NavbarA from "../HEADER/NavbarA";
import Footer from "../FOOTER/Footer";


function History() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "patient"));
        const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        console.log("Fetched Data:", data);
        setPatients(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavbarA />
      <PatientData />
      <div className={styles.main}>
        <div className={styles.innerdiv}>
          <table border='1'>
            <thead>
              <tr>
                <th>Patient Id</th>
                <th>Patient First Name</th>
                <th>Patient Last Name</th>
                <th>Phone No.</th>
                <th>Sex</th>
                <th>Date of Checkup</th>
                <th>DOB</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.cardno}</td>
                  <td>{patient.firstname}</td>
                  <td>{patient.secondname}</td>
                  <td>{patient.phone}</td>
                  <td>{patient.sex}</td>
                  <td>{patient.date}</td>
                  <td>{patient.dob}</td>
                  <td>{patient.address}</td>
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

export default History
