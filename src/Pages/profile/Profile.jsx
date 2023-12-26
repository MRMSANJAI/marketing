import React, { useState} from 'react';
import './Profile.css';
import { CgProfile } from 'react-icons/cg';
import { MdEdit } from "react-icons/md";
import CustomButton from '../../Components/button/Button';
import LoginButton from '../../Components/buttons/Button2';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { updatePassword, updateProfile } from 'firebase/auth';
import { auth } from '../../Components/firebase-config';

const Profile = () => {
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const[firstname, setFirstname]= useState('');
  const[lastname, setLastname] = useState('');
  const [email, setEmail]= useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();
  const location = useLocation();


  const handlePasswordFocus = () => {
    setShowPasswordPopup(true);
  };
  const handlePasswordSave = async () =>{
    try{
      const user = auth.currentUser;
      if(user){
        await updatePassword(user,password);
        setShowPasswordPopup(false);
        console.log("password updated sucessfully");
      }else{
        console.error("User not authenticated");
      }
    }catch(error){
      console.error('Error updating password', error);
    }
  };

  const handleSaveProfile = async () => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: `${firstname} ${lastname}`,
      });
  
      console.log('Profile updated successfully');
      navigate('/home');
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };
      const user = location.state;
      console.log(user)
  
  return (
    <div className='profile-container' style={{ display: "flex" }}>
      <div className='profile-header'>
        <h1>Profile</h1>
      </div>
      <div className='profile-icon'>
        <p><CgProfile /></p>
      </div>
      <div className='profile-info'>
        <h1>Account Info</h1>
        <p>First Name</p>
        <input type='FirstName' onChange={(e) => { setFirstname(e.target.value); }} /><span className='editicon'><MdEdit /></span>
        <p>Last Name</p>
        <input type='LastName' onChange={(e) => { setLastname(e.target.value); }} /><span className='editicon'><MdEdit /></span>
        <p>Email</p>
        <input type='Email' onChange={(e) => { setEmail(e.target.value) }} value={user?.email || email}/>

          <div className='cpassword'>
           <p>Password</p>
           <input type='Password'placeholder='Change Password' onChange={(e)=>{setPassword(e.target.value); }} />
           <span className='editicon'><MdEdit  onClick={handlePasswordFocus}/></span> 
           {showPasswordPopup && (
            <div className='password-popup'>
              <h2>Edit Password</h2>
              <p>Current Password</p>
              <input type='password'/>
              <p>New Password</p>
              <input type='password'/>
              <p>Confrim New Password</p>
              <input type='password'/>
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
                ClickEvent={handlePasswordSave}
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
           BtnText="Save"
           ClickEvent={handleSaveProfile}/>
       </div>
    </div>
  </div>
  );
};

export default Profile;
