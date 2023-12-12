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
            <Link to = "/adsetscharts"className='camp-list'>AdSets</Link>
            <Link to = "/adscharts"className='camp-list'>Ads</Link>
            <Link to = "/demographiccharts"className='camp-list'>Demographic</Link>
            <Link href = "/customconversionscharts"className='camp-list'>Custom Conversions</Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Charts;
