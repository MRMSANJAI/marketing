import React from 'react';
import './Boxes.css';
const Box = (props) => {
  return (
    <div className='bottomcontent'>
      <h5>{props.title}</h5>
      <h1>{props.value}</h1>
    </div>
  );
}

export default Box;
