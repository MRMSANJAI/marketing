import React from 'react';
import "./Charts.css";
const Charts = () => {
  return (
    <div>
      <div className='nav-bar-cont'>
        <nav>
          <ul className='ord-lis-nav'>
            <li href = "/campaigncharts"className='camp-list'>Campaign</li>
            <li href = "/adsetscharts"className='camp-list'>AdSets</li>
            <li href = "/adscharts"className='camp-list'>Ads</li>
            <li href = "/demographiccharts"className='camp-list'>Demographic</li>
            <li href = "/customconversionscharts"className='camp-list'>Custom Conversions</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Charts;
