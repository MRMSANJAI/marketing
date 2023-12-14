import React, { useEffect, useState } from 'react';
import './Createaccount.css';
import CustomButton from '../../Components/button/Button';
import LoginButton from '../../Components/buttons/Button2';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Components/firebase-config';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  const loginPage = () => {
    navigate('/');
  }

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
      navigate('/home');
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <div className='start-page '>
      <div className="head1"><h1>Get Started</h1></div>
      <div className='head2'>
        <p>Email</p>
        <input type='email' onChange={(event) => {
          setRegisterEmail(event.target.value);
        }}/>
        <p>Password</p>
        <input type='password' onChange={(event) => {
          setRegisterPassword(event.target.value);
        }}/>
      </div>
      <div className='checkbox1'>
        <p><input type='checkbox'/> I'm not a robot</p>
        <p className='recap-para'>Recaptcha</p>
        <CustomButton
          Btntype="button"
          BtnclassName="add-layout-btn button"
          BtnText="Continue"
          ClickEvent={register}
        />
        <p className='or'>OR</p>
        <LoginButton
          Btntypes="button"
          BtnclassNames="add-login-btn login"
          BtnTexts="Login"
          ClickEvents={loginPage}
        />
      </div>
    </div>
  );
};

export default Start;



