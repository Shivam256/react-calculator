import React,{useContext} from 'react';
import './screen.styles.scss';

import {ScreenContext} from '../../providers/screen/screen.provider';


const Screen = () => {
  const {currentExpression,currentAnswere} = useContext(ScreenContext);
  return (
    <div className="screen">{currentExpression}</div>
  )
}


export default Screen;