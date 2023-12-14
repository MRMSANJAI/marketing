import React, { useState } from "react";
import "./Insights.css"
import Jobposition from "../../Components/jobposition/Jobposition";
import News from "../../Components/news/News";
import Fundingrounds from "../../Components/fundingrounds/Fundingrounds";
import Technologies from "../../Components/technologies/technologies";
import Empolyeetrend from "../../Components/employeetrend/Empolyeetrend";
const Insights = () => {
  const [selectedHeading, setSelectedHeading] = useState(null);

  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
  }
  return (

    <div className="borderinsigt">
      <tables >
        <thead className="insigttable">
          <tr>
            <th className="widttable" onClick={() => handleHeadingClick('Heading 1')}>Technologies</th>
            {selectedHeading === 'Heading 1' && <Technologies />}

          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="widttable" onClick={() => handleHeadingClick('Heading 2')}>Fundingrounds
            </td>

            {selectedHeading === 'Heading 2' && <Fundingrounds />}


          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="widttable" onClick={() => handleHeadingClick('Heading 3')}>Job Posting</td>
            {selectedHeading === 'Heading 3' && <Jobposition />}
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="widttable" onClick={() => handleHeadingClick('Heading 4')}>News</td>
            {selectedHeading === 'Heading 4' && <News />}
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="widttable" onClick={() => handleHeadingClick('Heading 5')}>Empolyeetrend</td>
            {selectedHeading === 'Heading 5' && <Empolyeetrend />}
          </tr>
        </tbody>
      </tables>
    </div>
  )
}
export default Insights




