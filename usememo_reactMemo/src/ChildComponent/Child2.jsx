import React, { memo } from "react";

const MemoComp = memo(({ data }) => {
  console.log("child2");
  return (
    <div>
      <h1>Child2</h1>
      <h2>{data}</h2>
    </div>
  );
});

export default MemoComp;
