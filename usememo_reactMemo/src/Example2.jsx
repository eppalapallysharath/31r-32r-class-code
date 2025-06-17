import React, { useState } from "react";
import Child1 from "./ChildComponent/Child1";
import MemoComp from "./ChildComponent/Child2";

const Example2 = () => {
  const [child1, setChild1] = useState("hi");
  const [child2, setChild2] = useState("hello");
  const [count, setCount] = useState(0);
  console.log("parent");
  return (
    <div>
      <h1>without React memo</h1>
      <Child1 data={child1} />
      <MemoComp data={child2} />
      <button onClick={() => setCount(count + 1)}>click</button>
      <p>count {count}</p>
    </div>
  );
};

export default Example2;
