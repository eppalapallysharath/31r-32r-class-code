import React from "react";
import Counter from "./componet/Counter";
import Products from "./componet/Products";
import { useSelector } from "react-redux";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const apiData = useSelector((state) => state.products.productsData);
  console.log(apiData);
  return (
    <div>
      <Counter />
      <h1>count {count}</h1>
      <Products />
      <div>
        {apiData === null ? (
          <p>loading...</p>
        ) : (
          apiData?.products?.map((item) => <p>{item.title}</p>)
        )}
      </div>
    </div>
  );
};

export default App;
