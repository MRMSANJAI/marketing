import React, {useState ,useEffect} from 'react';
import "./Campaigns.css"
import { FaSearch } from "react-icons/fa";
import { FaToggleOff } from 'react-icons/fa';
import { VscGraph } from 'react-icons/vsc';
import { MdModeEditOutline } from 'react-icons/md';
import { HiSpeakerphone } from 'react-icons/hi';
import { FaMousePointer } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { FaFilter } from 'react-icons/fa';
import { MdGroups2 } from 'react-icons/md';
import { IoBag } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { string } from 'prop-types';
//  import { response } from 'express';
const Campaigns = () => {

  const [showAddCampaignpopup,setShowAddCampaign] = useState(false);
  const [tableData, setTableData]=useState([])
const handleAddCampaign =()=>{
  setShowAddCampaign(true);
}

const handleCancelCampaign = () => {
  setShowAddCampaign(false);
}

  const navigate = useNavigate();

const handleClick = () =>{
     navigate('./charts')
}
const handleAddaudience = () => {
  navigate('./addaudience')
}
useEffect(()=>{

  fetch('http://localhost:3000/api/createcamp')
  .then((response)=> response.json())
  .then((data)=>{
    setTableData(data)
  })
  .catch((error)=>{
    console.error('Error fecting data:',error)
  })
})

  return (
    <div className='donw'>
    <div className='cam'>
      <h3>Campaings</h3>
      </div>
      <div className='tappi'> 
     <FaSearch className='sea-inp-icon'/>
      <input className='searchs' type="search"  placeholder="Search and filter" id="search" name="search" required />
      </div>
      <div className='deri'>
      <div>
<button className="btnc" onClick={handleAddaudience }>+ Create</button>
<div style={{borderRadius:"10px"}}>

<table className="tables" >
      <thead className="tablehead">
        <tr className="th">
          <th>Dates</th>
          <th className="card4">Campaign</th>
          <th className="card3">Budget </th>
          <th className="card">Rupees</th>
          <th className="card2">Customs</th>
          <th className="card">Targeting</th>
        </tr>
      </thead>
      <tbody className="blue"  >
        <tr>
          <td  className="btnon"><FaToggleOff /> </td>
          <td className="peri ,colo" >New Traffic Campaign <div className="vied"> <VscGraph /><button className='update' onClick={handleClick}>View chart</button> <MdModeEditOutline />
          <button className='update' onClick={ handleAddCampaign}>Edit</button>
          {showAddCampaignpopup &&(
  <div className="aling">
  <div class="container">
        <h2 className="camp">Create New Campaings</h2>
        <lable>Buying type :</lable><br></br>
        <input className="boc"type="text"/>
        <div className="btnvalue">
            <h4>Use a New Campaings objectives</h4>
          <div className="top">  <div className="row">
    <input className="btnr"type="radio"  id="awareness" name="campaignObjective" value="awareness"/>
    <div  className="icon" ><HiSpeakerphone /></div>
    <label for="awareness">Awareness</label>
  </div>
  <div className="row">
    <input className="btnr"type="radio" id="traffic" name="campaignObjective" value="traffic"/>
    <div  className="icon"><FaMousePointer /></div>
    <label for="traffic">Traffic</label>
  </div>
  <div className="row">
    <input className="btnr"type="radio" id="engagement" name="campaignObjective" value="engagement"/>
  <div  className="icon">  <FaMessage /></div>
    <label for="engagement">Engagement</label>
  </div>
  <div className="row">
    <input className="btnr"type="radio" id="leads" name="campaignObjective" value="leads"/>
  <div  className="icon"> <FaFilter /></div> 
    <label for="leads">Leads</label>
  </div>
  <div className="row">
    <input className="btnr"type="radio" id="app promotion" name="campaignObjective" value="app promotion"/>
   <div  className="icon"><MdGroups2 /></div>
    <label for="app promotion">App Promotion</label>
  </div>
  <div className="row">
    <input className="btnr"type="radio" id="Sales" name="campaignObjective" value="Sales"/>
   <div className="icon"> <IoBag /></div>
    <label for="sales">Sales</label>
    </div>
  </div>
  <div className="gapi">
    <button className="btn1" onClick={handleCancelCampaign}>Cancel</button>
    
    <button className="btn2">Continue</button>
  </div>

        </div>
    </div>
    </div>
)}
          </div> </td>
          <td className="peri"> <input type="radio"/> In draft</td>
          <td className="peri">Used ad set</td>
          <td className="peri">Used ad set</td>
          <td>-</td>
        </tr>
      </tbody>
     
      <tbody >
        {tableData.map((item, index)=>(

      
        <tr key={index}>
          <td className="data">{item.startdate}</td>
          <td>{item.campaign}</td>
          <td>{item.budget}</td>
          <td>{item.rupes}</td>
          <td>{item.customaud}</td>
          <td>{item.targety}</td>
        </tr>
          ))}
      </tbody>
      <tbody>
        <tr>
          <td className="data"></td>
          <td></td>
          <td ></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td className="data"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td className="data"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td className="data"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td className="data"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      
    </table>
    </div>

    </div>
      </div>
    </div>
    
  );
}

export default Campaigns
