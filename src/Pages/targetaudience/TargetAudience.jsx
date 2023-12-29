import React, { useState } from 'react';
import "./TargetAudience.css";
import { MdArrowDropDown } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import CustomButton from '../../Components/button/Button';
import { useNavigate } from 'react-router-dom';
import ReactDropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import"../../Pages/targetaudience/Customstyle.css";


const Audience = () => {
  const navigate = useNavigate();
  const handleClick =()=>{
    navigate('/Company');
  }
  const editClick =()=>{
    navigate('/target')
  }
     
const [selectedOption ,setSelectedOption]=useState(null);

  const options = [ 'Create Name', 'Preview', 'Share','Replicate']
const defaultOption = options[null];
 
const _onSelect=(selected)=>{
  setSelectedOption(selected);
}

  return (
    <div>
    <div className='Target-container'>
      <div className='Audience-heading' style={{display:"flex"}}>
        <h2>Target Audience Listing</h2>
        <CustomButton
         Btntype="button"
         BtnclassName="add-layout-btn Target-btn"
         BtnText="Create Template"
         ClickEvent={handleClick}
        />
      </div>
      <div className='company'>
        <div className='heading1'>
          <h4>XYZ Company</h4>
          <p>Edited by Taru Pathok</p>
        </div>
        <div style={{ display: "flex",flexDirection:"row",gap:"5px" }}>   
           <CustomButton 
           Btntype="button"
           BtnclassName="add-layout-btn Edit-btn"
           BtnText={<><MdEdit/> Edit</>}
            />   
          <ReactDropdown
           className='ReDropdown'
            options={options} 
            onChange={_onSelect}
            value={null} 
            placeholder={null} 
         />
        </div>   
      </div>
    </div>
    <div className='Target-container'>
      <div className='company'>
        <div className='heading1'>
          <h4>XYZ Company</h4>
          <p>Edited by Taru Pathok</p>
        </div>
        <div style={{ display: "flex",flexDirection:"row",gap:"5px" }}>   
           <CustomButton 
           Btntype="button"
           BtnclassName="add-layout-btn Edit-btn"
           BtnText={<><MdEdit/>Edit</>}
           ClickEvent={editClick}
            />
         <ReactDropdown
            className='ReactDropdown'
            options={options} 
            onChange={_onSelect}
            value={null} 
            placeholder={null} 
          />
        </div>   
      </div>
    </div>
    <div className='Target-container'>
      <div className='company'>
        <div className='heading1'>
          <h4>XYZ Company</h4>
          <p>Edited by Taru Pathok</p>
        </div>
        <div style={{ display: "flex",flexDirection:"row",gap:"5px" }}>   
           <CustomButton 
           Btntype="button"
           BtnclassName="add-layout-btn Edit-btn"
           BtnText={<><MdEdit/> Edit</>}
            />
         <ReactDropdown 
           className='ReactDropdown'
           options={options} 
           onChange={_onSelect}
           value={null} 
           placeholder={null} 
          />
        </div>   
      </div>
    </div>

    <div className='Target-container'>
      <div className='company'>
        <div className='heading1'>
          <h4>XYZ Company</h4>
          <p>Edited by Taru Pathok</p>
        </div>
        <div style={{ display: "flex",flexDirection:"row",gap:"5px" }}>   
           <CustomButton 
           Btntype="button"
           BtnclassName="add-layout-btn Edit-btn"
           BtnText={<><MdEdit/> Edit</>}
            />
        <ReactDropdown 
           className='ReactDropdown'
           options={options} 
           onChange={_onSelect}
           value={null} 
           placeholder={null} 
          />
        </div>   
      </div>
    </div>

    <div className='Target-container'>
      <div className='company'>
        <div className='heading1'>
          <h4>XYZ Company</h4>
          <p>Edited by Taru Pathok</p>
        </div>
        <div style={{ display: "flex",flexDirection:"row",gap:"5px" }}>   
           <CustomButton 
           Btntype="button"
           BtnclassName="add-layout-btn Edit-btn"
           BtnText={<><MdEdit/> Edit</>}
            />
        <ReactDropdown
           className='ReactDropdown'
           options={options} 
           onChange={_onSelect}
           value={null} 
           placeholder={null} 
          />
        </div>   
      </div>
    </div>

    <div className='Target-container'>
      <div className='company'>
        <div className='heading1'>
          <h4>XYZ Company</h4>
          <p>Edited by Taru Pathok</p>
        </div>
        <div style={{ display: "flex",flexDirection:"row",gap:"5px" }}>   
           <CustomButton 
           Btntype="button"
           BtnclassName="add-layout-btn Edit-btn"
           BtnText={<><MdEdit/> Edit</>}
            />
       <ReactDropdown 
           className='ReactDropdown'
           options={options} 
           onChange={_onSelect}
           value={null} 
           placeholder={null} 
          />
        </div>   
      </div>
    </div>

    </div>
  );
};

export default Audience;
