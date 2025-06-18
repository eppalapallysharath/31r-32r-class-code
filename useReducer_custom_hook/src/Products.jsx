import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./customHooks/useFetch";

const Products = () => {
  // const [data, setData] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => setData(res.data))
  //     .catch((error) => console.log(error));
  // }, []);
  // console.log(data);

  const data = useFetch("https://fakestoreapi.com/products");
  return (
    <div>
      <div>
        {data === null ? (
          <h1>loading</h1>
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              style={{ border: "2px solid red", margin: "1rem" }}
              onClick={() => {
                navigate(`/product/${item.id}`);
              }}
            >
              <h1>{item.title}</h1>
            </div>
          ))
        )}
      </div>
      {/* {data.map((item) => (
        <div
          key={item.id}
          style={{ border: "2px solid red", margin: "1rem" }}
          onClick={() => {
            navigate(`/product/${item.id}`);
          }}
        >
          <h1>{item.title}</h1>
        </div>
      ))} */}
    </div>
  );
};

export default Products;
