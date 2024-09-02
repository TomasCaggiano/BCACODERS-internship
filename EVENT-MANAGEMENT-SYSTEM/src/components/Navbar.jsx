import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Home</Link>
      </div>
      <ul className="navbar-links">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/create-event">Create Event</Link>
            </li>
            </ul>
            {!currentUser ? (
              <div>

              <Link to="/login">Login</Link>

              <Link to="/signup">Sign Up</Link>

          </div>
        ) : (
          
          <div>
          <Link to="/profile">Profile</Link>

              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>

        </div>
        )}
    </nav>
  );
}

export default Navbar;
