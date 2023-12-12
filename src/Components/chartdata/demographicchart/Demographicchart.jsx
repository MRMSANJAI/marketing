import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';;
import './Demographicchart.css';
import Box from '../../boxes/Boxes';

const Demographicchart = () => {
  return (
  <div className='demographic-container'>
    <div className='chart-container'style={{display:'flex'}}>
     <div className='Gender-container'>
       <h4>Gender</h4><p>7%</p>
     <BarChart
        xAxis={[
        {
          id: 'barCategories',
          data: ['Male','','Female'],
          scaleType: 'band',
        },
        ]}
        series={[
          {
           data: [55,0, 47],
          },
         ]}
        width={270}
        height={310}
    />
     </div>
     <div className='CTR-container'>
           <h4>CTR</h4> <p>5.56%</p>
       </div>
      <div className='Age-container'>
        <h4>Age</h4><p>5.57%</p>
        <BarChart
        xAxis={[
        {
          id: 'barCategories',
          data: ['22-32','34-44','56-66','67-72'],
          scaleType: 'band',
        },
        ]}
        series={[
          {
           data: [50,55,47 ,65],
          },
         ]}
         width={360}
         height={310}
    />
      </div>
  </div>
  <div className='bottom-chart-container' style={{ display: "flex" }}>
      <Box title="Clicks" value="85" />
      <Box title="Impression" value="3,899" />
      <Box title="AverageCPC" value="2.68" />
      <Box title="CTR" value="2%" />
      <Box title="Cost per app activation" value="38.33" />
      <Box title="Cost per app use" value="48.33" />
    </div>
</div>
  );
}

export default Demographicchart;
