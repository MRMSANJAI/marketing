import React, { useState } from 'react';
import "./Addaudience.css"
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import axios from 'axios';

const Addaudience = () => {
  const [showaddaudience2, setshowaddaudience2] = useState(false);
  
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
    })
    .catch((error) =>{
      console.error('error sending data',error)
    })
   }


  return (
    <div className='boxes'>
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
        <input className='texts' type="text" placeholder='  Daily Budget' value={dailyBudget} onChange={(e) => setDailyBudget(e.target.value)} /> 
        <input className='Rs' type="text" placeholder='  Rs.800                              INR' value={currency} onChange={(e) => setCurrency(e.target.value)} />
        <h4 >Schedule</h4>
        <h4 className='starts'>Start date</h4>
        <input className="dates" type="date" placeholder='20/1-0/2023' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <h4 className='dne'>End</h4>
       <div className='check'> <input className='sixess' type="checkbox" /> <p className='ffff'>Set an end date</p></div>
      </div>
      <div>
      {isView && <button className='btnadd' onClick={handleaddaudience2}>Add Audience</button>}  
        {showaddaudience2&&(

<div className="contaddaud">

<div >
    <h3 className="locate">Audience Control</h3>
    <p className="india">Set criteria for where ads for this campaign can be deliverd</p> </div>

    <div  > 
         <h4 className="locate">location</h4>
        <div className="famap"> <FaMapMarkerAlt /></div>
        <p className="india">India</p></div>

    <div> <h3 className="locate" >Age</h3>
        <p >16-65+</p></div>

    <div>
        <h3 className="locate">Exclude these custom audience</h3>
       <span className="searche"> <FaSearch /></span>
        <input className="inbtn"  type="text" placeholder="     Search existing audience" value={customAudience} onChange={(e) => setCustomAdience (e.target.value)} />
    </div>

    <div>
        <h3 className="locate">Language</h3>
        <p className="india">All languages</p>
    </div>

    <div>
        <h3>Gender</h3>
        All genders
    </div>

    <div>
        <h3>Detailed targeting</h3>
      <span className="searche">  <FaSearch /></span>
        <input className="inbtn"type="text" placeholder="      Add Demographics,interests or behaviours. Browser" value={adienceTarget} onChange={(e) => setAdienceTarget(e.target.value)} />
    </div>
</div>
        )}
      </div>
   
      <div className='btnca'>
        <button className='campi'  onClick={sendDataTOBackend}>Add Campaign</button>
      </div>
    </div>

  );
}

export default Addaudience;
