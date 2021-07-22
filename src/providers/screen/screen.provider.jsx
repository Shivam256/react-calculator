import React, { createContext,useState,useEffect } from "react";

import axios from 'axios';

export const ScreenContext = createContext({
  currentExpression: "",
  currentAnswere: "",
  addToExpression:()=>{},
  clearExpression:()=>{},
  clearOneChar:()=>{},
  evaluate:()=>{}
});

const ScreenProvider = ({ children }) => {
  const [currentExpression,setExpression] = useState('');
  const [currentAnswere,setAnswere] = useState('');

  const addToExpression = (txt) => setExpression(currentExpression+txt);

  const clearExpression = () => setExpression('');

  const clearOneChar = () => setExpression(currentExpression.substring(0,currentExpression.length-1));

  const evaluate = async () => {
    const encodedExpression = encodeURIComponent(currentExpression);
    let url = `http://api.mathjs.org/v4/?expr=${encodedExpression}`;
    const result = await axios.get(url);

    setExpression(result.data);
  };

  return (
    <ScreenContext.Provider
    value={{
      currentExpression,
      currentAnswere,
      addToExpression,
      clearExpression,
      clearOneChar,
      evaluate
    }}>
      {children}
    </ScreenContext.Provider>
  );
};


export default ScreenProvider;