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
import UpdateAction from "../CategoryAction/UpdateAction";
import AddAction from "../CategoryAction/AddAction";
import ViewAction from "../CategoryAction/ViewAction";

const UserTable = ({ title, url, type }) => {
  const [users, setUsers] = useState([]);
  const [page] = useState(10);
  const [curPage, setCurPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { data, loading, reFetch } = useFetch(`${url}?limit=${page * curPage}`);

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

  const columns = [];
  if (data[data.length - 1]) {
    for (const [key, value] of Object.entries(data[data.length - 1])) {
      if (
        key !== "_id" &&
        key !== "__v" &&
        key !== "imagepath" &&
        !Array.isArray(value)
      ) {
        columns.push(key);
      }
    }
  }
  console.log(columns);

  const handleFiltered = (value) => {
    const filteredData = users.filter(
      (user) =>
        user[columns[0]]?.toLowerCase()?.includes(value?.toLowerCase()) ||
        user[columns[1]]?.toLowerCase()?.includes(value.toLowerCase()) ||
        user[columns[2]]?.toLowerCase().includes(value.toLowerCase())
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
  console.log(type);
  return (
    <>
      <div className="user-table p-3 rounded">
        <div className="d-flex justify-content-between mb-3 ">
          <div className="d-flex">
            <h3 className="m-auto text-white">{title}</h3>
          </div>
          <div className="d-flex gap-4">
            <input
              type="text"
              placeholder="Search..."
              onChange={handleSearch}
              className="form-control m-auto "
            />
            <span
              className="p-2  table-icons m-auto  rounded-circle"
              onClick={handleUserUpdate}
            >
              <TfiReload size={20} className=" " />
            </span>
            <span className="p-2  table-icons  m-auto rounded-circle">
              <FaFilePdf size={20} className=" " />
            </span>
            <span className="p-2  table-icons m-auto rounded-circle">
              <FaFileExcel size={20} className=" " />
            </span>
            <Modal
              btnClasss="table-icons btn rounded-circle"
              bodyClass="bg-white col-sm-8 col-md-6"
              btnText={
                <>
                  <MdAddBox size={25} />
                </>
              }
            >
              {type === "user" ? (
                <AddUser title={title} onUserAdd={handleAddUser} />
              ) : (
                <AddAction
                  title={title}
                  oldData={data[data.length - 1]}
                  onUserAdd={handleAddUser}
                />
              )}
            </Modal>
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
                {columns.map((c, ckey) => {
                  return (
                    <>
                      {ckey < 7 && (
                        <th key={ckey} scope="col" className="text-capitalize">
                          {c}
                        </th>
                      )}
                    </>
                  );
                })}

                {type === "user" && (
                  <>
                    {" "}
                    <th scope="col">Status</th>
                    <th scope="col">Enable</th>{" "}
                  </>
                )}
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
                    {columns.map((c, ckey) => {
                      return (
                        <>
                          {ckey < 7 && (
                            <td key={ckey} className="text-capitalize">
                              {c === "image" ? (
                                <img
                                  src={`http://localhost:5000${user[c]}`}
                                  alt="img"
                                  className="rounded"
                                  style={{ width: "5rem" }}
                                />
                              ) : user[c].length > 15 ? (
                                user[c]?.slice(0, 15)
                              ) : (
                                user[c]
                              )}
                            </td>
                          )}
                        </>
                      );
                    })}
                    {type === "user" && (
                      <>
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
                        </td>
                      </>
                    )}
                    <td>
                      <Modal
                        btnText={<FaRegEdit size={20} />}
                        btnClasss="btn btn-transpenrent mr-2 text-white"
                        bodyClass="bg-white  col-sm-8 col-md-6"
                        closeIcon="fs-1 text-dark"
                      >
                        {type === "user" ? (
                          <UpdateAdmin
                            oldUser={user}
                            onUserUpdate={handleUserUpdate}
                          />
                        ) : (
                          <UpdateAction
                            oldData={user}
                            onUpdateAction={handleUserUpdate}
                          />
                        )}
                      </Modal>
                      <Modal
                        btnText={<FaEye size={20} />}
                        btnClasss="btn  btn-transpenrent mr-2 text-white"
                        bodyClass="bg-light  col-sm-8 col-md-6"
                        closeIcon="fs-1 text-dark "
                      >
                        {type === "user" ? (
                          <ViewUser user={user} />
                        ) : (
                          <ViewAction title={title} data={user} />
                        )}
                      </Modal>
                      <Modal
                        btnText={<MdDelete size={20} />}
                        btnClasss="btn  btn-transpenrent text-white"
                        bodyClass="bg-white border card"
                        closeIcon="fs-1 text-dark"
                      >
                        <DeleteAdmin
                          onUserDelete={handleDelete}
                          title={title}
                          user={user}
                        />
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
