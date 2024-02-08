import React, { useEffect, useState } from "react";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Switch } from "@mui/material";
import "./UserTable.css";
import useFetch from "../../../Hooks/useFetch";
import Modal from "../../../utils/Modal/Modal";
import ViewUser from "./ViewUser";
import UpdateAdmin from "./UpdateAdmin";
import DeleteAdmin from "./DeleteAdminn";

const UserTable = () => {
  const [users, setUsers] = useState([]);

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
  const { data, loading } = useFetch("/admin/users");
  console.log(data);
  useEffect(() => {
    setUsers(data.allusers);
  }, [data]);
  return (
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
        <tbody className="text-center">
          {loading ? (
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          ) : Array.isArray(users) ? (
            users?.map((user, key) => (
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
                    <UpdateAdmin oldUser={user} />
                  </Modal>
                  <Modal
                    btnText={<FaEye size={16} />}
                    btnClasss="btn btn-primary mr-2"
                    bodyClass="bg-white  col-sm-8 col-md-6"
                  >
                    <ViewUser user={user} />
                  </Modal>
                  <Modal
                    btnText={<MdDelete size={16} />}
                    btnClasss="btn btn-danger"
                    bodyClass="bg-danger border card col-7  col-sm-5 col-md-3"
                  >
                    <DeleteAdmin user={user} />
                  </Modal>
                </td>
              </tr>
            ))
          ) : (
            ""
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
