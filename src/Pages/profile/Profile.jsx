import React, { useState } from 'react';
import './Profile.css';
import { CgProfile } from 'react-icons/cg';
import { MdEdit } from "react-icons/md";
import CustomButton from '../../Components/button/Button';
import LoginButton from '../../Components/buttons/Button2';


const Profile = () => {
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);

  const handlePasswordFocus = () => {
    setShowPasswordPopup(true);
  };

  const handleSavePassword = () => {
    setShowPasswordPopup(false);
  };

  return (
    <div className='Profile-container'style={{display:"flex"}}>
        <div className='profile-header'>
            <h1>Profile</h1>
        </div>
        <div className='profile-icon'>
            <p><CgProfile/></p>
        </div>
        <div className='profile-info'>
            <h1>Account Info</h1>
           <p>First Name</p>
           <input type='FirstName'/><span className='editicon'><MdEdit/></span> 
            <p>Last Name</p>
          <input type='LastName'/><span className='editicon'><MdEdit/></span> 
           <p>Email</p>
          <input type='Email'/>

          <div className='cpassword'>
           <p>Password</p>
           <input type='Password' placeholder='Change Password'/>
           <span className='editicon'><MdEdit  onClick={handlePasswordFocus}/></span> 
           {showPasswordPopup && (
            <div className='password-popup'>
              <h2>Edit Password</h2>
              <p>Current Password</p>
              <input type='text'/>
              <p>New Password</p>
              <input type='text'/>
              <p>Confrim New Password</p>
              <input type='text'/>
              <div className='popup-buttons'>
               <LoginButton
                Btntypes="button"
                BtnclassNames="add-login-btn cancelbtn"
                BtnTexts="Cancel"
                ClickEvents={() => setShowPasswordPopup(false)}
                />
               <CustomButton
                 Btntype="button"
                 BtnclassName="add-layout-btn savebtn"
                 BtnText="Save"
                 onClick={handleSavePassword} 
                />
              </div>
            </div>
          )}
          </div>
       <div className='Buttonns'>
          <LoginButton
          Btntypes="button"
           BtnclassNames="add-login-btn cancelbtn"
           BtnTexts="Cancel"/>
          <CustomButton
           Btntype="button"
           BtnclassName="add-layout-btn savebtn"
           BtnText="Save"/>
       </div>
    </div>
  </div>
  );
};

export default Profile;
