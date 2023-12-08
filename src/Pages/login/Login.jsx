import React from 'react';
import './Login.css';
import CustomButton from "../../Components/button/Button";
import LoginButton from '../../Components/buttons/Button2';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const loginClick = () => {
        navigate('./start')
    } 
    return (
        <div className='login-page'>
            <div className='login-head-cont'>
        <h1 className='log-head'>Login</h1>
        </div>
        <div className='email-cont'>
            <p className='emai-para'>Email</p>
            <input type='email' className='email-inpu'/>
        </div>
        <div className='pass-cont'>
            <p className='pass-para'>Password</p>
            <input type='password' className='email-inpu'/>
            <Link to='/forgotpassword'className='for-pas'>Forgot Password?</Link>
        </div>
        <div className='btn-cont-e'>
            <CustomButton 
            Btntype = "button"
            BtnclassName = "add-layout-btn btn-log-in"
            BtnText = "Login"
            />
            <p className='or-par'>OR</p>
            <LoginButton 
            Btntypes = "button"
            BtnclassNames = "add-login-btn cre-acc-btn"
            BtnTexts = "Create an account"
            ClickEvents = {loginClick}
            />
        </div>
        </div>
    );
};

export default Login;