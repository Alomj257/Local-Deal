import React, { useEffect, useState } from "react";
import { FaEye, FaPencilAlt, FaReply } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Switch } from "@mui/material";
import { FiFileText, FiPlusSquare } from "react-icons/fi";
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
import { updateadmin } from "../../../services/adminService";
import * as XLSX from "xlsx";
import Reply from "../Reply/Reply";
import Axios from "../../../Axios";

const UserTable = ({ title, url, type, columns }) => {
  const [users, setUsers] = useState([]);
  const [fullList, setAllData] = useState([]);
  const [limit] = useState(10);
  const [curPage, setCurPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async (page, limit) => {
    setLoading(true);
    try {
      const res = await Axios.get(
        `${url}?page=${page ? page : 1}&limit=${limit ? limit : 10}`
      );
      setUsers(res.data);
      setCurPage(page);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const allData = useFetch(url);
  useEffect(() => {
    setAllData(allData.data);
  }, [allData.data]);
  const toggleStatus = async (id, olduser) => {
    try {
      setFilteredUsers((prevUsers) =>
        prevUsers?.map((user) =>
          user._id === id
            ? {
                ...user,
                isEnable: !user?.isEnable,
              }
            : user
        )
      );
      const formData = new FormData();
      olduser.isEnable = !olduser?.isEnable;
      for (let key in olduser) {
        formData.append(key, olduser[key]);
      }
      await updateadmin(formData, id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData(curPage, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setFilteredUsers(Array.isArray(users) ? users : []);
  }, [users]);

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
    getData(curPage, limit);
  };
  const handleDelete = () => {
    getData(curPage, limit);
  };
  const handleAddUser = (user) => {
    setUsers([...users, user]);
    getData(curPage, limit);
  };
  const [pageActive, setActivePage] = useState(1);
  const handleCurPage = (active) => {
    setActivePage(active);
  };
  const handlePageFetch = async (page) => {
    if (page > 0) {
      setCurPage(page);
      getData(page, limit);
    }
  };
  const handleExport = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(fullList);
    XLSX.utils.book_append_sheet(wb, ws, "Mysheet1");
    XLSX.writeFile(wb, "sheet.xlsx");
  };

  return (
    <>
      <div className="user-table p-1 rounded">
        <div className="d-flex justify-content-between mb-3 ">
          <div className="d-flex">
            <h3 className="m-auto ">{title}</h3>
          </div>
          <div className="d-flex gap-4">
            <input
              type="text"
              placeholder="Search..."
              onChange={handleSearch}
              className="form-control m-auto rounded"
            />

            <span onClick={handleExport} className="d-flex  table-icons m-auto">
              <FiFileText size={25} className="my-auto mr-1" /> Export
            </span>
            {type !== "contact" && (
              <Modal
                btnClasss="add-user-btn d-flex btn rounded"
                bodyClass="bg-white d-flex col-sm-8 col-md-6"
                btnText={
                  <>
                    <FiPlusSquare size={25} className="m-auto mr-1" />{" "}
                    <span className="m-auto ml-2"> Add</span>
                  </>
                }
              >
                {type === "user" ? (
                  <AddUser title={title} onUserAdd={handleAddUser} />
                ) : (
                  <AddAction
                    url={url}
                    title={title}
                    oldData={users[users?.length - 1]}
                    onAddAction={handleAddUser}
                  />
                )}
              </Modal>
            )}
          </div>
        </div>
        <div>
          <table className="table">
            <thead
              id="user-table-shadow"
              className="text-center text-light bg-dark"
            >
              <tr>
                <th scope="col">S. No.</th>
                {columns.map((c, ckey) => {
                  return (
                    <>
                      {ckey < 7 && (
                        <th
                          key={ckey}
                          scope="col"
                          className={"text-capitalize"}
                        >
                          {c}
                        </th>
                      )}
                    </>
                  );
                })}

                {type === "user" && (
                  <>
                    <th scope="col">Status</th>
                    <th scope="col">Enable</th>{" "}
                  </>
                )}
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className=" text-center">
              {loading ? (
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : Array.isArray(filteredUsers) ? (
                filteredUsers?.map((user, key) => (
                  <tr key={user?._id}>
                    <td>{limit * (curPage - 1) + key + 1}</td>
                    {columns.map((c, ckey) => {
                      return (
                        <>
                          {ckey < 7 && (
                            <td
                              key={ckey}
                              className={c !== "email" ? "text-capitalize" : ""}
                            >
                              {c === "image" ? (
                                <img
                                  src={`http://localhost:5000${user[c]}`}
                                  alt="img"
                                  className="rounded"
                                  style={{ width: "5rem" }}
                                />
                              ) : user[c]?.length > 15 ? (
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
                        <td>
                          <span
                            className={`${
                              user?.isEnable
                                ? "bg-success text-white"
                                : "bg-danger text-white"
                            } rounded p-1  `}
                          >
                            {user?.isEnable ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td>
                          <Switch
                            defaultChecked={user?.isEnable === true}
                            color="primary"
                            onChange={() => toggleStatus(user?._id, user)}
                          />
                        </td>
                      </>
                    )}
                    <td className="d-flex justify-content-center">
                      {type !== "subscruber" && (
                        <>
                          {" "}
                          <Modal
                            btnText={
                              type === "contact" ? (
                                <>
                                  <FaReply /> <small>Reply</small>
                                </>
                              ) : (
                                <FaPencilAlt size={20} />
                              )
                            }
                            btnClasss="btn btn-transpenrent text-warning mr-2 "
                            bodyClass="bg-white  col-sm-8 col-md-6"
                            closeIcon="fs-1 text-dark"
                          >
                            {type === "user" ? (
                              <UpdateAdmin
                                oldUser={user}
                                onUserUpdate={handleUserUpdate}
                              />
                            ) : type === "contact" ? (
                              <Reply
                                url={url}
                                contact={user}
                                onUpdateAction={handleUserUpdate}
                              />
                            ) : (
                              <UpdateAction
                                url={url}
                                oldData={user}
                                onUpdateAction={handleUserUpdate}
                              />
                            )}
                          </Modal>
                          <Modal
                            btnText={<FaEye size={20} />}
                            btnClasss="btn  btn-transpenrent mr-2  text-primary "
                            bodyClass="bg-light  col-sm-8 col-md-6"
                            closeIcon="fs-1 text-dark "
                          >
                            {type === "user" ? (
                              <ViewUser user={user} />
                            ) : (
                              <ViewAction title={title} data={user} />
                            )}
                          </Modal>
                        </>
                      )}
                      <Modal
                        btnText={<MdDelete size={20} />}
                        btnClasss="btn  btn-transpenrent text-danger "
                        bodyClass="bg-white border card"
                        closeIcon="fs-1 text-dark"
                      >
                        <DeleteAdmin
                          url={url}
                          type={type}
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
            <div className="my-auto ">
              Showing {curPage} to{" "}
              {limit > users?.length ? users?.length : limit} of{" "}
              {fullList?.length}
            </div>
            <ul className={` pagination gap-3  `}>
              <li
                className="fs-2 me-3"
                onClick={() => {
                  // setCurPage(curPage > 1 ? curPage - 1 : curPage);
                  curPage > 0 && handlePageFetch(curPage - 1);
                }}
              >
                <span
                  onClick={() => handlePageFetch(curPage)}
                  className={`${
                    pageActive < curPage ? "page-active" : ""
                  } page-icon-action rounded-circle`}
                >
                  &lt;
                </span>
              </li>
              <li className="my-auto fs-5    rounded-circle">
                <span
                  onClick={() => {
                    handleCurPage(curPage);
                    handlePageFetch(curPage);
                  }}
                  className={`${
                    pageActive === curPage ? "page-active" : ""
                  } page-icon  rounded-circle p-2 px-3`}
                >
                  {curPage}
                </span>{" "}
              </li>
              <li className="my-auto fs-5 ">
                <span
                  onClick={() => {
                    handleCurPage(curPage + 1);
                    handlePageFetch(curPage + 1);
                  }}
                  className={`${
                    pageActive === curPage + 1 ? "page-active" : ""
                  } page-icon rounded-circle p-2 px-3`}
                >
                  {curPage + 1}
                </span>
              </li>
              <li className={` my-auto fs-5 `}>
                <span
                  onClick={() => {
                    handleCurPage(curPage + 2);
                    handlePageFetch(curPage + 2);
                  }}
                  className={`${
                    pageActive === curPage + 2 ? "page-active" : ""
                  }  page-icon rounded-circle p-2 px-3`}
                >
                  {curPage + 2}
                </span>
              </li>
              <li
                disabled={curPage > Math.ceil(users?.length / limit)}
                className={`fs-2 ms-3 btn`}
                onClick={() => {
                  handlePageFetch(curPage + 1);
                }}
              >
                <span
                  // onClick={() => handleCurPage(curPage + 3)}
                  className={`page-icon-action  rounded-circle  ${
                    pageActive > curPage + 2 ? "page-active" : ""
                  }`}
                >
                  {" "}
                  &gt;
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTable;
