// import { useEffect, useRef, useState } from "react";

import ControlledComponents from "./components/ControlledComponents";
import UncontrolledComponents from "./components/UncontrolledComponents";

const App = () => {
  // const [data, setData] = useState(0);
  // const myRef = useRef(0);

  // useEffect(() => {
  //   myRef.current = myRef.current + 1;
  // });

  // const ref = useRef("hell");
  // console.log(myRef);
  // h1

  // document.querySelector("h1")
  // const handleClick = () => {
  //   // myRef.current.value = "helllo";
  //   ref.current.value = "helllo";
  // };

  // const handleIncrement = () => {
  //   console.log("increment");
  //   myRef.current += 1;
  //   console.log(myRef.current);
  // };
  // const handleDecrement = () => {
  //   console.log("increment");
  //   myRef.current -= 1;
  //   console.log(myRef.current);
  // };

  return (
    <div>
      {/* useRef */}
      {/* <h1 ref={myRef}>count{myRef.current}</h1> */}
      {/* <input type="text" ref={myRef} /> */}
      {/* <h1 ref={ref}>{ref.current}</h1> */}
      {/* <button onClick={handleClick}>click</button> */}

      {/* <input type="text" onChange={(e) => setData(e.target.value)} /> */}

      {/* <h1>render count {myRef.current}</h1> */}
      {/* <button onClick={handleIncrement}>+</button> */}
      {/* <button onClick={handleDecrement}>-</button> */}
      <ControlledComponents />
      {/* <UncontrolledComponents /> */}
    </div>
  );
};

export default App;
