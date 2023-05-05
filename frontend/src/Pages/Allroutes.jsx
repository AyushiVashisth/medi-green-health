import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./Product/Product";
import Signup from "./Signup";
import { BrandedDeals } from "./Cart/scroller";
import AdminLogin from "./Admin Page/AdminLogin";
import AddProducts from "./Admin Page/AddProducts";
import CartPage from "./Cart/CartPage";


const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminaddproduct" element={<AddProducts />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
