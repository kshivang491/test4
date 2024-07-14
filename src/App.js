import './App.css';
import React from 'react';
import { AuthProvider } from './authcontext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './authcontext';
import SignUpForm from './pages/signuppage';
import LogInForm from './pages/loginpage'
import HomePage from './pages/homepage';
import SearchRecipesPage from './pages/searchrecipepage';
import AddRecipesPage from './pages/addrecipepage';
import SearchCategoryPage from './pages/searchcategorypage';


// import ItmCategoryDetail from './components/itemcategorydetail';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LogInForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/search" element={<SearchRecipesPage />} />
            <Route path="/searchcategory" element={<SearchCategoryPage />} />
            <Route
              path="/addrecipe"
              element={
                <RequireAuth>
                  <AddRecipesPage />
                </RequireAuth>
              }
            />




            {/* <Route path="/test" element={<ItmCategoryDetail />} /> */}
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

function RequireAuth({ children }) {
  const { isLoggedIn, user, isLoading } = useAuth();
  
  if (isLoading) {
    return children;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default App;