import React from "react";
import UserTable from "../../components/UserTable/UserTable";

const AdminHome = () => {
  const columns = ["name", "category", "location", "price", "discount", "date"];

  return (
    <div>
      <UserTable
        title="Home Category List"
        url="/categories/homestores"
        columns={columns}
      />
    </div>
  );
};

export default AdminHome;
