import React from 'react';
import { BarChart } from '@mui/x-charts';
import { LineChart } from '@mui/x-charts';
import './Campaignscharts.css'
import Box from '../../boxes/Boxes'

const Campaignschart = () => { 
  return (
    <div className='char-cont'>
      <div className='char-img-cont'>
      <div className='line-chart-cont'>
        <div className='hea-par'>
        <h1 className='pub-head'>Cost per app use</h1>
        <p className='pub-para'>Rs.48</p>
        </div>
        <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8] }]}
      series={[
        {
          data: [0,3,5,7,8],
        },
      ]}
      width={350}
      height={300}
    />
      </div>
      <div className='line-chart-cont'>
        <div className='hea-par'>
        <h1 className='pub-head'>Cost per app use</h1>
        <p className='pub-para'>Rs.48</p>
        </div>
        <div className='bars-cont'>
          <div >
          <label>Tesla electric cars </label>
          <label className='rs-labe'>Rs.48</label>
        <div className='prog-bar'></div>
        </div>
        <div>
        <label>Tesla electric cars</label>
        <label className='rs-labe'>Rs.48</label>
        <div className='prog-bar'></div>
        </div>
        <div>
        <label>Tesla electric cars </label>
        <label className='rs-labe'>Rs.48</label>
        <div className='prog-bar'></div>
        </div>
        <div>
        <label>Tesla electric cars</label>
        <label className='rs-labe'>Rs.48</label>
        <div className='prog-bar'></div>
        </div>
        </div>
        </div>
      
      <div className='pub-pla-cont'>
        <h1 className='pub-head'>Publisher Platform</h1>
        <BarChart
      xAxis={[
        {
          id: 'socialSites',
          data: ['Messenger', 'FB', 'Instagram','LinkedIn'],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [50,55,48,47],
        },
      ]}
      width={350}
      height={300}
    />
      </div>
      </div>
      <div style={{display:"flex",gap:"25px",marginTop:"50px"}}>
      <Box title="Clicks" value="85" />
      <Box title="Impressions" value="3,898" />
      <Box title="Average CPC" value="2.68" />
      <Box title="CTR" value="2%" />
      <Box title="Cost per app activation" value="38.33" />
      <Box title="Cost per app use" value="48.33" />
      </div>
      </div>
  );
}

export default Campaignschart;
