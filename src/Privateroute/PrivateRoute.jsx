import React from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Authprovider/AuthProvider";
import { use } from "react";
import ClockLoader from "react-spinners/ClockLoader"; // optional loader

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  // While Firebase checking user state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClockLoader />
      </div>
    );
  }

  // If no user found → redirect to login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Otherwise → show the protected page
  return children;
};

export default PrivateRoute;
