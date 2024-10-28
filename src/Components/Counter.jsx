import React, { useState, useSyncExternalStore } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  //functions
  const increment = () => {
    setCounter(counter + 1);
  };

  const decriment = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter the number::{counter}</h1>
      <button onClick={increment}>Incremnt</button>
      <button onClick={decriment}>Decrioment</button>
    </div>
  );
};

export default Counter;
