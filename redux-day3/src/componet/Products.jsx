import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAction } from "../redux/Actions/productsAction";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAction());
  }, []);

  return (
    <div>
      <h1>Products data</h1>
    </div>
  );
};

export default Products;
