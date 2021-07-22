import React from 'react';
import './button-container.styles.scss';

import Button from '../button/button.component'
;
const ButtonContainer = () => {
  return(
    <div className="button-container">
      <Button value={'C'}/>
      <Button value={'+/-'}/>
      <Button value={'<-'} />
      <Button value={'/'} operation='/'/>
      <Button value={7}/>
      <Button value={8}/>
      <Button value={9}/>
      <Button value={'*'} operation = '*'/>
      <Button value={4}/>
      <Button value={5}/>
      <Button value={6}/>
      <Button value={'-'} operation='-'/>
      <Button value={1}/>
      <Button value={2}/>
      <Button value={3}/>
      <Button value={'+'} operation='+'/>
      <Button value={0}/>
      <Button value={'.'}/>
      <Button value={'='} operation='='/>
    </div>
  )
}

export default ButtonContainer;