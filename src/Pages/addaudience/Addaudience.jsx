import React from 'react';
import "./Addaudience.css"
// import { FaCheckCircle } from 'react-icons/fa';
const Addaudience = () => {
  return (
    <div className='boxes'>
      <div className='container1'>
      {/* <div className='circleStyle'>
      <FaCheckCircle size={30} />
    </div> */}
        <h4>Campaign name</h4>
        <input className='inbtn' type="text" placeholder='  New Traffic Campaing' />
      </div>
      <div className='container2'>
        <h4>Campaign details</h4>

        <div className='buy'>  <h4 >Buying type</h4> </div>
        <p>Auction</p>
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
        <button className='btnadd'>Add Audience</button>
      </div>
      <div className='btnca'>
        <button className='campi'>Add Campaign</button>
      </div>
    </div>

  );
}

export default Addaudience;
