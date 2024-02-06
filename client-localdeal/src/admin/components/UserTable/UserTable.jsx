import React from "react";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./UserTable.css";
const UserTable = () => {
  return (
    <>
      <div className="px-4">
        <table className="table table-bordered">
          <thead id="user-table-shadow">
            <tr>
              <th scope="col">S. No.</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>awbcd</td>
              <td>awbcd@gmail.com</td>
              <td>awbcd@gmail.com</td>
              <td>awbcd@gmail.com</td>
              <td>
                <button className="btn btn-warning">
                  <FaRegEdit size={20} />
                </button>
              </td>
              <td>
                <button className="btn btn-primary">
                  <FaEye size={20} />
                </button>
              </td>
              <td>
                <button className="btn btn-danger">
                  <MdDelete size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
