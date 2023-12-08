import React from "react";
import CustomButton from "../../Components/button/Button";
import './SetPassword.css'
import LoginButton from "../../Components/buttons/Button2";

const SetPassword = () => {
    return (
        <div className="reset-password-container">
            <div className="res-pass-cont">
                <h1 className="res-pas-hea">Set Password</h1>
            </div>
            <div className="content-cont">
                <div className="inpu-cont">
                    <p className="email-para"> Password</p>
                    <input type="Password" className="email-input" />
                </div>
                <div className="inpu-cont">
                    <p className="email-para"> Confirm Password </p>
                    <input type=" Password" className="email-input" />
                </div>
                <div className="btns-clas">
                    <CustomButton
                        Btntype="button"
                        BtnclassName="add-layout-btn reset-btn"
                        BtnText="Send password reset email"
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

export default SetPassword;