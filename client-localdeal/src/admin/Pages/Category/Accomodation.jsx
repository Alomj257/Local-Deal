import React from "react";
import UserTable from "../../components/UserTable/UserTable";

const AdminAccomodation = () => {
  const columns = ["name", "category", "location", "price", "discount", "date"];
  return (
    <div>
      <div className="">
        <UserTable
          title=" Accomodation Category List"
          url="/categories/accommodation"
          columns={columns}
        />
      </div>
    </div>
  );
};

export default AdminAccomodation;
