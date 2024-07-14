import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = (userData) => {
    localStorage.setItem('user', userData['user_email']);
    setUser(userData['user_email']);
    setIsLoggedIn(true);
    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsLoggedIn(false);
    setIsLoading(false);
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(savedUser);
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);