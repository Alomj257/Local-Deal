import React from "react";
import UserTable from "../../components/UserTable/UserTable";

const AdminService = () => {
  return (
    <div>
      <UserTable title="Services Category List" url="/categories/services" />
    </div>
  );
};

export default AdminService;