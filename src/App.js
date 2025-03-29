import React, { useState } from 'react';
import Addition from './components/Inputs';
import Result from './components/Answer';
import './App.css';

function App() {
  const [sum, setSum] = useState(0); 

  return (
    <div>
      <Addition setSum={setSum} /> 
      <Result sum={sum} /> 
    </div>
  );
}

export default App;