import React from 'react';
import { UserContext } from '../../GlobalContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { logged } = React.useContext(UserContext);
  console.log(logged);
  if (logged) return children;
  else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
