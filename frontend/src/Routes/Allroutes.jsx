import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../Pages/Product/Product";
import AdminLogin from "../Pages/Admin Page/AdminLogin";
import AdminAddProducts from "../Pages/Admin Page/AdminAddProducts";
import AdminProducts from "../Pages/Admin Page/AdminProducts";
import AdminEditProduct from "../Pages/Admin Page/AdminEditProduct";
import CartPage from "../Pages/Cart/CartPage";
import Payments from "../Pages/Payment/Payments";
import Home from "../Pages/Home";
import SingalProductPage from "../Pages/Product/SingalProductPage";
import AdminOrder from "../Pages/Admin Page/AdminOrder";
import AdminHome from "../Pages/Admin Page/AdminHome";
import AdminUsers from "../Pages/Admin Page/AdminUsers";
import AdminSettings from "../Pages/Admin Page/AdminSetting";
import { PrivateRoutes } from "./PrivateRoutes";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingalProductPage />} />
        <Route
          path="/cart"
          element={
            <PrivateRoutes>
              <CartPage />
            </PrivateRoutes>
          }
        />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminaddproduct" element={<AdminAddProducts />} />
        <Route path="/adminproducts" element={<AdminProducts />} />
        <Route path="/admineditproduct/:id" element={<AdminEditProduct />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/adminhome" element={<AdminHome />}></Route>
        <Route path="/adminorders" element={<AdminOrder />}></Route>
        <Route path="/adminuser" element={<AdminUsers />}></Route>
        <Route path="/adminsetting" element={<AdminSettings />}></Route>
      </Routes>
    </div>
  );
};
export default Allroutes;
