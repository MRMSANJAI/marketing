import React from 'react';
import { Button } from "react-bootstrap";
import './Button.css';

const CustomButton = (props) => {
return (
    <Button
      props = {props.Btntype}
      className = {props.BtnclassName}
      onClick = {props.ClickEvent}
    >
     {props.BtnText}
    </Button>
)
}

export default CustomButton;