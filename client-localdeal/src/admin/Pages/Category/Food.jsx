import React from "react";
import UserTable from "../../components/UserTable/UserTable";

const AdminFood = () => {
  const columns = ["name", "category", "location", "price", "discount", "date"];

  return (
    <div className="">
      <UserTable
        title="Food Category List"
        url="/categories/food"
        columns={columns}
      />
    </div>
  );
};

export default AdminFood;
