import React, { useState } from "react";

const ControlledComponents = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const checkInput = (value) => {
    let b;
    for (const i of value) {
      if ((i >= "A" && i <= "z") || (i >= "a" && i <= "z")) {
        b = true;
      } else {
        b = false;
      }
    }
    return b;
  };

  const handleChange = (e) => {
    let value = e.target.value;
    // console.log(checkInput(value));
    if (checkInput(value) === false) {
      setError("not alphabets");
    } else {
      setInput(e.target.value);
      setError("");
    }
  };

  console.log(input);
  const handleClick = () => {
    console.log(input);
  };

  return (
    <div>
      <h1>ControlledComponents</h1>
      <label>username</label>{" "}
      <input type="text" onChange={handleChange} value={input} />
      <h1>{error}</h1>
      <button onClick={handleClick}> control </button>
    </div>
  );
};

export default ControlledComponents;
