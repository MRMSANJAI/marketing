import React, { useState } from 'react';
import "./Addaudience.css"
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Addaudience = () => {
  const [showaddaudience2, setshowaddaudience2] = useState(false);
   const handleaddaudience2 = () =>{
    setshowaddaudience2(true);
   }
  return (
    <div className='boxes'>
      <div className='container1'>
        <h4>Campaign name</h4>
        <input className='inbtn' type="text" placeholder='  New Traffic Campaing' />
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
        <input className='texts' type="text" placeholder='  Daily Budget' /> <input className='Rs' type="text" placeholder='  Rs.800                                  INR' />
        <h4 >Schedule</h4>
        <h4 className='starts'>Start date</h4>
        <input className="dates" type="text" placeholder='20/1-0/2023' />
        <h4 className='dne'>End</h4>
       <div className='check'> <input className='sixess' type="checkbox" /> <p className='ffff'>Set an end date</p></div>
      </div>
      <div>
        <button className='btnadd' onClick={handleaddaudience2}>Add Audience</button>
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
        <input className="inbtn"  type="text" placeholder="Search existing audience" />
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
        <input className="inbtn"type="text" placeholder=" Add Demographics,interests or behaviours. Browser"/>
    </div>
</div>
        )}
      </div>
      <span className='bode'></span>
      <div className='btnca'>
        <button className='campi'>Add Campaign</button>
      </div>
    </div>

  );
}

export default Addaudience;
