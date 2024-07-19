import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FormD.module.css";
import Button from '@mui/material/Button';
import { dba } from "/src/firebasepatientdata";
import { collection, addDoc } from "firebase/firestore";
import Footer from "../FOOTER/Footer";
import NavbarA from "../HEADER/NavbarA";
import Photo from "/Doctor-form.png";
import FetchDoctor from "./FetchDoctor";
function FormD() {

    const [data, setData] = useState({
        doctorName: '',
        age: '',
        experience: '',
        address: '',
        phone: '',
        gender: '',
        fieldOfHealth: '',
        maritalStatus: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const doctorCollectionRef = collection(dba, "doctors");
            await addDoc(doctorCollectionRef, data);
            setData({
                doctorName: '',
                age: '',
                experience: '',
                address: '',
                phone: '',
                gender: '',
                fieldOfHealth: '',
                maritalStatus: '',
            });
            navigate('/doctor');
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <>
            <NavbarA />
            <div className={styles.main}>
                <div className={styles.first_main}>
                    <img src={Photo} alt="" />
                </div>
                <div className={styles.second_main}>
                    <div className={styles.heading}>
                        <p className={styles.main_head}>Application Form</p>
                        <p className={styles.subhead}>(Doctor Joining)</p>
                    </div>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.form_div}>
                            <div className={styles.form_innerdiv}>
                                <p>Doctor Name</p>
                                <input name="doctorName" value={data.doctorName} onChange={handleChange} placeholder="Doctor Name" />
                            </div>
                            <div className={styles.form_innerdiv}>
                                <p>Age</p>
                                <input name="age" value={data.age} onChange={handleChange} placeholder="Age" />
                            </div>
                        </div>
                        <div className={styles.form_div}>
                            <div className={styles.form_innerdiv}>
                                <p>Experience (years)</p>
                                <select name="experience" value={data.experience} onChange={handleChange}>
                                    <option value=''>Please Select</option>
                                    <option value='1-5'>1-5 years</option>
                                    <option value='6-10'>6-10 years</option>
                                    <option value='11-15'>11-15 years</option>
                                    <option value='16-20'>16-20 years</option>
                                    <option value='21+'>21+ years</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.form_div}>
                            <div className={styles.form_innerdiv}>
                                <p>Address</p>
                                <input name="address" value={data.address} onChange={handleChange} placeholder="Address" />
                            </div>
                            <div className={styles.form_innerdiv}>
                                <p>Phone Number</p>
                                <input name="phone" value={data.phone} onChange={handleChange} placeholder="(000) 000-0000" />
                            </div>
                        </div>
                        <div className={styles.form_div}>
                            <div className={styles.form_innerdiv}>
                                <p>Gender</p>
                                <select name="gender" value={data.gender} onChange={handleChange}>
                                    <option value=''>Please Select</option>
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                    <option value='Other'>Other</option>
                                </select>
                            </div>
                            <div className={styles.form_innerdiv}>
                                <p>Field of Health</p>
                                <select name="fieldOfHealth" value={data.fieldOfHealth} onChange={handleChange}>
                                    <option value=''>Please Select</option>
                                    <option value='Cardiology'>Cardiology</option>
                                    <option value='Neurology'>Neurology</option>
                                    <option value='Orthopedics'>Orthopedics</option>
                                    <option value='Pediatrics'>Pediatrics</option>
                                    <option value='General Practice'>General Practice</option>
                                    <option value='Other'>Other</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.form_div}>
                            <div className={styles.form_innerdiv}>
                                <p>Marital Status</p>
                                <select name="maritalStatus" value={data.maritalStatus} onChange={handleChange}>
                                    <option value=''>Please Select</option>
                                    <option value='Single'>Single</option>
                                    <option value='Married'>Married</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.btn_div}>
                            <Button type="submit" variant="contained" className={styles.btn}>Submit</Button>
                        </div>
                    </form>
                </div>
            </div >
            <div className={styles.data}>
                <FetchDoctor />
            </div>
            <Footer />
        </>
    );
}

export default FormD;
