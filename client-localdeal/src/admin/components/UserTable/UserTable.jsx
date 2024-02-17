import React, { useEffect, useState } from "react";
import { FaEye, FaFilePdf, FaRegEdit } from "react-icons/fa";
import { MdAddBox, MdDelete } from "react-icons/md";
import { Switch } from "@mui/material";
import { FaFileExcel } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import "./UserTable.css";
import useFetch from "../../../Hooks/useFetch";
import Modal from "../../../utils/Modal/Modal";
import ViewUser from "./ViewUser";
import UpdateAdmin from "./UpdateAdmin";
import DeleteAdmin from "./DeleteAdmin";
import AddUser from "../AddUser/AddUser";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [page] = useState(10);
  const [curPage, setCurPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { data, loading, reFetch } = useFetch(
    `/admin/users?limit=${page * curPage}`
  );

  const toggleStatus = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
  };
  useEffect(() => {
    setUsers(Array.isArray(data) ? data : []);
    setFilteredUsers(Array.isArray(data) ? data : []);
  }, [data]);
  const handleFiltered = (value) => {
    const filteredData = users.filter(
      (user) =>
        user.name.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase()) ||
        user.phoneNo.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(filteredData);
  };
  const handleSearch = (e) => {
    const { value } = e.target;
    handleFiltered(value);
  };
  const handleUserUpdate = () => {
    reFetch();
  };
  const handleDelete = () => {
    reFetch();
  };
  const handleAddUser = (user) => {
    setUsers([...users, user]);
    reFetch();
  };

  return (
    <>
      <div className="user-table p-3 rounded">
        <div className="d-flex justify-content-between mb-3 ">
          <div className="">
            <Modal
              btnClasss="add-user-btn btn me-2 fw-bold"
              bodyClass="bg-white col-sm-8 col-md-6"
              btnText={
                <>
                  <MdAddBox /> <> Add User</>
                </>
              }
            >
              <AddUser onUserAdd={handleAddUser} />
            </Modal>
          </div>
          <div className="d-flex gap-2">
            <input
              type="text"
              placeholder="Search..."
              onChange={handleSearch}
              className="form-control "
            />
            <span
              className="p-2  table-icons  rounded-circle"
              onClick={handleUserUpdate}
            >
              <TfiReload size={20} className=" " />
            </span>
            <span className="p-2  table-icons  rounded-circle">
              <FaFilePdf size={20} className=" " />
            </span>
            <span className="p-2  table-icons  rounded-circle">
              <FaFileExcel size={20} className=" " />
            </span>
          </div>
        </div>
        <div>
          <table className="table table-borderless">
            <thead
              id="user-table-shadow"
              className="text-center"
              style={{ backgroundColor: "#007bff", color: "#fff" }}
            >
              <tr>
                <th scope="col">S. No.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Contact</th>
                <th scope="col">Role</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="text-white text-center">
              {loading ? (
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : Array.isArray(filteredUsers) ? (
                filteredUsers?.map((user, key) => (
                  <tr key={user?._id}>
                    <td>{key + 1}</td>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user?.gender}</td>
                    <td>{user?.phoneNo}</td>
                    <td>{user?.role}</td>
                    <td
                      style={{
                        color: user?.status === "Active" ? "green" : "red",
                      }}
                    >
                      {user?.status}
                    </td>
                    <td>
                      <Switch
                        defaultChecked={user?.status === "Active"}
                        color="primary"
                        onChange={() => toggleStatus(user?.id)}
                      />

                      <Modal
                        btnText={<FaRegEdit size={20} />}
                        btnClasss="btn btn-transpenrent mr-2 text-white"
                        bodyClass="bg-white  col-sm-8 col-md-6"
                        closeIcon="fs-1 text-dark"
                      >
                        <UpdateAdmin
                          oldUser={user}
                          onUserUpdate={handleUserUpdate}
                        />
                      </Modal>
                      <Modal
                        btnText={<FaEye size={20} />}
                        btnClasss="btn  btn-transpenrent mr-2 text-white"
                        bodyClass="bg-light  col-sm-8 col-md-6"
                        closeIcon="fs-1 text-dark "
                      >
                        <ViewUser user={user} />
                      </Modal>
                      <Modal
                        btnText={<MdDelete size={20} />}
                        btnClasss="btn  btn-transpenrent text-white"
<<<<<<< Updated upstream
                        bodyClass="bg-white border card"
=======
                        bodyClass="bg-danger border card col-7  col-sm-5 col-md-3"
                        closeIcon="fs-1 text-dark"
>>>>>>> Stashed changes
                      >
                        <DeleteAdmin onUserDelete={handleDelete} user={user} />
                      </Modal>
                    </td>
                  </tr>
                ))
              ) : (
                ""
              )}
            </tbody>
          </table>
          <div className="px-5 d-flex justify-content-between">
            <div className="my-auto text-white">
              Showing {curPage} to {page > users.length ? users.length : page}{" "}
              of {users?.length}
            </div>
            <ul className={` pagination gap-3 text-white `}>
              <li
                className="fs-2 me-3"
                onClick={() => setCurPage(curPage > 1 ? curPage - 1 : curPage)}
              >
                <span className={` page-icon-action rounded-circle`}>&lt;</span>
              </li>
              <li className="my-auto fs-5 px-2  rounded-circle">
                <span className={` page-icon  rounded-circle`}>{curPage}</span>{" "}
              </li>
              <li className="my-auto fs-5 px-2">
                <span className={`page-icon rounded-circle`}>
                  {curPage + 1}
                </span>
              </li>
              <li className="my-auto fs-5 px-2">
                <span className={`page-icon rounded-circle`}>
                  {curPage + 2}
                </span>
              </li>
              <li
                className="fs-2 ms-3"
                onClick={() =>
                  setCurPage(
                    curPage < Math.ceil(users.length / page)
                      ? curPage + 1
                      : curPage
                  )
                }
              >
                <span className="page-icon-action  rounded-circle"> &gt;</span>
              </li>
            </ul>
            {/* <div className="text-white">
              Showing {curPage} to {page > users.length ? users.length : page}{" "}
              of {users?.length}
            </div>
            <nav aria-label=" ">
              <ul className="d-flex m-0">
                <li
                  className="page-item border fs-2  px-3 bg-light"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    setCurPage(curPage > 1 ? curPage - 1 : curPage)
                  }
                >
                  &lt;
                </li>
                <li className="page-item border  text-white px-4 fw-bold bg-primary tex-white">
                  {curPage}
                </li>
                <li
                  className="page-item border p-2 px-3 fs-2 bg-light"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    setCurPage(
                      curPage < Math.ceil(users.length / page)
                        ? curPage + 1
                        : curPage
                    )
                  }
                >
                  &gt;
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTable;
