import React, { useState } from 'react';
import "./Addaudience.css"
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addaudience = () => {
  const [showaddaudience2, setshowaddaudience2] = useState(false);
  const [showendDate, SetShowendDate] =useState(false)
  const [isView , setView] = useState(true)

  const [campaignName, setCampaignName] =useState('')
const [dailyBudget , setDailyBudget] = useState('')
const [currency , setCurrency] = useState('')
const [startDate , setStartDate] = useState('')
const [customAudience , setCustomAdience] = useState('')
const [adienceTarget , setAdienceTarget] = useState('')

   const handleaddaudience2 = () =>{
    setshowaddaudience2(true);
    setView(!isView)
   }
  const handleEndDate =()=>{
    SetShowendDate(!showendDate)
  }
  const navigate=useNavigate()


   const sendDataTOBackend = () =>{
    const dataTosend ={
      campaign:campaignName,
      budget:dailyBudget,
      rupes:currency,
      startdate:startDate,
      customaud:customAudience,
      targety:adienceTarget,
    }
    console.log("ccc",dataTosend)
    axios.post('http://localhost:3000/api/createcamp',dataTosend)
    .then((response) =>{
      console.log('Data Send Sucessfully',response.data)
      navigate ('/campaigns')
    })
    .catch((error) =>{
      console.error('error sending data',error)
    })
   }


  return (
    <div className='boxes'>
    <div >
      <div className='container1'>
        <h4>Campaign name</h4>
        <input className='inbtn' type="text" placeholder='  New Traffic Campaing' value= {campaignName} onChange={(e) => setCampaignName(e.target.value)}/>
      </div>
      <div className='container2'>
        <h4>Campaign details</h4>

        <div className='buy'>
         <h4 >Buying type</h4>
        <p>Auction</p>
        </div>
        <div className='cont'>
          <h4 >Campaign objective</h4>
          <p>Traffic</p>
        </div>

      </div>
      <div className='container3'>
        <h4>Budget and Schedule</h4>
        <h4>Budget</h4>
       <div className='catc'>
       <input className='budge' type="text" placeholder='  Daily Budget' value={dailyBudget} onChange={(e) => setDailyBudget(e.target.value)} /> 
       <div className='pointo' >
        <input className='caption' type="text" placeholder=' Rs.800' value={currency} onChange={(e) => setCurrency(e.target.value)} />
        <p>INR</p>
        </div></div>
        <h4 >Schedule</h4>
        <h4 className='starts'>Start date</h4>
        <input className="dates" type="date" placeholder='20/1-0/2023' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
       
        <h4 className='dne'>End</h4>
       <div className='check'> <input className='sixess' type="checkbox"onClick={handleEndDate} /> <p className='ffff'>Set an end date</p>
       {showendDate&&(
         <input className="dates" type='date'placeholder='14/08/20023'/>
       )}
       </div>
      </div>
      <div>
      {isView && <button className='btnadd' onClick={handleaddaudience2}>Add Audience</button>}  
        {showaddaudience2&&(

<div className="contaddaud">

<div >
    <h3 className="locate">Audience Control</h3>
    <p className="india">Set criteria for where ads for this campaign can be deliverd</p> </div>

  
         <h4 className="locate">location</h4>
         <div className='indiplace' > 
        <div className="famap"> <FaMapMarkerAlt /></div>
        <p >India</p></div>

    <div> <h3 className="locate" >Age</h3>
        <p >16-65+</p></div>

    
        <h3 className="locate">Exclude these custom audience</h3>
        <div className='indetail'>
      <div className="searche">  <FaSearch /> </div>
        <input className="detail-inp"  type="text"  placeholder="Search existing audience" value={customAudience} onChange={(e) => setCustomAdience (e.target.value)} />
    </div>

    <div>
        <h3 className="locate">Language</h3>
        <p className="india">All languages</p>
    </div>

    <div>
        <h3>Gender</h3>
        All genders
    </div>

    
        <h3>Detailed targeting</h3>
        <div className='indetail'>
      <span className="searche">  <FaSearch /></span>
        <input className="detail-inp" type="text" placeholder="Add Demographics,interests or behaviours" value={adienceTarget} onChange={(e) => setAdienceTarget(e.target.value)} />
        <p>Browse</p>
    </div>
</div>
        )}
      </div>
   
      <div className='btnca'>
        <button className='campi'  onClick={sendDataTOBackend}  >Add Campaign</button>
      </div>
    </div>

{/* 
    <div class="custom-select">
  <div class="select-icon">
    <img src="your-icon.png" alt="Icon" />
  </div>
  <select>
    <option value="export">export</option>
    <option value="telegram">telegram</option>
    <option value="dljbhiueqfa">dljbhiueqfa</option>
    <option value=";kwigydwqd">;kwigydwqd</option>
  </select>
</div> */}
    </div>
  );
}

export default Addaudience;
