import React from "react";
import Componet1 from "./Componet1";
import Products from "./Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Product";
const App = () => {
  return (
    <BrowserRouter>
      {/* <Componet1 /> */}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
