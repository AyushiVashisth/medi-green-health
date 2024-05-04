import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

export const PrivateRoutes = ({ children }) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    toast.error("Please login first");
    return <Navigate to="/" />;
  }
  return children;
};
