


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import '../styles/LoginRegister.css';
import loginImage from './login.png'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputs = { email, password };

    try {
      await login(inputs);
      setMessage('Login successful');
    } catch (error) {
      setMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Left Section */}
        <div className="login-left">
          <img src={loginImage} alt="Login" className="login-image" />
        </div>

        {/* Right Section */}
        <div className="login-right">
          <h2>Login to Smart Meet</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {message && <p className="message">{message}</p>}

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <div className="signup-option" style={{ padding: '20px 0' }}>
            <p>Not registered?</p>
            <Link
              to="/register"
              className="signup-link"
              style={{
                textDecoration: 'none',
                color: '#007bff',
                fontWeight: 'bold',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#0056b3')}
              onMouseLeave={(e) => (e.target.style.color = '#007bff')}
            >
              Register now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
