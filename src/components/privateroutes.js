import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../authcontext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route
        {...rest}
        element={user ? <Element /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
};

export default PrivateRoute;