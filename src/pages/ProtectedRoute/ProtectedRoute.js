import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(true);

  if (!user) return <Navigate to="/landing" />;
  return children;
};

export default ProtectedRoute;
