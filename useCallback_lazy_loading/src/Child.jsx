import React, { useEffect, useState } from "react";

const Child = ({ name }) => {
  const [data, setData] = useState();
  useEffect(() => {
    console.log("name change");
    setData(name());
  }, [name]);
  return (
    <div>
      <p>name is {data}</p>
    </div>
  );
};

export default Child;
