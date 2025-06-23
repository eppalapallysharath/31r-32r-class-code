import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Redux/actions";
const App = () => {
  const state = useSelector((value) => value);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>Count {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button> &nbsp;{" "}
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

export default App;
