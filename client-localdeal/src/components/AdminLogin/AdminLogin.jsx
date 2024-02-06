import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "./AdminLogin.css";
import Layout from "../../utils/Layout";
import adminLogin from "../../services/adminService";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  // useEffect to clear error after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Cleanup function to clear timer
  }, [error]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const token = await adminLogin(username, password);
      console.log("Login successful, token:", token);
      // Redirect user to admin panel
      navigate("/admin"); // Use navigate function to navigate to the admin panel route
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Layout>
      <div className="admin-login-container">
        <h2>Admin Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
        </form>
      </div>
    </Layout>
  );
};

export default AdminLogin;
