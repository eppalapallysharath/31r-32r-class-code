import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./customHooks/useFetch";

const Product = () => {
  //   const [data, setData] = useState({});
  const { id } = useParams();

  //   useEffect(() => {
  //     axios
  //       .get(`https://fakestoreapi.com/products/${id}`)
  //       .then((res) => setData(res.data))
  //       .catch((error) => console.log(error));
  //   }, []);
  //   console.log(data);
  const data = useFetch(`https://fakestoreapi.com/products/${id}`);
  return (
    <div>
      {data === null ? (
        <h1>loading</h1>
      ) : (
        <>
          <h1>Product id {data.id}</h1>
          <h1>Product title {data.title}</h1>
        </>
      )}
    </div>
  );
};

export default Product;
