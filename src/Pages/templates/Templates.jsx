import React, { useState } from 'react';
import CustomButton from '../../Components/button/Button';
import { FaPen } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown'
import './Templates.css';
import { IoMdArrowDropdown } from "react-icons/io";

const Templates = () => {

    return (
    <div className='template-page-cont'>
      <div className='tem-hea-btn'>
      <h1 className='tem-hea'>Templates</h1>
      <CustomButton
      Btntype = "button"
      BtnclassName = "add-layout-btn cre-tem-btn"
      BtnText = "Create Template"
      />
      </div>
      <div className='bor-cont'>
      <div className='che-box-para'>
        <input type='checkbox' />
        <p className='box-para'></p>
      </div>
      <div>
        <p className='xyz-para'>XYZ Template</p>
        <p>Edited by Taru Pathak</p>
      </div>
      <div className='btn-cla-cont'>
        <CustomButton 
        Btntype = "button"
        BtnclassName = "add-layout-btn edi-pen-btn"
        BtnText = {<><FaPen/> Edit</>}
        />
         <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='dro-dow-btn' >
        <IoMdArrowDropdown />
      </Dropdown.Toggle>
      <Dropdown.Menu className='dro-men-box' >
        <Dropdown.Item href="#/action-1" className='dro-items'>
          Create email
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" className='dro-items'>
          Preview
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" className='dro-items'>
          Share
        </Dropdown.Item>
        <Dropdown.Item href="#/action-4" className='dro-items'>
          Replicate
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
      </div>

      <div className='bor-cont'>
      <div className='che-box-para'>
        <input type='checkbox' />
        <p className='box-para'></p>
      </div>
      <div>
        <p className='xyz-para'>XYZ Template</p>
        <p>Edited by Taru Pathak</p>
      </div>
      <div className='btn-cla-cont'>
        <CustomButton 
        Btntype = "button"
        BtnclassName = "add-layout-btn edi-pen-btn"
        BtnText = {<><FaPen/> Edit</>}
        />
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='dro-dow-btn' >
        <IoMdArrowDropdown />
      </Dropdown.Toggle>
      <Dropdown.Menu className='dro-men-box' >
        <Dropdown.Item href="#/action-1" className='dro-items'>
          Create email
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" className='dro-items'>
          Preview
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" className='dro-items'>
          Share
        </Dropdown.Item>
        <Dropdown.Item href="#/action-4" className='dro-items'>
          Replicate
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
      </div>

      <div className='bor-cont'>
      <div className='che-box-para'>
        <input type='checkbox' />
        <p className='box-para'></p>
      </div>
      <div>
        <p className='xyz-para'>XYZ Template</p>
        <p>Edited by Taru Pathak</p>
      </div>
      <div className='btn-cla-cont'>
        <CustomButton 
        Btntype = "button"
        BtnclassName = "add-layout-btn edi-pen-btn"
        BtnText = {<><FaPen/> Edit</>}
        />
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='dro-dow-btn' >
        <IoMdArrowDropdown />
      </Dropdown.Toggle>
      <Dropdown.Menu className='dro-men-box' >
        <Dropdown.Item href="#/action-1" className='dro-items'>
          Create email
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" className='dro-items'>
          Preview
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" className='dro-items'>
          Share
        </Dropdown.Item>
        <Dropdown.Item href="#/action-4" className='dro-items'>
          Replicate
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
      </div>

      <div className='bor-cont'>
      <div className='che-box-para'>
        <input type='checkbox' />
        <p className='box-para'></p>
      </div>
      <div>
        <p className='xyz-para'>XYZ Template</p>
        <p>Edited by Taru Pathak</p>
      </div>
      <div className='btn-cla-cont'>
        <CustomButton 
        Btntype = "button"
        BtnclassName = "add-layout-btn edi-pen-btn"
        BtnText = {<><FaPen/> Edit</>}
        />
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='dro-dow-btn' >
        <IoMdArrowDropdown />
      </Dropdown.Toggle>
      <Dropdown.Menu className='dro-men-box' >
        <Dropdown.Item href="#/action-1" className='dro-items'>
          Create email
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" className='dro-items'>
          Preview
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" className='dro-items'>
          Share
        </Dropdown.Item>
        <Dropdown.Item href="#/action-4" className='dro-items'>
          Replicate
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
      </div>

      <div className='bor-cont'>
      <div className='che-box-para'>
        <input type='checkbox' />
        <p className='box-para'></p>
      </div>
      <div>
        <p className='xyz-para'>XYZ Template</p>
        <p>Edited by Taru Pathak</p>
      </div>
      <div className='btn-cla-cont'>
        <CustomButton 
        Btntype = "button"
        BtnclassName = "add-layout-btn edi-pen-btn"
        BtnText = {<><FaPen/> Edit</>}
        />
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='dro-dow-btn' >
        <IoMdArrowDropdown />
      </Dropdown.Toggle>
      <Dropdown.Menu className='dro-men-box' >
        <Dropdown.Item href="#/action-1" className='dro-items'>
          Create email
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" className='dro-items'>
          Preview
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" className='dro-items'>
          Share
        </Dropdown.Item>
        <Dropdown.Item href="#/action-4" className='dro-items'>
          Replicate
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
      </div>

      <div className='bor-cont'>
      <div className='che-box-para'>
        <input type='checkbox' />
        <p className='box-para'></p>
      </div>
      <div>
        <p className='xyz-para'>XYZ Template</p>
        <p>Edited by Taru Pathak</p>
      </div>
      <div className='btn-cla-cont'>
        <CustomButton 
        Btntype = "button"
        BtnclassName = "add-layout-btn edi-pen-btn"
        BtnText = {<><FaPen/> Edit</>}
        />
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='dro-dow-btn' >
        <IoMdArrowDropdown />
      </Dropdown.Toggle>
      <Dropdown.Menu className='dro-men-box' >
        <Dropdown.Item href="#/action-1" className='dro-items'>
          Create email
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" className='dro-items'>
          Preview
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" className='dro-items'>
          Share
        </Dropdown.Item>
        <Dropdown.Item href="#/action-4" className='dro-items'>
          Replicate
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
      </div>
    </div>
  );
}

export default Templates;