// import { lazy, Suspense } from "react";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// // import Products from "./Pages/Products";
// // import HomePage from "./lazy_loading2/HomePage";
// // import Dashboard from "./Pages/Dashboard";
// // import Contact from "./Pages/Contact";
// // import About from "./Pages/About";
// // import Services from "./Pages/Services";
// // import PageNotFound from "./Pages/PageNotFound";

// const Dashboard = lazy(() => import("./Pages/Dashboard"));
// const Contact = lazy(() => import("./Pages/Contact"));
// const About = lazy(() => import("./Pages/About"));
// const Services = lazy(() => import("./Pages/Services"));
// const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
// const Products = lazy(() => import("./Pages/Products"));

// const App = () => {
//   return (
//     <BrowserRouter>
//       <nav>
//         <p>
//           <Link to="/">Dashboard</Link>
//         </p>
//         <p>
//           <Link to="/about">About</Link>
//         </p>
//         <p>
//           <Link to="/contact">Contact Us</Link>
//         </p>
//         <p>
//           <Link to="/services">Services</Link>
//         </p>
//         <p>
//           <Link to="/Products">Products</Link>
//         </p>
//       </nav>
//       <Suspense fallback={<p>Loading...</p>}>
//         <Routes>
//           {/* <Home />
//       <Contact /> */}
//           {/* <HomePage /> */}
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { useCallback, useState } from "react";
import Child from "./Child";

const App = () => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  const NameChange = useCallback(() => {
    const name = "Sharath";
    return show === true ? name.toUpperCase() : name.toLowerCase();
  }, [show]);

  return (
    <div>
      <h1>Parent</h1>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log("count");
        }}
      >
        increment
      </button>
      <button onClick={() => setShow(!show)}> name change</button>
      <Child name={NameChange} />
    </div>
  );
};

export default App;
