import React from "react";
import UserTable from "../../components/UserTable/UserTable";

const AdminService = () => {
  const columns = ["name", "category", "location", "price", "discount", "date"];

  return (
    <div>
      <UserTable
        title="Services Category List"
        url="/categories/services"
        columns={columns}
      />
    </div>
  );
};

export default AdminService;
