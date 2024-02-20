import React from "react";
import UserTable from "../../components/UserTable/UserTable";

const AdminBeaty = () => {
  return (
    <div>
      <UserTable title="Beaty Category List" url="/categories/beauty-service" />
    </div>
  );
};

export default AdminBeaty;
