import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const DashBoard = () => {
  return (
    <>
      <div className="d-flex">
        <Header />
        <main className="w-100 p-3">
          <div className="text-end ">
            <span>user@gmail.com</span> <FaUserCircle size={25} />
          </div>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashBoard;
