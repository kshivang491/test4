// src/pages/NavBar.js
import React, { useState } from 'react';
import '../styles/nav.css'
import { useAuth } from '../authcontext';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { logout, user } = useAuth();
  const Navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    Navigate('/search', { state: { searchQuery } });
  };

  const handleLogin = () => {
    Navigate("/login")
  };

  const handleLogout = () => {
    logout()
  };

  return (
    <section className="nav_section">
      <div className="Nav_external_container">
        <div className="Nav_internal_container">
          <div className="logo_container">
            <div className="menu-toggle-container">
              <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
            </div>
            <div>LOGO</div>
          </div>
          <div className="search_container">
            <form className="inner-search_container" onSubmit={handleSearch}>
              <input type="text" placeholder="Find a recipe" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              <button type="submit"></button>
            </form>
          </div>
          <div className="external_nav_links_container">
            <div className="login">
              <img
                className="user_logo"
                src="https://cdn-icons-png.flaticon.com/128/3033/3033143.png"
                alt="User"
              />
              <p id="login" className={`${user ? 'hide' : 'show'}`} onClick={handleLogin}>Log In</p>
              <li className="menu-item dropdown">
                <a id="user" className={`${user ? 'show' : 'hide'}`}>My Account</a>
                <ul className="dropdown-content dropdown1">
                  <li><a id="logout" onClick={handleLogout}>Log Out</a></li>
                  <li><a href="#">My Profile</a></li>
                  <li><a href="/add-recipe">Add a Recipe</a></li>
                </ul>
              </li>
            </div>
            <input type="checkbox" id="menu-toggle" />
            <ul className="nav_links_container">
              <li><a href="/home" className="nav_links_container_link">Home</a></li>
              {/* <li><a href="/searchcategory" className="nav_links_container_link" onClick={() => Navigate('searchcategory', { state: { searchQuery: 'dinner' } })}>Recipes</a></li> */}
              <li  className="category_list_container">
                <a href="#"  className="nav_links_container_link">Recipes</a>
                <ul className="dropdown-content dropdown2">
                  <li className="dropdown2_link"><a href="#">Break Fast</a></li>
                  <li className="dropdown2_link"><a href="#">Lunch</a></li>
                  <li className="dropdown2_link"><a href="#">Dinner</a></li>
                </ul>
              </li>
              <li><a href="" className="nav_links_container_link">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
