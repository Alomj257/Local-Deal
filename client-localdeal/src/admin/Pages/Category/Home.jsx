import React from "react";
import UserTable from "../../components/UserTable/UserTable";

const AdminHome = () => {
  return (
    <div>
      <h3 className="fw-bold my-3 text-primary">Home Category List</h3>
      <UserTable />
    </div>
  );
};

export default AdminHome;
