import { useState, lazy, Suspense } from "react";

const Profile = lazy(() => import("./User"));

const Home = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h1> this home page </h1>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "hide user" : "show user"}
      </button>
      {/* <Suspense fallback={<p>Loading....</p>}> */}
      {toggle === true ? <Profile /> : null}
      {/* </Suspense> */}
    </div>
  );
};

export default Home;
