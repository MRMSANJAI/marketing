import React from 'react';
import Login from './Pages/login/Login';
import SetPassword from './Pages/setpassword/Setpassword';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResetPassword from './Pages/forgotpassword/Forgotpassword';
import Start from './Pages/createanaccount/Createaccount';
import Authgaurd from './Components/Authgaurd';
import Ads from './Pages/ads/Ads';
import Compaigns from "./Pages/campaigns/Campaigns";
import Profile from"./Pages/profile/Profile";
import Templates from "./Pages/templates/Templates";
import TargetAudience from "./Pages/targetaudience/TargetAudience";
import Company from './Pages/companydetails/Company';
import Createads from "./Pages/createads/Createads";
import Addaudience from './Pages/addaudience/Addaudience';
import Target from './Pages/target/Target';
import Charts from './Pages/charts/Charts';
import Addaudience2 from './Pages/addaudience2/Addaudience2'
import Campaignscharts from './Components/chartdata/compaigncharts/Campaignschart';
import Customconversion from './Components/chartdata/customconversion/Customconversion';
import Adsets from './Components/chartdata/adsetschart/Adsets';
import Adscharts from './Components/chartdata/adscharts/Adscharts';
import Demographiccharts from'./Components/chartdata/demographicchart/Demographicchart';

function App() {
  

  return (
    <BrowserRouter>
  <div>
    <Routes>
      <Route path='/'element={<Login/>}/>
      <Route path='/forgotpassword'element={<ResetPassword/>}/>
      <Route path='/resetpassword'element={<SetPassword/>}/>
      <Route path='/start'element={<Start/>}/>
      <Route path='/home'element={<Authgaurd/>}/>
      <Route path='/target'element={<Authgaurd component={<Target/>}/>}/>
      <Route path='/campaigns'element={<Authgaurd component={<Compaigns/>}/>}/>
      <Route path='/ads'element={<Authgaurd component={<Ads/>}/>}/>
      <Route path='/profile'element={<Authgaurd component={<Profile/>}/>}/>
      <Route path='/templates'element={<Authgaurd component={<Templates/>}/>}/>
      <Route path='/targetaudience'element={<Authgaurd component={<TargetAudience/>}/>}/>
      <Route path='/createads'element={<Authgaurd component={<Createads/>}/>}/>
      <Route path='/company'element={<Authgaurd component={<Company/>}/>}/>
      <Route path='/Campaigns/addaudience' element={<Authgaurd component={<Addaudience/>} />} />
      <Route path='/campaigns/charts'element={<Authgaurd component={<Charts/>}/>}/> 
      <Route path='/addaudience2'element={<Authgaurd component={<Addaudience2/>}/>}/>   
      <Route path='/campaignscharts'element={<Authgaurd component={<Campaignscharts/>}/>}/>
      <Route path='/customconversion'element={<Authgaurd component={<Customconversion/>}/>}/>
      <Route path='/adsets'element={<Authgaurd component={<Adsets/>}/>}/>
      <Route path='/adscharts'element={<Authgaurd component={<Adscharts/>}/>}/>
      <Route path ='/Demographicchart'element={<Authgaurd component={<Demographiccharts/>}/>}/>

    </Routes>
  </div>
  </BrowserRouter>
  )
}

export default App
