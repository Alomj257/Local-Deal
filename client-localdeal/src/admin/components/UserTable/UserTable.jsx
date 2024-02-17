import React, { useEffect, useState } from "react";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Switch } from "@mui/material";
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
      <div className="d-flex align-items-center mb-3">
        <Modal
          btnClasss="btn btn-primary me-2 fw-bold"
          bodyClass="bg-white col-sm-8 col-md-6"
          btnText="Add User"
        >
          <AddUser onUserAdd={handleAddUser} />
        </Modal>
        <div className="ms-auto">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            className="form-control"
          />
        </div>
      </div>
      <div>
        <table className="table table-bordered">
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
          <tbody>
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
                      btnText={<FaRegEdit size={16} />}
                      btnClasss="btn btn-warning mr-2"
                      bodyClass="bg-white  col-sm-8 col-md-6"
                    >
                      <UpdateAdmin
                        oldUser={user}
                        onUserUpdate={handleUserUpdate}
                      />
                    </Modal>
                    <Modal
                      btnText={<FaEye size={16} />}
                      btnClasss="btn btn-primary mr-2"
                      bodyClass="bg-light  col-sm-8 col-md-6"
                    >
                      <ViewUser user={user} />
                    </Modal>
                    <Modal
                      btnText={<MdDelete size={16} />}
                      btnClasss="btn btn-danger"
                      bodyClass="bg-danger border card col-7  col-sm-5 col-md-3"
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
        <div className="d-flex justify-content-between">
          <div>
            Showing {curPage} to {page > users.length ? users.length : page} of{" "}
            {users?.length}
          </div>
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li
                className="page-item border p-2 px-3 bg-light"
                style={{ cursor: "pointer" }}
                onClick={() => setCurPage(curPage > 1 ? curPage - 1 : curPage)}
              >
                Previous
              </li>
              <li className="page-item border p-2 text-white px-4 fw-bold bg-primary tex-white">
                {curPage}
              </li>
              <li
                className="page-item border p-2 px-3 bg-light"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setCurPage(
                    curPage < Math.ceil(users.length / page)
                      ? curPage + 1
                      : curPage
                  )
                }
              >
                Next
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default UserTable;
