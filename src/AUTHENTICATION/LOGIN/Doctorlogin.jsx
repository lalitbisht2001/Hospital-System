import { useState } from "react";
import style from "./Doctorlogin.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { authdoctor } from '/src/firebasedoctor';
import { signInWithEmailAndPassword } from "firebase/auth";


function Doctorlogin() {

    const [data, setData] = useState({
        name: "",
        id: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const handleData = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
        setError(null);
    };
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!data.email || !data.password) {
            setError('Please enter both email and password.');
            return;
        }

        try {
            await signInWithEmailAndPassword(authdoctor, data.email, data.password);
            navigate('/doctor');
        } catch (error) {
            console.error("Error signing in:", error);
            setError('Invalid credentials. Please check your email and password.');
        }
    };
    return (
        <div className={style.main}>
            <div className={style.heading}>
                <p className={style.head1}>Welcome Back, Doctor!</p>
                <p className={style.head2}>Your care matters. Log in to access your tools and resources.</p>
            </div>
            <form onSubmit={handleSubmit} className={style.doctor_form}>
                <div className={style.name}>
                    <span>Doctor Name</span>
                    <input type="text" name="name" value={data.name} onChange={handleData} />

                </div>
                <div className={style.name}>
                    <span>Email</span>
                    <input type="email" name="email" value={data.email} onChange={handleData} />

                </div>
                <div className={style.name}>
                    <span>Password</span>
                    <input type="password" name="password" value={data.password} onChange={handleData} />
                    {<span className={style.error}>{error}</span>}
                </div>
                <button type="submit" className={style.btn1}>Sign in</button>
            </form>
            <div className={style.login}>
                <p>
                    Don`t have an account? <NavLink to='/doctorsign' style={{ textDecoration: "none" }}>Sign up for free</NavLink>
                </p>
            </div>
        </div>
    )
}

export default Doctorlogin;
