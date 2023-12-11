import React from 'react';
import './Target.css';
import { MdArrowDropDown } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown';

const Target = () => {
  return (
    <div className='targot-content'>
        <h2>Target Audience</h2>
        <div className='filters-content'>
            <h3>Select Filters</h3>
       <Dropdown >
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='ddbutton'>Job Title</Dropdown.Toggle><MdArrowDropDown/>
             <Dropdown.Menu>
               <Dropdown.Item >Action</Dropdown.Item>
               <Dropdown.Item >Another action</Dropdown.Item>
               <Dropdown.Item >Something else</Dropdown.Item>
             </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic"className='ddbutton'>Company</Dropdown.Toggle><MdArrowDropDown />
             <Dropdown.Menu>
               <Dropdown.Item >Action</Dropdown.Item>
               <Dropdown.Item >Another action</Dropdown.Item>
               <Dropdown.Item >Something else</Dropdown.Item>
             </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic"className='ddbutton'> Location</Dropdown.Toggle><MdArrowDropDown />
             <Dropdown.Menu>
               <Dropdown.Item >Action</Dropdown.Item>
               <Dropdown.Item >Another action</Dropdown.Item>
               <Dropdown.Item >Something else</Dropdown.Item>
             </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic"className='ddbutton'>Employee</Dropdown.Toggle><MdArrowDropDown  />
             <Dropdown.Menu>
               <Dropdown.Item >Action</Dropdown.Item>
               <Dropdown.Item >Another action</Dropdown.Item>
               <Dropdown.Item >Something else</Dropdown.Item>
             </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic"className='ddbutton'>Industry</Dropdown.Toggle><MdArrowDropDown />
             <Dropdown.Menu>
               <Dropdown.Item >Action</Dropdown.Item>
               <Dropdown.Item >Another action</Dropdown.Item>
               <Dropdown.Item >Something else</Dropdown.Item>
             </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic"className='ddbutton'>Techonolgy</Dropdown.Toggle><MdArrowDropDown />
             <Dropdown.Menu>
               <Dropdown.Item >Action</Dropdown.Item>
               <Dropdown.Item >Another action</Dropdown.Item>
               <Dropdown.Item >Something else</Dropdown.Item>
             </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic"className='ddbutton'>Revenue <MdArrowDropDown/></Dropdown.Toggle>
             <Dropdown.Menu>
               <Dropdown.Item >Action</Dropdown.Item>
               <Dropdown.Item >Another action</Dropdown.Item>
               <Dropdown.Item >Something else</Dropdown.Item>
             </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic"className='ddbutton'>Funding<MdArrowDropDown/></Dropdown.Toggle>
             <Dropdown.Menu>
               <Dropdown.Item >Action</Dropdown.Item>
               <Dropdown.Item >Another action</Dropdown.Item>
               <Dropdown.Item >Something else</Dropdown.Item>
             </Dropdown.Menu>
        </Dropdown>
        </div>
    </div>
  );
}

export default Target;