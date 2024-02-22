import React from "react";
// import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "../components/Sidebar/Sidebar";
import "./DashBoard.css";
import Modal from "../../utils/Modal/Modal";
import ViewUser from "../components/UserTable/ViewUser";
const DashBoard = () => {
  const [auth] = useAuth();

  return (
    <>
      <div className="d-flex dashboard">
        {/* <Header /> */}
        <Sidebar />
        <main className="w-100 p-2">
          <div className="text-end position-relative d-flex justify-content-between">
            <span className=" my-auto fw-bold">
              <span className="text-primary">Hi,</span>{" "}
              <span className="text-capitalize">{auth?.user?.name}</span>
            </span>
            <span className="profile">
              {!auth?.user?.profile ? (
                <FaUserCircle size={25} />
              ) : (
                <li style={{ listStyle: "none" }}>
                  <Modal
                    btnText={
                      <img
                        src={`http://localhost:5000${auth?.user?.profile} `}
                        alt="profile"
                        className="rounded-circle w-100 h-100"
                      />
                    }
                    btnStyle={{ width: "50px", height: "50px" }}
                    btnClasss="border-0  bg-transperent rounded-circle p-1 shadow"
                    bodyClass="bg-light  col-sm-8 col-md-6 text-start"
                  >
                    <ViewUser user={auth?.user} />
                  </Modal>
                </li>
              )}
            </span>
          </div>
          <div className="admin-outlet">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default DashBoard;
