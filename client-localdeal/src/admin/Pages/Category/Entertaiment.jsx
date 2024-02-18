import React from "react";
import UserTable from "../../components/UserTable/UserTable";

const AdminEntertaiment = () => {
  return (
    <div>
      <UserTable
        title="Entertainment Category List"
        url="/categories/entertainment"
      />
    </div>
  );
};

export default AdminEntertaiment;
