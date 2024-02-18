import React from "react";
import UserTable from "../../components/UserTable/UserTable";

const AdminActivities = () => {
  return (
    <div>
      <UserTable title="Activity Category List" url="/categories/activities" />
    </div>
  );
};

export default AdminActivities;
