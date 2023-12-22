import React,{useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { MdArrowDropDown } from "react-icons/md";
import { FaFacebook,FaTwitter ,FaLinkedinIn ,FaLink } from "react-icons/fa";
import "./Company.css";
import Jobposition from '../../Components/jobposition/Jobposition';
import News from '../../Components/news/News';
import Fundingrounds from '../../Components/fundingrounds/Fundingrounds';
import Technologies from '../../Components/technologies/technologies';
import Empolyeetrend from '../../Components/employeetrend/Empolyeetrend';


const Company = () => {
  const [selectedHeading, setSelectedHeading] = useState(null);

   const [data, setData] = useState(null);


  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
  }

  

  return (
    <div className='company-details'>
        <div className='company-container'>
          <h3>Company Name</h3>
          <p>Company at Company Name</p>
          <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdonw-container'>
                 CRM /ATS<MdArrowDropDown />
               </Dropdown.Toggle>
              <Dropdown.Menu>
                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
               </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='workhistory-container'>
          <div style={{display:"flex"}}>
              <div className='work'>
                <h3>Work History</h3>
                  <div className='olgo'style={{display:"flex"}}>
                   <p>Logo</p>
                   <span> Company Name</span>
                  </div>
                  <div className='company-current'>Company/current</div>
             </div>
             <div className='location-content'>
               <h3>Location</h3>
               <p>Delhi,India</p>
             </div>
          </div>
        </div> 
        <div className='companyname-content'>
          <div className='Name-container' style={{display:"flex"}}>
            <p>Logo</p>
            <span>Company Name</span>
              <div className='social-icons'>
                <li><FaFacebook/></li>
                <li><FaTwitter/> </li>
                <li><FaLink/></li> 
                <li><FaLinkedinIn/></li>
             </div>
         </div>
              <div style={{display:"flex"}}>
                <div className='Industry-content'>
                <h3>Industry</h3>
                <p>Research,</p>
                <p>Techonology</p>
                </div>
               <div className='Employee-content'>
                  <h3>Employees</h3>
                   <p style={{fontSize:"17px",color:'gray'}}>200 <span style={{color:"steelblue"}}>Fine Leads</span></p>
                </div>
               <div className='Discription-content'>
                 <h3>Discription</h3>
                 <p>Company is a manufacturer of IVD kit, rapid text kit, ELDS Test Kit, instrumentation Range. <span style={{color:"steelblue"}}>Show More.</span></p>
                 <h3>Keywords</h3>
                 <h6>in vitro diagnosis</h6>
                 <h6>biotechonology</h6>
               </div>
            </div>
              <div className='founded-year'>
                  <h3>Founded Year</h3>
                  <p>1912</p>
                </div>
        </div>
        
        <div className='Ttable-container'>
           <div className='Tab-content'>
             <h3>Insights</h3> 
             <div className="borderinsigt">
      <tables >
        <thead className="insigttable">
          <tr>
            <th className="widttable" onClick={() => handleHeadingClick('Heading 1')}>Technologies</th>
            {selectedHeading === 'Heading 1' && <Technologies />}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="widttable" onClick={() => handleHeadingClick('Heading 2')}>Fundingrounds
            </td>
            {selectedHeading === 'Heading 2' && <Fundingrounds />}
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="widttable" onClick={() => handleHeadingClick('Heading 3')}>Job Posting</td>
            {selectedHeading === 'Heading 3' && <Jobposition />}
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="widttable" onClick={() => handleHeadingClick('Heading 4')}>News</td>
            {selectedHeading === 'Heading 4' && <News />}
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="widttable" onClick={() => handleHeadingClick('Heading 5')}>Empolyeetrend</td>
            {selectedHeading === 'Heading 5' && <Empolyeetrend />}
          </tr>
        </tbody>
      </tables>
    </div>

  </div>
  </div> 
</div>
    
  );
}

export default Company;
