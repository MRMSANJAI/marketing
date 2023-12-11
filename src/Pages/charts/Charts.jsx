import React from 'react';
import "./Charts.css";
const Charts = () => {
  return (
    <div>
      <div className='nav-bar-cont'>
        <nav>
          <ul className='ord-lis-nav'>
            <li className='camp-list'>Campaign</li>
            <li className='camp-list'>AdSets</li>
            <li className='camp-list'>Ads</li>
            <li className='camp-list'>Demographic</li>
            <li className='camp-list'>Custom Conversions</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Charts;
