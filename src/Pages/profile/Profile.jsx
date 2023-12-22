import React, { useState,useEffect } from 'react';
import './Profile.css';
import { CgProfile } from 'react-icons/cg';
import { MdEdit } from "react-icons/md";
import CustomButton from '../../Components/button/Button';
import LoginButton from '../../Components/buttons/Button2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { db } from '../../Components/firebase-config';
import { getAuth,onAuthStateChanged } from 'firebase/auth';


const Profile = () => {
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const[firstname, setFirstname]= useState('');
  const[lastname, setLastname] = useState('');
  const [email, setEmail]= useState('');
  const [password,setPassword]=useState('');
  const [data,setData]=useState(null);
  const navigate = useNavigate();


  const handlePasswordFocus = () => {
    setShowPasswordPopup(true);
  };
  const handlePasswordSave =() =>{
    setPassword(true);
  };
  
  const handleSaveProfile = async () => {
    console.log('api calling')
    const user ={
      firstname,
      lastname,
      email,
      password,
    }
    console.log (user)
    try{
      const response = await axios.post("http://localhost:3000/api/profileinfo",user)
      setData(response.data);
      navigate('/home')
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = lv0cNJHHt0b4Jmi5fs0lSGt8GLB2;
        const userRef = doc(db, 'users', userId);

        getDoc(userRef)
        .then((doc) => {
          if(doc.exists()) {
            const userData = doc.data();
            setFirstname(userData.firstname);
            setLastname(userData.lastname);
            setEmail(userData.email);
          } else {
            console.log('No such document!');
          }
        })
        .catch((error) => {
          console.log('Error getting document:',error);
        });
      } else {
        navigate('/login')
      }
    })
  }, [navigate]);

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
        <input type='Email' onChange={(e) => { setEmail(e.target.value); }} />

          <div className='cpassword'>
           <p>Password</p>
           <input type='Password'placeholder='Change Password' onChange={(e)=>{setPassword(e.target.value); }} />
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
