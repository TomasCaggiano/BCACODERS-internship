import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const LogoutButton = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div>
      {currentUser ? (
        <div>
          <p>Welcome, {currentUser.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default LogoutButton;
