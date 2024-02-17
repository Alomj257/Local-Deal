import React from "react";
// import Header from "../components/Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "../components/Sidebar/Sidebar";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "./DashBoard.css";
import Modal from "../../utils/Modal/Modal";
import ViewUser from "../components/UserTable/ViewUser";
const DashBoard = () => {
  const [auth, setAuth] = useAuth();
  const [toggleList, setToggle] = React.useState(false);
  const profileListRef = React.useRef();
  const navigate = useNavigate();
  React.useEffect(() => {
    const handler = (e) => {
      if (
        profileListRef?.current &&
        !profileListRef.current.contains(e.target)
      ) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  const handleLogout = () => {
    Cookies.remove("auth");
    setAuth({ ...auth, user: null, token: "" });
    navigate("/");
    toast.success("Logout successfully...");
  };
  return (
    <>
      <div className="d-flex dashboard">
        {/* <Header /> */}
        <Sidebar />
        <main className="w-100 p-3">
          <div className="text-end position-relative">
            <span>{auth?.user?.email || "user@gmail.com"}</span>{" "}
            <span className="profile">
              {!auth?.user?.profile ? (
                <FaUserCircle size={25} onClick={() => setToggle(true)} />
              ) : (
                <img
                  onClick={() => setToggle(true)}
                  src={`http://localhost:5000${auth?.user?.profile} `}
                  alt="profile"
                  className="rounded-circle "
                />
              )}
            </span>
            <ul
              ref={profileListRef}
              className={toggleList ? "show-profile-list" : "not-profile-list"}
            >
              <li>
                <Modal
                  btnText="Profile "
                  btnClasss="border-0 btn bg-transperent"
                  bodyClass="bg-light  col-sm-8 col-md-6 text-start"
                >
                  <ViewUser user={auth?.user} />
                </Modal>
              </li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
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
