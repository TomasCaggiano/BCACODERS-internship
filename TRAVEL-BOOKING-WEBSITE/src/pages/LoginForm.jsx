import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginRegister.css'; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/users.json');
      const users = await response.json();
      const user = users.find(u => u.email === formData.email && u.password === formData.password);

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/'); 
      } else {
        setErrorMessage('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setErrorMessage('Error occurred during login.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Login;
