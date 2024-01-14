import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your authentication logic here
    // For simplicity, just check if the username and password are not empty
    if (username && password) {
      alert('Login successful');

      // Reset the username and password after successful login
      setUsername('');
      setPassword('');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form>
        <div className="input-container">
          <FaEnvelope className="icon" />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="input-container">
          <FaLock className="icon" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
