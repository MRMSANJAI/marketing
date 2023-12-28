import React,{useState} from "react";
import { IoSearch } from "react-icons/io5";
import CustomButton from "../../Components/button/Button";
import { FaPen } from "react-icons/fa";
import './Createads.css'
import ReactDropdown from "react-dropdown";
import 'react-dropdown/style.css';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
                
const Createads = () => {
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedBid, setSelectedBid] = useState(null);
  const [selectedObjective, setSelectedObjective] = useState(null);
  const [adname,setAdname] = useState("");
  const [campaignname,setCampaignname] = useState("");
  const [bidstrategy,setBidstrategy] = useState("");
  const [budget,setBudget] = useState("");
  const [objective,setObjective] = useState("");
  const [data,setData] = useState(null);
  const navigate = useNavigate();

  const options = ['Travel awareness', 'Cost awareness', 'Sales awareness'];
  const strategyoptions = ['Budget Strategy', 'Travel Strategy', 'Limited Strategy']
  const objectiveoptions = ['Cost Objective', 'Place Objective', 'Travel Objective']

  const onSelect = (selected) => {
    setSelectedOption(selected.value);
    setCampaignname(selected.value);
    
    setObjective(selected.value);
  };
  const onBid = (selected) => {
    setSelectedBid(selected.value);
    setBidstrategy(selected.value);
  }
  const onObject = (selected) => {
    setSelectedObjective(selected.value);
    setObjective(selected.value);
  }

  const handletabledata = async () => {
    const tabledata = {
      adname,
      campaignname,
      bidstrategy,
      budget,
      objective,
    }
    console.log(tabledata)
    try {
      const response = await axios.post("http://localhost:3000/api/backendneoleon",tabledata)
      setData(response.data);
      console.log("table data updated successfully")
      navigate('/ads')
    } catch (error) {
      console.log(error);
    }
  };
  
    return (
        <div className="cre-ads-cont">
         <div className="che-par-cont">
           <h1 className="camp-nam-head"><input type="checkbox" /> Campaign name</h1> 
           <ReactDropdown
          options={options}
          onChange={onSelect}
          value={selectedOption}
          placeholder="Awareness Campaign"
        />
         </div>
         <div className="ad-nam-cont">
          <h1 className="camp-nam-head"> <input type="checkbox" /> Ad name</h1>
          <input type="search" placeholder="New Traffic Ad" className="dr-do-bt-ac" onChange={(e) => {setAdname(e.target.value);}}/>
         </div>

         <div className="che-par-cont">
           <h1 className="camp-nam-head"><input type="checkbox" /> Bid Strategy</h1> 
           <ReactDropdown
          options={strategyoptions}
          onChange={onBid}
          value={selectedBid}
          placeholder="Strategy"
        />
         </div>

         <div className="ad-nam-cont">
          <h1 className="camp-nam-head"> <input type="checkbox" /> Budget</h1>
          <input type="search" placeholder="New Traffic Ad" className="dr-do-bt-ac" onChange={(e) => {setBudget(e.target.value);}}/>
         </div>

         <div className="che-par-cont">
           <h1 className="camp-nam-head"><input type="checkbox" /> Objective</h1> 
           <ReactDropdown
          options={objectiveoptions}
          onChange={onObject}
          value={selectedObjective}
          placeholder="Objectives"
        />
         </div>
        
          <CustomButton 
          Btntype = "button"
          BtnclassName = "add-layout-btn add-camp-btns"
          BtnText = "Add Campaign"
          ClickEvent = {handletabledata}
          /> 
         </div>
    )
}

export default Createads