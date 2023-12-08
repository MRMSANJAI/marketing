import React, { useState } from 'react';
import './Sidebar.css';
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { FaBandcamp ,FaSignal } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { GrTable } from "react-icons/gr";
import { NavLink, useNavigate } from 'react-router-dom';


const Sidebar = ({children}) => {
 const [isOpen ,setIsOpen]=useState(false);
 const toggle =()=> setIsOpen(!isOpen)  

 const navigate = useNavigate();
  const handleClick =()=>{
    navigate('/Profile');
  }
    

   const menuItem=[
    {
        path:'/campaigns',  
        icon:<FaBandcamp/>
    },
    {
        path:'/ads',  
        icon:<GrTable/>
    },
    {
        path:"/Templates",
        icon:<FaSignal />
    },
    {
        path:"/TargetAudience",
        icon:<FaPeopleGroup />
    },
   ]

  return (
    <div className='side-container'>
        <div className='sidelogo'>
            <p><BsLayoutTextSidebarReverse /></p>
            <p onClick={handleClick}> <CgProfile /></p>
        </div>
        <div className='nav-icons'>
{
    menuItem.map((item,index)=>(
        <NavLink to = {item.path}key={index}className="link"activeclassName="active">
          <div className='icon'>{item.icon}</div>  
          <div className='link_text'>{item.name}</div>
        </NavLink>
    ))
}
</div>
<main>{children}</main>
    </div>
  );
}
export default Sidebar;
