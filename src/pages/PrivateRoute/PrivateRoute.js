import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  return children;
};
export default PrivateRoute;
