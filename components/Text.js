import React, { useState } from "react";

const Text = ({ text }) => {
  const [state, setState] = useState(0);

  const add = () => {
    setState(state + 1);
  };

  return (
    <div>
      <h1>Hello World</h1>
      <h2>Hello {text}</h2>
      <h2>Count {state}</h2>
      <button role="button" onClick={add}>
        Increase
      </button>
      <button role="button" onClick={add}>
        Increase2
      </button>
    </div>
  );
};

export default Text;
