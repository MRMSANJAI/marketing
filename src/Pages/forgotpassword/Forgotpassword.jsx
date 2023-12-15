import React, { useState } from "react";
import CustomButton from "../../Components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../Components/firebase-config';
import './Forgotpassword.css';
import LoginButton from "../../Components/buttons/Button2";

const ResetPassword = () => {
    const navigate = useNavigate();
    const [resetEmail, setResetEmail] = useState("");
    const [resetError, setResetError] = useState(null);

    const resetClick = async () => {
        try {
            await sendPasswordResetEmail(auth, resetEmail);
            navigate('/resetpassword')
            console.log('Password reset email sent successfully');
        } catch (error) {
            setResetError(error.message);
            console.error('Error sending password reset email:', error.message);
        }
    }

    const loginClick = () => {
        navigate('/');
    }

    return (
        <div className="reset-password-container">
            <div className="res-pass-cont">
                <h1 className="res-pas-hea">Reset Password</h1>
            </div>
            <div className="content-cont">
                <div className="inpu-cont">
                    <p className="email-para"> Email </p>
                    <input
                        type="email"
                        className="email-input"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                    />
                </div>
                <div className="btns-clas">
                    <CustomButton
                        Btntype="button"
                        BtnclassName="add-layout-btn reset-btn"
                        BtnText="Send password reset email"
                        ClickEvent={resetClick}
                    />
                    <p>OR</p>
                    <LoginButton
                        Btntypes="button"
                        BtnclassNames="add-login-btn log-btn"
                        BtnTexts="Login"
                        ClickEvents={loginClick}
                    />
                </div>
                {resetError && <p className="error-message">{resetError}</p>}
            </div>
        </div>
    );
};

export default ResetPassword;
