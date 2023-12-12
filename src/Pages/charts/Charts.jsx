import React from 'react';
import "./Charts.css";
import { Link } from 'react-router-dom';
const Charts = () => {
  return (
    <div>
      <div className='nav-bar-cont'>
        <nav>
          <ul className='ord-lis-nav'>
            <Link to= "/campaignscharts"className='camp-list'>Campaign</Link>
            <Link to = "/adsets"className='camp-list'>AdSets</Link>
            <Link to = "/adscharts"className='camp-list'>Ads</Link>
            <Link to = "/demographicchart"className='camp-list'>Demographic</Link>
            <Link to = "/customconversion"className='camp-list'>Custom Conversions</Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Charts;
