import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../context/authContext';
import '../styles/LoginRegister.css';
import loginImage from './login.png'; 

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputs = { username, email, password };
    await register(inputs);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Left Section */}
        <div className="login-left">
          <img src={loginImage} alt="Register" className="login-image" />
        </div>

        {/* Right Section */}
        <div className="login-right">
          <h2>Register for Smart Meet</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
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
            <button type="submit" className="login-button">
              Register
            </button>
          </form>
          <div className="signup-option" style={{ padding: "20px 0" }}>
            <p>Already have an account?</p>
            <Link
              to="/login"
              className="signup-link"
              style={{
                textDecoration: "none",
                color: "#007bff",
                fontWeight: "bold",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
              onMouseLeave={(e) => (e.target.style.color = "#007bff")}
            >
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
