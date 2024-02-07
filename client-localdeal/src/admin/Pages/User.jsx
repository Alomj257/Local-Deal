import React from "react";
import UserTable from "../components/UserTable/UserTable";
import Modal from "../../utils/Modal/Modal";
import AddUser from "../components/AddUser/AddUser";

const User = () => {
  return (
    <div className="px-3">
      <h3 className="mb-3"> User List</h3>
      <div className="d-flex align-items-center mb-3">
        <Modal
          btnClasss="btn btn-primary me-2 fw-bold"
          bodyClass="bg-white col-sm-8 col-md-6"
          btnText="Add User"
        >
          <AddUser />
        </Modal>
        <div className="ms-auto">
          <input type="text" placeholder="Search..." className="form-control" />
        </div>
      </div>
      <UserTable />
    </div>
  );
};

export default User;
