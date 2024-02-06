import React from "react";
import UserTable from "../components/UserTable/UserTable";
import Modal from "../../utils/Modal/Modal";
import AddUser from "../components/AddUser/AddUser";

const User = () => {
  return (
    <div>
      <h5 className="ps-2 text-primary fw-bold ms-sm-3"> User List</h5>
      <div className="d-flex flex-column">
        <Modal
          btnClasss="btn btn-primary ms-auto fw-bold"
          bodyClass="bg-white col-sm-8 col-md-6 "
          btnText="Add"
        >
          <AddUser />
        </Modal>
        <div className="d-flex ms-auto my-3">
          <input type="text" placeholder="Search..." className="form-control" />
        </div>
      </div>
      <UserTable />
    </div>
  );
};

export default User;
