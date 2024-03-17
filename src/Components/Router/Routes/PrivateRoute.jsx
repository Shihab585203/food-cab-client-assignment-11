import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        <div>Loading...</div>
    }
    if(user && user.uid){
        return children;
    }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
