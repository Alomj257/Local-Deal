import React, { useState } from "react";
import Cookie from "js-cookie";
import "./AdminLogin.css";
import adminLogin from "../../services/adminService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const response = await adminLogin(username, password);
      console.log(response);
      console.log("Login successful, token:", response);
      setAuth({ ...auth, user: response?.admin, token: response?.token });
      // localStorage.setItem("auth", JSON.stringify(response));
      Cookie.set("auth", JSON.stringify(response), { expires: 1 / 24 });
      // Clear username and password after successful login
      setUsername("");
      setPassword("");
      // Redirect user to admin panel
      navigate("/admin"); // Use navigate function to navigate to the admin panel route
    } catch (error) {
      setError(error);
      setUsername("");
      setPassword("");
      // Clear error message after 1 second
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div id="main-wrapper" className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="card border-1">
              <div className="card-body p-5">
                <div className="mb-5">
                  <h3 className="h4 font-weight-bold text-theme">
                    Admin Login
                  </h3>
                </div>

                <h6 className="h5 mb-0">Welcome back!</h6>
                <p className="text-muted mt-2 mb-4">
                  Enter your email address and password to access admin panel.
                </p>

                {error && <p className="error-message">{error}</p>}

                <form onSubmit={handleLogin}>
                  <div className="form-group mb-4">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                  </div>
                  <a href="#forgot-password" className="forgot-link">
                    Forgot password?
                  </a>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-2"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
