import { NavLink , useNavigate} from "react-router-dom";
import styled from "./Usersign.module.css";
import Doctor from "/Doctor.png";
import Button from '@mui/material/Button';
import { useState } from "react";
import { auth } from '/src/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

function Usersign() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            alert('User registered successfully!'); 
            navigate('/');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setError('The email address is already in use by another account.');
            } else {
                console.error('Error registering user:', error);
                alert('Error registering user');
            }
        }
    };

    return (
        <div className={styled.main}>
            <div className={styled.box}>
                <div className={styled.img}>
                    <img src={Doctor} alt="" />
                    <div className={styled.heading}>
                        Get professional healthcare
                        for you and
                        your family
                    </div>
                </div>
                <div className={styled.login}>
                    <div className={styled.logo}>
                        <p className={styled.para1}>Welcome to <span>GYNE</span></p>
                        <p className={styled.para2}>Create your account</p>
                    </div>
                    <form className={styled.form} onSubmit={handleSubmit}>
                        <div className={styled.name}>
                            <span>Name</span>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className={styled.name}>
                            <span>Phone no.</span>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className={styled.name}>
                            <span>Email</span>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className={styled.name}>
                            <span>Password</span>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} />
                        </div>
                        {<span style={{ color: "red" }}>{error}</span>}
                        <Button type="submit" variant="contained" style={{ backgroundColor: "purple", borderRadius: "0.7em" }}>Sign up</Button>
                    </form>
                    <div>
                        <p>Already have an account? <NavLink to="/" style={{ textDecoration: "none" }}>Sign In</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Usersign;
