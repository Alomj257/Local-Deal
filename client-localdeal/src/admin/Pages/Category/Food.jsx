import React from "react";
import UserTable from "../../components/UserTable/UserTable";

const AdminFood = () => {
  return (
    <div className="">
      <UserTable title="Food Category List" url="/categories/food" />
    </div>
  );
};

export default AdminFood;
