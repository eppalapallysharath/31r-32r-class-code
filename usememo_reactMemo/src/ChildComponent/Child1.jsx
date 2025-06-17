import React, { memo } from "react";

const Child1 = memo(({ data }) => {
  console.log("child1");
  return (
    <div>
      <h1>Child1</h1>
      <h2>{data}</h2>
    </div>
  );
});

export default Child1;
