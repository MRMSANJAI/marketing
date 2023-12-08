import React from 'react';
import {Button} from "react-bootstrap";
import'./Button2.css';

const LoginButton = (props) => {
  return (
    <Button
        props = {props.Btntypes}
        className={props.BtnclassNames}
        onClick={props.ClickEvents}
    >
        {props.BtnTexts}
    </Button>
  );
}

export default LoginButton;
