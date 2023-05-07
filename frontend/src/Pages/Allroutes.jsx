import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./Product/Product";
import AdminLogin from "./Admin Page/AdminLogin";
import AdminAddProducts from "./Admin Page/AdminAddProducts";
import AdminProducts from "./Admin Page/AdminProducts";
import AdminEditProduct from "./Admin Page/AdminEditProduct";
import CartPage from "./Cart/CartPage";

import Payments from "./Payment/Payments";
import Home from "./Home";



const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminaddproduct" element={<AdminAddProducts />} />
        <Route path="/adminproducts" element={<AdminProducts />} />
        <Route path="/admineditproduct" element={<AdminEditProduct />} />
        <Route path="/payments" element={<Payments/>} />
      </Routes>
    </div>
  );
};
export default Allroutes;