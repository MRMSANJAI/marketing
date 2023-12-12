import React from 'react';
import "./Customconversion.css"
import { LineChart } from '@mui/x-charts/LineChart';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BarChart } from '@mui/x-charts/BarChart';
const Customconversion = () => {

  function WithLabelExample() {
    const now = 60;
    return <ProgressBar now={now} label={`${now}%`} />;
  }
  return (
   
   <div className='bacc' >
      <div className='tttahh'>
     <div className='proger'>
     <div className='chartline'>
      <h2 className='events'>   Events</h2>
     <LineChart
  xAxis={[{ data: [1.3,2,3.3,5.4,6.8,6,8 ] }]}
  series={[
    {
      data: [28,36,46,54,60, ],
    },
  ]}
  width={330}
  height={400}
/>
     </div>
     <div className='chartline'>
     <h2 className='events'> Conversion</h2>
     <LineChart
  xAxis={[{ data: [1.3,2,3.3,5.4,6.8,6,8 ] }]}
  series={[
    {
      data: [28,36,46,54,60, ],
    },
  ]}
  width={330}
  height={400}
/>
     </div>
     <div className='chartline'>

     <BarChart
      xAxis={[{ scaleType: 'band', data: ['Desktop', 'Mobile'] }]}
      series={[{ data: [10,20] },  ]}
      width={330}
      height={400}
    />
     </div>
     </div>
     
     <div className='customertable'>
     <table class="custom-table">
  <thead >
    <tr>
      <th >Conversion name </th>
      <th>Event type</th>
      <th>Source type</th>
      <th>Last Occurred</th>
      <th> Events</th>
      <th>Conversions</th>
      <th>Cost per conven</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="first-column">Acme Dental</td>
      <td>add pay</td>
      <td>Mobile</td>
      <td>xzxzx</td>
      <td>20</td>
      <td>200</td>
      <td>RS.200</td>
    </tr>
   
  </tbody>
  <tbody>
    <tr>
      <td class="first-column">Acme Dental</td>
      <td>add pay</td>
      <td>Mobile</td>
      <td>xzxzx</td>
      <td>20</td>
      <td>200</td>
      <td>RS.200</td>
    </tr>
   
  </tbody>
  <tbody>
    <tr>
      <td class="first-column">Acme Dental</td>
      <td>add pay</td>
      <td>Mobile</td>
      <td>xzxzx</td>
      <td>20</td>
      <td>200</td>
      <td>RS.200</td>
    </tr>
   
  </tbody>
  <tbody>
    <tr>
      <td class="first-column">Acme Dental</td>
      <td>add pay</td>
      <td>Mobile</td>
      <td>xzxzx</td>
      <td>20</td>
      <td>200</td>
      <td>RS.200</td>
    </tr>
   
  </tbody>
  <tbody>
    <tr>
      <td class="first-column">Acme Dental</td>
      <td>add pay</td>
      <td>Mobile</td>
      <td>xzxzx</td>
      <td>20</td>
      <td>200</td>
      <td>RS.200</td>
    </tr>
   
  </tbody>
  <tbody>
    <tr>
      <td class="first-column">Acme Dental</td>
      <td>add pay</td>
      <td>Mobile</td>
      <td>xzxzx</td>
      <td>20</td>
      <td>200</td>
      <td>RS.200</td>
    </tr>
   
  </tbody>
</table>
     </div>
     </div>
    </div>
  );
}

export default Customconversion;
