import React, { useRef } from "react";

const UncontrolledComponents = () => {
  const myref = useRef("hi");

  const handleClick = () => {
    const char = myref.current.value;
    for (const i of char) {
      if ((i >= "A" && i <= "Z") || (i >= "a" && i <= "z")) {
        console.log("a-z");
      } else {
        console.log("not a-z and A-Z");
        alert("enter name properly and don't enter the number and other ");
      }
    }
  };
  return (
    <div>
      UncontrolledComponents
      <div>
        <label>username</label>
        <input type="text" ref={myref} />
        <button onClick={handleClick}>submit </button>
      </div>
    </div>
  );
};

export default UncontrolledComponents;
