import React from "react";
import UserTable from "../../components/UserTable/UserTable";

const AdminHome = () => {
  return (
    <div>
      <UserTable title="Home Category List" url="/categories/homestores" />
    </div>
  );
};

export default AdminHome;
