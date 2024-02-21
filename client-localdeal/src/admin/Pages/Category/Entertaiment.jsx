import React from "react";
import UserTable from "../../components/UserTable/UserTable";

const AdminEntertaiment = () => {
  const columns = ["name", "category", "location", "price", "discount", "date"];

  return (
    <div>
      <UserTable
        title="Entertainment Category List"
        url="/categories/entertainment"
        columns={columns}
      />
    </div>
  );
};

export default AdminEntertaiment;
