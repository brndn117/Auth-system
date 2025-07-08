import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const seller = JSON.parse(localStorage.getItem('seller'));
  return seller ? children : <Navigate to="/seller-login" />;
};

export default PrivateRoute;
