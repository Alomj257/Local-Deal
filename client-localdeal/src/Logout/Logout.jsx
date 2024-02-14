import React from "react";
import { useAuth } from "../context/AuthContext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BiLogOut } from "react-icons/bi";

const Logout = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    Cookies.remove("auth");
    setAuth({ ...auth, user: null, token: "" });
    navigate("/");
    toast.success("Logout successfully...");
  };
  return (
    <div className="text-center p-4">
      <p>Are you sure logout from this website?</p>
      <button
        className="btn btn-outline-primary fw-bold "
        onClick={handleLogout}
      >
        <BiLogOut size={25} /> Logout
      </button>
    </div>
  );
};

export default Logout;
