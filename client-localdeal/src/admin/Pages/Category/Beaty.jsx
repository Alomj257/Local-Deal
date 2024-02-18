import React from "react";
import UserTable from "../../components/UserTable/UserTable";

const AdminBeaty = () => {
  return (
    <div>
      <UserTable
        title="Beaty Category List"
        url="/categories/beauty-services"
      />
    </div>
  );
};

export default AdminBeaty;
