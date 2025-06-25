import React from "react";
import { useDispatch } from "react-redux";
import { decAction, incAction } from "../redux/Actions/counterActions";

const Counter = () => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incAction());
  };
  const handleDecrement = () => {
    dispatch(decAction());
  };
  return (
    <div>
      <h1>Counter Module</h1>
      <button onClick={handleIncrement}>increment</button>{" "}
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

export default Counter;
