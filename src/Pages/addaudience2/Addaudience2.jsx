
import React from "react";
import "./Addaudience2.css"
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const addaudience2 = () => {
  
    return (
        <div className="contaddaud">

            <div >
                <h3 className="locate">Audience Control</h3>
                <p className="india">Set criteria for where ads for this campaign can be deliverd</p> </div>

                <div  > 
                     <h3 className="locate">location</h3>
                    <div className="famap"> <FaMapMarkerAlt /></div>
                    <p className="india">india</p></div>

                <div> <h3 className="locate" >Age</h3>
                    <p >16-65+</p></div>

                <div>
                    <h3 className="locate">Exclude these custom audience</h3>
                   <span className="searche"> <FaSearch /></span>
                    <input className="inbtn"  type="text" placeholder="       Search existing audience" />
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
                    <input className="inbtn" type="text" placeholder="       Add Demographics,interests or behaviours.                                                           
                                                                               Browser" />
                </div>

           
            {/* <select>
    <option>export</option>
    <option>telegram</option>
    <option>dljbhiueqfa</option>
    <option>;kwigydwqd</option>
</select> */}
        </div>
    )

}
export default addaudience2
