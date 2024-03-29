import React, { useEffect, useState } from 'react';
import Table from '../../Components/tabledynamic/Tabledynamic';
import Switch from 'react-switch';
import './Ads.css';
import { FaSearch} from 'react-icons/fa';
import CustomButton from '../../Components/button/Button';
import { useNavigate } from 'react-router-dom';

const Ads = () => {

  const navigate = useNavigate();
  const [dataTable, setDataTable]=useState([])

  const clickAds = () => {
    navigate('/createads')
  }
  useEffect(()=>{
    fetch('http://localhost:3000/api/profileinfo')
    .then((response)=>response.json())
    .then((dataToget)=>{
      setDataTable(dataToget)
    })
    .catch((error)=>{
      console.error('error fetching data',error)
    })
  })

  const columns = [
    { Header: 'Off/On', accessor: 'isSwitchOn'},
    { Header: 'Ad', accessor: 'adname' },
    { Header: 'Campaign Name', accessor: 'campaignname' },
    { Header: 'Bid Strategy', accessor: 'bidstrategy' },
    { Header: 'Budget', accessor: 'budget' },
    { Header: 'Objective', accessor: 'objective' },
  ];

  const data = [
    {
      isSwitchOn: <Switch  height={20} width={50} onColor="#666" offColor="#999" />,
      campaignName: 'New Awareness Ad',
      deliveryStatus: 'uses',
      bidStrategy: 'Used ad set',
      budget: 'Used ad set',
      results: 'Awareness',
    },
  ]
  return (
    <div className='ads-page'>
      <div>
      <h1 className='ads-head'>Ads</h1>
      </div>
      <div className='sea-inp-cont'>
        <FaSearch className='sea-ico'/>   
        <input type='search' placeholder='Search and Filter' className='sea-inp-bar'/>
      </div>
      <div className='tab-btn-cont'>
        <CustomButton
        Btntype = 'button'
        BtnclassName = 'add-layout-btn crea-btn'
        BtnText = '+ Create'
        ClickEvent = {clickAds}
        />
         <Table columns={columns} data={dataTable} />
      </div>
    </div>
  );
}

export default Ads;
