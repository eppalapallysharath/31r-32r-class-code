import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementAction, randomAction } from "./redux/actions";
import Form from "./componet/Form";
import FetchAPI from "./componet/FetchAPI";

const App = () => {
  const count = useSelector((state) => state.count);
  const random = useSelector((state) => state.number);
  // console.log(state);
  const dispatch = useDispatch();
  const handleInc = () => {
    dispatch(incrementAction());
  };

  const handleRandomNum = () => {
    const random = Math.floor(Math.random() * 10);
    dispatch(randomAction(random));
  };

  return (
    <div>
      {/* <h1>Redux day 2</h1>
      <p>count {count}</p>
      <button onClick={handleInc}> increase number</button>
      <br />
      <br />
      <p>random number {random}</p> */}
      {/* <p>digit: {state.digit}</p> */}
      {/* <button onClick={handleRandomNum}>click to random value</button> */}

      {/* <Form /> */}
      {/* api calling code */}
      <FetchAPI />
    </div>
  );
};

export default App;
