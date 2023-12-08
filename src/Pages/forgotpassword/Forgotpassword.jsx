import React from "react";
import CustomButton from "../../Components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import './Forgotpassword.css'
import LoginButton from "../../Components/buttons/Button2";

const ResetPassword = () => {
    const navigate = useNavigate();

    const resetClick = () => {
        navigate('/resetpassword')
    }
    return (
        <div className="reset-password-container">
            <div className="res-pass-cont">
                <h1 className="res-pas-hea">Reset Password</h1>
            </div>
            <div className="content-cont">
                <div className="inpu-cont">
                    <p className="email-para"> Email </p>
                    <input type="email" className="email-input" />
                </div>
                <div className="btns-clas">
                    <CustomButton
                        Btntype="button"
                        BtnclassName="add-layout-btn reset-btn"
                        BtnText="Send password reset email"
                        ClickEvent = {resetClick}
                    />
                    <p>OR</p>
                    <LoginButton
                        Btntypes="button"
                        BtnclassNames="add-login-btn log-btn"
                        BtnTexts="Login"
                    />
                </div>
            </div>
        </div>
    )
};

export default ResetPassword;