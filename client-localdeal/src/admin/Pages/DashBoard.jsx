import React from "react";
// import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "../components/Sidebar/Sidebar";
const DashBoard = () => {
  const [auth] = useAuth();
  return (
    <>
      <div className="d-flex">
        {/* <Header /> */}
        <Sidebar />
        <main className="w-100 p-3">
          <div className="text-end ">
            <span>{auth?.user?.email || "user@gmail.com"}</span>{" "}
            <FaUserCircle size={25} />
          </div>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashBoard;
