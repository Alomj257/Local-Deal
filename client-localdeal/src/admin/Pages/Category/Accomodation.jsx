import React from "react";
import UserTable from "../../components/UserTable/UserTable";

const AdminAccomodation = () => {
  return (
    <div>
      <div className="">
        <UserTable
          title=" Accomodation Category List"
          url="/categories/accommodations"
        />
      </div>
    </div>
  );
};

export default AdminAccomodation;
