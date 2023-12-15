import React from 'react';
import Table from '../../Components/tabledynamic/Tabledynamic';
import Switch from 'react-switch'
import './Ads.css';
import { FaSearch} from 'react-icons/fa';
import CustomButton from '../../Components/button/Button';
import { useNavigate } from 'react-router-dom';

const Ads = () => {

  const navigate = useNavigate();

  const clickAds = () => {
    navigate('/createads')
  }

  const columns = [
    { Header: 'Off/On', accessor: 'isSwitchOn'},
    { Header: 'Ad', accessor: 'campaignName' },
    { Header: 'Preview Link', accessor: 'deliveryStatus' },
    { Header: 'Bid Strategy', accessor: 'bidStrategy' },
    { Header: 'Budget', accessor: 'budget' },
    { Header: 'Objective', accessor: 'results' },
  ];

  const data = [
    {
      isSwitchOn: <Switch  height={20} width={50} onColor="#666" offColor="#999" />,
      campaignName: 'New Awareness Ad',
      deliveryStatus: '',
      bidStrategy: 'Used ad set',
      budget: 'Used ad set',
      results: 'Awareness',
    },
    { isSwitchOn: '', campaignName: '', deliveryStatus: '', bidStrategy: '', budget: '', results: '', emptyColumn1: '' },
    { isSwitchOn: '', campaignName: '', deliveryStatus: '', bidStrategy: '', budget: '', results: '', emptyColumn1: '' },
    { isSwitchOn: '', campaignName: '', deliveryStatus: '', bidStrategy: '', budget: '', results: '', emptyColumn1: '' },
    { isSwitchOn: '', campaignName: '', deliveryStatus: '', bidStrategy: '', budget: '', results: '', emptyColumn1: '' },
    { isSwitchOn: '', campaignName: '', deliveryStatus: '', bidStrategy: '', budget: '', results: '', emptyColumn1: '' },
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
         <Table columns={columns} data={data} />
      </div>
    </div>
  );
}

export default Ads;
