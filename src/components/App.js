import React, { useState } from "react";
import "./../styles/App.css";
import Greeting from "./Greeting";

const App = () => {
  const [displayValue, setDisplayValue] = useState("");

  return (
    <div>
      <h1>Enter your name:</h1>
      <input
        type="texx"
        onChange={(eve) => setDisplayValue(eve.target.value)}
      />
      {/* <p>{displayValue}</p>       */}
      <Greeting props={displayValue} />
    </div>
  );
};

export default App;
