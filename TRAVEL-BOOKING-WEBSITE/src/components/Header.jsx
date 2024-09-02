import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../pages/AuthContext';
import './Header.css';

const Header = () => {
  const { authState, logout } = useAuth();

  return (
    <header>
      <nav>
        <h1><Link to="/">Site Name</Link></h1>
        <ul>
          <li><Link to="/available-flights">Available Flights</Link></li>
          <li><Link to="/top-destinations">Top Destinations</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="auth-buttons">
          {authState.isAuthenticated ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <>
              <button><Link to="/login">Login</Link></button>
              <button><Link to="/register">Register</Link></button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
