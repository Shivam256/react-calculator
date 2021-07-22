import React,{useContext} from "react";
import "./button.styles.scss";

import {ScreenContext} from '../../providers/screen/screen.provider';

const Button = ({ value, operation,onClic }) => {
  const clsName = `button-bdy ${value === 0 ? "zero-btn" : ""} ${
    operation ? "operate-btn" : ""
  }`;

  const {addToExpression,clearExpression,clearOneChar,evaluate} = useContext(ScreenContext);

  const addExpression = () => {
    addToExpression(value);
  }
  
  switch(value){ 
    case '*':
      return <button className={clsName} onClick={addExpression}>&times;</button>
    case '/':
      return <button className={clsName} onClick={addExpression}>&divide;</button>
    case '-':
      return <button className={clsName} onClick={addExpression}>&ndash;</button>
    case 'C':
      return <button className={clsName} onClick={clearExpression}>{value}</button>
    case '<-':
      return <button className={clsName} onClick={clearOneChar}>{value}</button>
    case '=':
      return <button className={clsName} onClick={evaluate}>{value}</button>
    default:
      return <button className={clsName} onClick={addExpression}>{value}</button>  
  }
  
};

export default Button;
