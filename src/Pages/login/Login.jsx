import React, { useState } from 'react';
import './Login.css';
import CustomButton from "../../Components/button/Button";
import LoginButton from '../../Components/buttons/Button2';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../Components/firebase-config'

const Login = () => {

    const navigate = useNavigate();
    const loginClick = () => {
        navigate('./start')
    }

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user,setUser] = useState("");

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log("Login successful", user);
            setUser (user.user)
            navigate('/profile', { state: { email: user.user.email,uid:user.user.uid, displayName: user.user.displayName } });
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className='login-page'>
            <div className='login-head-cont'>
                <h1 className='log-head'>Login</h1>
            </div>
            <div className='email-cont'>
                <p className='emai-para'>Email</p>
                <input type='email' className='email-inpu' onChange={(event) => {
                    setLoginEmail(event.target.value)
                }} />
            </div>
            <div className='pass-cont'>
                <p className='pass-para'>Password</p>
                <input type='password' className='email-inpu' onChange={(event) => {
                    setLoginPassword(event.target.value)
                }} />
                <Link to='/forgotpassword' className='for-pas'>Forgot Password?</Link>
            </div>
            <div className='btn-cont-e'>
                <CustomButton
                    Btntype="button"
                    BtnclassName="add-layout-btn btn-log-in"
                    BtnText="Login"
                    ClickEvent={login}
                />
                <p className='or-par'>OR</p>
                <LoginButton
                    Btntypes="button"
                    BtnclassNames="add-login-btn cre-acc-btn"
                    BtnTexts="Create an account"
                    ClickEvents={loginClick}
                />
            </div>
        </div>
    );
};

export default Login;