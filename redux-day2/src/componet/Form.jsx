import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputAction } from "../redux/actions";

const Form = () => {
  const state = useSelector((value) => value.input_text);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    console.log("input");
    dispatch(inputAction(event.target.value));
  };
  return (
    <form>
      <input type="text" onChange={handleChange} />
      <p>{state}</p>
    </form>
  );
};

export default Form;
