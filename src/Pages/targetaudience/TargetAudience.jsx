import React, { useState } from 'react';
import "./TargetAudience.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { MdArrowDropDown } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import CustomButton from '../../Components/button/Button';
import { useNavigate } from 'react-router-dom';

const Audience = () => {
  const navigate = useNavigate();
  const handleClick =()=>{
    navigate('/Company');
  }
     
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleOpen = () => {
    setShowDropdown(false);
  };

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
       <Dropdown show={showDropdown} onClick={toggleDropdown}>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className='down-button'>
            <MdArrowDropDown onClick={handleOpen}/>
          </Dropdown.Toggle>
      <Dropdown.Menu className='Dropdown-container'>
        <Dropdown.Item className='Droplist-content'>Create</Dropdown.Item>
        <Dropdown.Item className='Droplist-content' >Preview</Dropdown.Item>
        <Dropdown.Item className='Droplist-content' >Share</Dropdown.Item>
        <Dropdown.Item  className='Droplist-content'>Replicate</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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
            />
       <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className='down-button'>
          <MdArrowDropDown />
           </Dropdown.Toggle>
      <Dropdown.Menu className='Dropdown-container'>
        <Dropdown.Item className='Droplist-content'>Create</Dropdown.Item>
        <Dropdown.Item className='Droplist-content' >Preview</Dropdown.Item>
        <Dropdown.Item className='Droplist-content' >Share</Dropdown.Item>
        <Dropdown.Item  className='Droplist-content'>Replicate</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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
       <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className='down-button'>
          <MdArrowDropDown />
           </Dropdown.Toggle>
      <Dropdown.Menu className='Dropdown-container'>
        <Dropdown.Item className='Droplist-content'>Create</Dropdown.Item>
        <Dropdown.Item className='Droplist-content' >Preview</Dropdown.Item>
        <Dropdown.Item className='Droplist-content' >Share</Dropdown.Item>
        <Dropdown.Item  className='Droplist-content'>Replicate</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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
       <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className='down-button'>
          <MdArrowDropDown />
           </Dropdown.Toggle>
      <Dropdown.Menu className='Dropdown-container'>
        <Dropdown.Item className='Droplist-content'>Create</Dropdown.Item>
        <Dropdown.Item className='Droplist-content' >Preview</Dropdown.Item>
        <Dropdown.Item className='Droplist-content' >Share</Dropdown.Item>
        <Dropdown.Item  className='Droplist-content'>Replicate</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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
       <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className='down-button'>
          <MdArrowDropDown />
           </Dropdown.Toggle>
      <Dropdown.Menu className='Dropdown-container'>
        <Dropdown.Item className='Droplist-content'>Create</Dropdown.Item>
        <Dropdown.Item className='Droplist-content' >Preview</Dropdown.Item>
        <Dropdown.Item className='Droplist-content' >Share</Dropdown.Item>
        <Dropdown.Item  className='Droplist-content'>Replicate</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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
       <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className='down-button'>
          <MdArrowDropDown />
           </Dropdown.Toggle>
      <Dropdown.Menu className='Dropdown-container'>
        <Dropdown.Item className='Droplist-content'>Create</Dropdown.Item>
        <Dropdown.Item className='Droplist-content' >Preview</Dropdown.Item>
        <Dropdown.Item className='Droplist-content' >Share</Dropdown.Item>
        <Dropdown.Item  className='Droplist-content'>Replicate</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>   
      </div>
    </div>

    </div>
  );
};

export default Audience;
