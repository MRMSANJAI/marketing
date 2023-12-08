import React from 'react';
import './Createaccount.css';
import CustomButton from '../../Components/button/Button';
import LoginButton from '../../Components/buttons/Button2';

const Start = () => {
  return (
    <div className='start-page '> 
    <div className= "head1" > <h1>Get Started</h1>
    </div>
     <div className='head2'> 
       <p>Email</p>
       <input type='email'/>
       <p>Password</p>
       <input type='password'/>
    </div>
     <div className='checkbox1'>
      <p><input type='checkbox'/> I'm not a robot</p>
      <p className='recap-para'>Recapcha</p>
      <CustomButton
           Btntype="button"
          BtnclassName="add-layout-btn button"
           BtnText="Continue"/>
    <p className='or'>OR</p>
     <LoginButton
          Btntypes="button"
           BtnclassNames="add-login-btn login"
           BtnTexts="Login"
           />
           
     </div>
    </div>
  );
};

export default Start;
