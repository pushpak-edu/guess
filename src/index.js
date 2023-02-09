import React, { useState } from "react";
import ReactDOM from "react-dom";
import { StrictMode } from 'react';

import "./styles.css";

function App() {

  const [inputValueOne, setInputValueOne] = React.useState(0);
  const [result, setResult] = React.useState("");

  const min = 20;
  const max = 31;

  return (
    <div className="App">

      <p className="title">Guess the number between 20 - 30  by (Pushpak - 591)</p>


      <div className="numbers">
        <button className="buttonStyle" 
        onClick={() => setResult(Math.floor(Math.random() * (max - min)) + min)}
        type="button">Guess</button>
        <input 
        className="buttonStyle" 
        onChange={(e) => setInputValueOne(e.target.value)}
        value={inputValueOne}
        type="text">
        </input>
      </div>

      {inputValueOne != "" && <p className="result">
          {parseInt(inputValueOne) == parseInt(result) ? "lovely Guess" : "Sorry!! You missed it"}
      </p>}

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
<StrictMode>
  <App />
</StrictMode>, rootElement);
