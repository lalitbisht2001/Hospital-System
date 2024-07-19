import { auth } from '/src/firebase';
import { useState } from "react";
import style from "./Userlogin.module.css";
import { NavLink,useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function Userlogin() {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);

    const onDatahandle = (e) => {
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
            await signInWithEmailAndPassword(auth, data.email, data.password);
            navigate('/user');
        } catch (error) {
            console.error("Error signing in:", error);
            setError('Invalid credentials. Please check your email and password.');
        }
    };

    return (
        <div className={style.main}>
            <div className={style.heading}>
                <p className={style.head1}>Welcome back</p>
                <p className={style.head2}>Welcome back! Please enter your details</p>
            </div>
            <form onSubmit={handleSubmit} className={style.patient_form}>
                <div className={style.box}>
                    <span>Email</span>
                    <input type="email" name="email" value={data.email} onChange={onDatahandle} />
                    
                </div>
                <div className={style.box}>
                    <span>Password</span>
                    <input type="password" name="password" value={data.password} onChange={onDatahandle} />
                    {error && <span className={style.error}>{error}</span>}
                </div>
                <button type="submit" className={style.btn1}>Sign in</button>
                <button type="button" className={style.btn2}>Sign in with Google</button>
            </form>
            <div className={style.login}>
                <p>
                    Don`t have an account? <NavLink to='/usersign' style={{ textDecoration: "none" }}>Sign up for free</NavLink>
                </p>
            </div>
        </div>
    );
}

export default Userlogin;
