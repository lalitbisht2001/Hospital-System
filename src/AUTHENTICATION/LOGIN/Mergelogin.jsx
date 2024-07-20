import { useState } from "react";
import loginImage from "/login.jpg";
import styled from "styled-components";
import Button from '@mui/material/Button';
import Doctorlogin from "./Doctorlogin";
import Userlogin from "./Userlogin";

function Mergelogin() {
    const [isDoctorLogin, setIsDoctorLogin] = useState(true);

    const handlePatientChange = () => setIsDoctorLogin(false);
    const handleDoctorChange = () => setIsDoctorLogin(true);

    return (
        <Box>
            <Login>
                <img src={loginImage} alt="Login" />
                <SmallBox isDoctorLogin={isDoctorLogin}>
                    <div className="patient">
                        <Button variant="contained" color="success" onClick={handlePatientChange}>Patient</Button>
                    </div>
                    <div className="doctor">
                        <Button variant="contained" color="success" onClick={handleDoctorChange}>Doctor</Button>
                    </div>
                </SmallBox>
                {isDoctorLogin ? <Doctorlogin /> : <Userlogin />}
            </Login>
        </Box>
    );
}

export default Mergelogin;

const Box = styled.div`
    box-sizing: border-box;
    margin: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #42A5F5;

    @media screen and (max-width: 500px) {
        background-color: #42A5F5;
    }
    
    @media screen and (max-width: 300px) {
        background-color: red;
    }
`;

const Login = styled.div`
    height: 85vh;
    width: 90%;
    border-radius: 0.8em;
    position: relative;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    img {
        height: 85vh;
        width: 100%;
        border-radius: 0.8em;
    }

    @media screen and (max-width: 500px) {
        height: 100%;
        width: 100%;
        border-radius: 0;
        
        img {
            width: 100%;
            height: 100%;
            border-radius: 0;
        }
    }

    @media screen and (max-width: 340px) {
        height: 100vh;
        width: 85%;

        img {
            width: 100%;
            height: 100%;
        }
    }
`;

const SmallBox = styled.div.withConfig({
    shouldForwardProp: prop => prop !== 'isDoctorLogin'
})`
    position: absolute;
    top: 3em;
    left: 7.6em;
    width: 24em;
    background-color: white;
    height: 3.7em;
    display: flex;
    gap: 0.5em;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 0.9em;

    div {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            height: 75%;
            width: 80%;
        }
    }

    .patient {
        background-color: ${props => !props.isDoctorLogin ? "lightgreen" : "transparent"};
    }

    .doctor {
        background-color: ${props => props.isDoctorLogin ? "lightgreen" : "transparent"};
    }

    @media screen and (max-width: 500px) {
        top: 5em;
        left: 4em;
        width: 19em;
        height: 3em;

        div {
            height: 100%;

            button {
                height: 55%;
            }
        }
    }
`;
