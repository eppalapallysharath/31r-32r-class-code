import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAPI } from "../redux/actions";

const FetchAPI = () => {
  const data = useSelector((state) => state.users);
  console.log(data);
  const dispatch = useDispatch();
  const handleAPI = () => {
    dispatch(fetchAPI());
  };

  return (
    <div>
      <p>FetchAPI</p>
      <button onClick={handleAPI}> Call API </button>
      {data.map((item) => (
        <>
          <li>{item.name}</li>
          <li>{item.email}</li>
        </>
      ))}
    </div>
  );
};

export default FetchAPI;
