import React from "react";
import "./Empolyeetrend.css"
import { BarChart } from '@mui/x-charts/BarChart';

const Empolyeetrend =() => {
    return(
<div>
    <div>
        <h2>Total Count</h2>
        <div className="employeeeflex">
            <h3>-8.2%  </h3><h3>-14.3%</h3><h3>-2.0%</h3>
            </div>

         <div className="employefe">
            <p>6 Month Growth</p><p>1 Year Growth</p><p>2 Year Growth</p>
         </div>
    </div>
<BarChart className="cherempl"
      xAxis={[{ scaleType: 'band', data: ['2022', '2023', ] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={400}
      height={300}
    />
</div>
    )
}
export default Empolyeetrend