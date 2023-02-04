import React, { Component } from 'react';
import Header from './Components/Header'; 
import {  useReducer } from 'react';


function App() {  

  const [isChecked, setIsChecked ] = useReducer((isChecked) => !isChecked, false);

  return (
    <> 
        <input type="checkbox" value={isChecked} onChange={setIsChecked} /> 
        <label>{ isChecked ?  "Checked" : "Not Checked"}</label>
    </>
  ); 
}

export default App;