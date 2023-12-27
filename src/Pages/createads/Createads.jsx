import React from "react";
import { IoSearch } from "react-icons/io5";
import CustomButton from "../../Components/button/Button";
import { FaPen } from "react-icons/fa";
import './Createads.css'
import { Dropdown } from "react-bootstrap";
                
const Createads = () => {
    return (
        <div className="cre-ads-cont">
         <div className="che-par-cont">
           <h1 className="camp-nam-head"><input type="checkbox" /> Campaign name</h1> 
           <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="dr-do-bt-ac">
        Awareness Campaign
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
         </div>
         <div className="ad-nam-cont">
          <h1 className="camp-nam-head"> <input type="checkbox" /> Ad name</h1>
          <input type="search" placeholder="New Traffic Ad" className="dr-do-bt-ac"/>
         </div>
         <div className="sel-temp-cont">
          <div>
          <h1 className="camp-nam-head"><input type="checkbox" /> Select Templates</h1>
          </div>
          <div className="set-atb-cont">
           <p className="sea-inp-par"> <IoSearch className="sear-bar-ico"/> <input type="search" placeholder="Search Existing Templates" className="sea-exi-inp"/> </p> 
           <CustomButton 
           Btntype = "button"
           BtnclassName = "add-layout-btn add-temp-btn"
           BtnText = "Add Template"
           />
          </div>
          <div className="rep-cont">
         <div className="che-aut-bar-cont">
          <div className="che-par-con">
            <input type="checkbox" />
            <p className="box-para"></p>
          </div>
          <div>
            <h1 className='xyz-temp'>XYZ Template</h1>
            <p>Edited by Taru Pathak</p>
          </div>
          <div className="btn-edit">
            <CustomButton 
            Btntype = "button"
            BtnclassName = "add-layout-btn edi-pen-btn"
            BtnText = {<><FaPen/> Edit</>}
            />
          </div>
          </div>

          <div className="che-aut-bar-cont">
          <div className="che-par-con">
            <input type="checkbox" />
            <p className="box-para"></p>
          </div>
          <div>
            <h1 className='xyz-temp'>XYZ Template</h1>
            <p>Edited by Taru Pathak</p>
          </div>
          <div className="btn-edit">
            <CustomButton 
            Btntype = "button"
            BtnclassName = "add-layout-btn edi-pen-btn"
            BtnText = {<><FaPen/> Edit</>}
            />
          </div>
          </div>

          <div className="che-aut-bar-cont">
          <div className="che-par-con">
            <input type="checkbox" />
            <p className="box-para"></p>
          </div>
          <div>
            <h1 className='xyz-temp'>XYZ Template</h1>
            <p>Edited by Taru Pathak</p>
          </div>
          <div className="btn-edit">
            <CustomButton 
            Btntype = "button"
            BtnclassName = "add-layout-btn edi-pen-btn"
            BtnText = {<><FaPen/> Edit</>}
            />
          </div>
          </div>

          <div className="che-aut-bar-cont">
          <div className="che-par-con">
            <input type="checkbox" />
            <p className="box-para"></p>
          </div>
          <div>
            <h1 className='xyz-temp'>XYZ Template</h1>
            <p>Edited by Taru Pathak</p>
          </div>
          <div className="btn-edit">
            <CustomButton 
            Btntype = "button"
            BtnclassName = "add-layout-btn edi-pen-btn"
            BtnText = {<><FaPen/> Edit</>}
            /> 
          </div>
          </div>
          </div>
          </div>
          <CustomButton 
          Btntype = "button"
          BtnclassName = "add-layout-btn add-camp-btns"
          BtnText = "Add Campaign"
          /> 
         </div>
    )
}

export default Createads