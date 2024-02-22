import React from "react";
import UserTable from "../../components/UserTable/UserTable";

const AdminActivities = () => {
  const columns = ["name", "category", "location", "price", "discount", "date"];
  return (
    <div>
      <UserTable
        title="Activity Category List"
        url="/categories/activities"
        columns={columns}
      />
    </div>
  );
};

export default AdminActivities;
