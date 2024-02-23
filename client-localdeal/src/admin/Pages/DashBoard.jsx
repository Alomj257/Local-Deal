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
        <main className="w-100 p-3">
          <div className="text-end position-relative d-flex justify-content-between">
            <span className=" my-auto fw-bold">
              <span className="text-primary pl-2">Hi,</span>{" "}
              <span className="text-capitalize">{auth?.user?.name}</span>
            </span>
            <span className="profile d-flex gap-4">
              <span className="messageNot my-auto">
                <i className="bx bxs-message-dots fs-5"></i>
                <span className="msg">Message</span>
              </span>
              <span className="my-auto messageNot">
                <i className="bx fs-5  bxs-bell"></i>
                <span className=" notice">Notification</span>
              </span>
              <span>
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
                      btnClasss="border-0  bg-white rounded-circle p-2"
                      bodyClass="bg-white  col-sm-8 col-md-6 text-start"
                    >
                      <ViewUser user={auth?.user} />
                    </Modal>
                  </li>
                )}
              </span>
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
