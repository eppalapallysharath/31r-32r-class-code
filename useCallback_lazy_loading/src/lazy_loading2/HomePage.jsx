import React, { Suspense, useState } from "react";
// import Profile from "./Profile";

const UserProfile = React.lazy(() => import("./Profile"));

const Loading = () => {
  return <p>Loading....</p>;
};

const HomePage = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Home Page</h1>
      <Suspense fallback={<Loading />}>
        {show === true ? <UserProfile /> : <p>profile hided</p>}
      </Suspense>
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
    </div>
  );
};

export default HomePage;
