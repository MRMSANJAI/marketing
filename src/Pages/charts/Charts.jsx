import React from 'react';
import "./Charts.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Campaignschart from '../../Components/chartdata/compaigncharts/Campaignschart';
import Demographicchart from '../../Components/chartdata/demographicchart/Demographicchart';
import Adsets from '../../Components/chartdata/adsetschart/Adsets';
import Adscharts from '../../Components/chartdata/adscharts/Adscharts';
import Customconversion from '../../Components/chartdata/customconversion/Customconversion';

const Charts = () => {

  const [selectedComponent,setSelectedComponent] = useState(null);

  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  }

  return (
    <div>
      <div className='nav-bar-cont'>
        <nav>
          <ul className='ord-lis-nav'>
            <Link  className='camp-list' onClick={() => handleComponentChange('campaignCharts')}>Campaign</Link>
            <Link  className='camp-list' onClick={() => handleComponentChange('adSets')}>AdSets</Link>
            <Link  className='camp-list' onClick={() => handleComponentChange('adsCharts')} >Ads</Link>
            <Link  className='camp-list' onClick={() => handleComponentChange('demographicChart')}>Demographic</Link>
            <Link  className='camp-list'onClick={() => handleComponentChange('customConversion')} >Custom Conversions</Link>
          </ul>
        </nav>
      </div>
      <div className='content-area'>
        {selectedComponent === 'campaignCharts' && <Campaignschart />}
        {selectedComponent === 'adSets' && <Adsets />}
        {selectedComponent === 'adsCharts' && <Adscharts />}
        {selectedComponent === 'demographicChart' && <Demographicchart />}
        {selectedComponent === 'customConversion' && <Customconversion />}
      </div>
    </div>
  );
}

export default Charts;

