import React, { useState } from "react";
import { useMemo } from "react";

const Example = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [count, setCount] = useState(0);

  const addition = () => {
    console.log("rendering");
    return num1 + num2;
  };

  const value = useMemo(() => {
    return addition();
  }, [num1, num2]);
  const handleIncrement = () => {
    console.log("count increment");
    setCount(count + 1);
  };
  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setNum1(Number(e.target.value));
        }}
        value={num1}
      />
      <input
        type="number"
        onChange={(e) => {
          setNum2(Number(e.target.value));
        }}
        value={num2}
      />
      {/* <h1>number1 {num1}</h1>
      <h1>number2 {num2}</h1> */}

      <h1>addition of num1 + num2 {value} </h1>
      <div>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default Example;
