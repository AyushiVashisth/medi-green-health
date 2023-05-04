import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./Product/Product";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
