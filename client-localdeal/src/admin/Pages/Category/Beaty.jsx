import React from "react";
import UserTable from "../../components/UserTable/UserTable";

const AdminBeaty = () => {
  const columns = ["name", "category", "location", "price", "discount", "date"];

  return (
    <div>
      <UserTable
        title="Beaty Category List"
        url="/categories/beauty-service"
        columns={columns}
      />
    </div>
  );
};

export default AdminBeaty;
