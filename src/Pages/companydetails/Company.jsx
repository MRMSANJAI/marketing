import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { MdArrowDropDown } from "react-icons/md";
import { FaFacebook,FaTwitter ,FaLinkedinIn ,FaLink } from "react-icons/fa";
import "./Company.css";
import { Tab,Row,Col,Nav } from 'react-bootstrap';




const Company = () => {
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
             <h3>insights</h3> 
             
             <Tab.Container id="left-tabs-example" defaultActiveKey="first">
             <Row>
                <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item >
              <Nav.Link eventKey="first">Techonologies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Funding Rounds</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Job Posting</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">News</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Employee Trend</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
          <Tab.Pane eventKey="first">
                <p>Techonology insight Settings</p>
                <p>Ai</p>
                <p>CloudFare hosting</p>
                <p>CloudFare DNS</p>
                <p>Facebook Custom Audience</p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div>
                <p>Funding Round Insights</p>
                <p>Insight 1</p>
                <p>Insight 2</p>
              </div>
            </Tab.Pane>
          </Tab.Content>
         
        </Col>
      </Row>
    </Tab.Container>
  </div>
  </div> 
</div>
    
  );
}

export default Company;
