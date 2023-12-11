import React from "react";
import "./Addaudience2.css"

const addaudience2 = () => {
    return(
<div className="containeraddaudience">
    <h4>Audience Control</h4>
    <p>Set criteria for where ads for this campaign can be deliverd</p>
  <div>  <h4>location</h4>
    <p>india</p></div>
  <div> <h3>Age</h3>
    <p>16-65+</p></div>
    <div>
<h3>Exclude these custom audience</h3>
<input type="text" placeholder="Search existing audience"/>
    </div>
    <div>
        <h3>Language</h3>
        <p>All languages</p>
    </div>
    <div>
        <h3>Gender</h3>
        All genders
    </div>
    <div>
        <h3>Detailed targeting</h3>
        <input type ="text" placeholder="Add Demographics,interests or behaviours."/>
    </div>
</div>
    )

}
export default addaudience2