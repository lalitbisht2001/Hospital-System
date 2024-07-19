import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../FOOTER/Footer";
import Navbar from "../NAVBAR/Navbar";
import styles from "./Form.module.css";
import Photo from "/Form.png";
import Button from '@mui/material/Button';
import { db } from "/src/firebasepatientdata";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

function Form() {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    const [data, setData] = useState({
        firstname: '',
        secondname: '',
        dob: '',
        sex: '',
        height: '',
        weight: '',
        marital: '',
        phone: '',
        email: '',
        address: '',
        cardno: '',
        problem: '',
        date: date,
        time: time,
        adharno: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const generateUniqueCardNo = async () => {
        let unique = false;
        let cardNo;
        const patientCollectionRef = collection(db, "patient");

        while (!unique) {
            cardNo = Math.floor(Math.random() * (9999 - 100 + 1)) + 100;
            const q = query(patientCollectionRef, where("cardno", "==", cardNo));
            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                unique = true;
            }
        }
        return cardNo.toString();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const patientCardNo = await generateUniqueCardNo();
            const newData = { ...data, cardno: patientCardNo };

            const patientCollectionRef = collection(db, "patient");
            await addDoc(patientCollectionRef, newData);
            setData({
                firstname: '',
                secondname: '',
                dob: '',
                sex: '',
                height: '',
                weight: '',
                marital: '',
                phone: '',
                email: '',
                address: '',
                cardno: '',
                problem: '',
                date: date,
                time: time,
                adharno: '',
            });

            navigate('/user');
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("There was an error submitting the data.");
        }
    };

    return (
        <div>
            <Navbar />
            <div className={styles.main}>
                <div className={styles.first_main}>
                    <img src={Photo} alt="Form Logo" className={styles.logo} />
                    <div className={styles.para}>
                        <p className={styles.p}>
                            The best way to find yourself is to lose yourself in the service of others.
                        </p>
                        <p className={styles.name}>— Mahatma Gandhi</p>
                    </div>
                </div>
                <div className={styles.second_main}>
                    <div className={styles.photo}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.form_div}>
                                <div className={styles.form_innerdiv}>
                                    <p>First Name</p>
                                    <input name="firstname" value={data.firstname} onChange={handleChange} placeholder="First Name" />
                                </div>
                                <div className={styles.form_innerdiv}>
                                    <p>Second Name</p>
                                    <input name="secondname" value={data.secondname} onChange={handleChange} placeholder="Second Name" />
                                </div>
                            </div>
                            <div className={styles.form_div}>
                                <div className={styles.form_innerdiv}>
                                    <p>Date of Birth</p>
                                    <input type="date" name="dob" value={data.dob} onChange={handleChange} placeholder="MM-DD-YYYY" />
                                </div>
                                <div className={styles.form_innerdiv}>
                                    <p>Sex</p>
                                    <select name="sex" value={data.sex} onChange={handleChange}>
                                        <option value=''>Please Select</option>
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                        <option value='Other'>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.form_div}>
                                <div className={styles.form_innerdiv}>
                                    <p>Height (Centimeters)</p>
                                    <input name="height" value={data.height} onChange={handleChange} />
                                </div>
                                <div className={styles.form_innerdiv}>
                                    <p>Weight (Kilograms)</p>
                                    <input type="text" name="weight" value={data.weight} onChange={handleChange} />
                                </div>
                            </div>
                            <div className={styles.form_div}>
                                <div className={styles.form_innerdiv}>
                                    <p>Marital Status</p>
                                    <input type="text" name="marital" value={data.marital} onChange={handleChange} />
                                </div>
                                <div className={styles.form_innerdiv}>
                                    <p>Contact Number</p>
                                    <input type="text" name="phone" value={data.phone} onChange={handleChange} placeholder="(000) 000-0000" />
                                </div>
                            </div>
                            <div className={styles.form_div}>
                                <div className={styles.form_innerdiv}>
                                    <p>Email</p>
                                    <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="ex: myname@example.com" />
                                </div>
                                <div className={styles.form_innerdiv}>
                                    <p>Address</p>
                                    <input type="text" name="address" value={data.address} onChange={handleChange} />
                                </div>
                            </div>
                            <div className={styles.form_div}>
                                <div className={styles.form_innerdiv}>
                                    <p>Adhar Card No.</p>
                                    <input type="text" name="adharno" value={data.adharno} onChange={handleChange} placeholder="last 4 digit (0000) " />
                                </div>
                                <div className={styles.form_innerdiv}>
                                    <p>Disease (Problem)</p>
                                    <select name="problem" value={data.problem} onChange={handleChange}>
                                        <option value=''>Please Select</option>
                                        <option value='Headache'>Headache</option>
                                        <option value='Eye Fly'>Eye Fly</option>
                                        <option value='Heart Attack'>Heart Attack</option>
                                        <option value='Cold'>Cold</option>
                                        <option value='Fever'>Fever</option>
                                        <option value='Diabetes'>Diabetes</option>
                                        <option value='Asthma'>Asthma</option>
                                        <option value='Back Pain'>Back Pain</option>
                                        <option value='Joint Pain'>Joint Pain</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.btn_div}>
                                <Button type="submit" variant="contained" className={styles.btn}>Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Form;
