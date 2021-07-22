import React from 'react';
import './App.scss';

//components
import Screen from './components/screen/screen.component';
import ButtonContainer from './components/button-container/button-container.component';

const App = () => {
  return(
    <div className="App">
     <div className="calculator">
      <Screen/>
      <ButtonContainer/>
     </div>
    </div>
    
  )
}

export default App;
