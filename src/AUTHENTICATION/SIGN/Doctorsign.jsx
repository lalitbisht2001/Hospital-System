
import { NavLink, useNavigate } from "react-router-dom";
import styled from "./Doctorsign.module.css";
import Photo from "/doctor_login.jpg";
import Button from '@mui/material/Button';
import { authdoctor } from '/src/firebasedoctor';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function Doctorsign() {
  const [data, setData] = useState({
    name: "",
    id: "",
    phone: "",
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
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(authdoctor, data.email, data.password);
      alert("sign up successfully.")
      navigate('/');
    }
    catch (error) {
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
        <img src={Photo} alt="" className={styled.image} />
        <div className={styled.doctor_login_form}>
          <div className={styled.heading}>
            <p className={styled.para1}>Welcome, Dedicated Healer</p>
            <p className={styled.para2}>Together, we can achieve excellence in patient care.</p>
          </div>
          <form className={styled.form} onSubmit={handleSubmit}>
            <div className={styled.name}>
              <span>Doctor Name</span>
              <input type="text" name="name" value={data.name} onChange={handleData} />
            </div>
            <div className={styled.name}>
              <span>Doctor Id</span>
              <input type="text" name="id" value={data.id} onChange={handleData} />
            </div>
            <div className={styled.name}>
              <span>Phone no.</span>
              <input type="text" name="phone" value={data.phone} onChange={handleData} />
            </div>
            <div className={styled.name}>
              <span>Email</span>
              <input type="email" name="email" value={data.email} onChange={handleData} />
            </div>
            <div className={styled.name}>
              <span>Password</span>
              <input type="password" name="password" value={data.password} onChange={handleData} />
            </div>
            {error && <span className={styled.error}>{error}</span>}
            <Button type="submit" variant="contained" style={{ backgroundColor: "purple", borderRadius: "0.7em" }}>Sign up</Button>
          </form>
          <p>Already have an account ? <NavLink to="/" style={{ textDecoration: "none" }}>Sign In</NavLink></p>
        </div>
      </div>
    </div>
  );
}

export default Doctorsign;
