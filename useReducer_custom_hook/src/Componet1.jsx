import React, { useReducer, useState } from "react";

const initialState = { count: 0, input: "" };
const myreducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "input_text":
      return { ...state, input: action.payload };
    default:
      return state;
  }
};

const Componet1 = () => {
  //   const [count, setCount] = useState(0);
  //   const [input, setInput] = useState("");
  const [value, dispatch] = useReducer(myreducer, initialState);

  const handleInc = () => {
    dispatch({ type: "increment" });
    // setCount(count + 1);
  };

  const handleDec = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div>
      <h1>count {value.count}</h1>
      <input
        type="text"
        onChange={(event) => {
          dispatch({ type: "input_text", payload: event.target.value });
        }}
      />
      <h2>{value.input}</h2>
      <div>
        <button onClick={handleInc}>+</button>
      </div>
      <br />
      <div>
        <button onClick={handleDec}>-</button>
      </div>
    </div>
  );
};

export default Componet1;
