import React, { useEffect, useState } from "react";

const Child = ({ array }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("child");
    setList(array());
  }, [array]);

  return (
    <div>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default Child;
