import React from "react";
import UserTable from "../../components/UserTable/UserTable";

const AdminAccomodation = () => {
  return (
    <div>
      <div className="">
        <h3 className="fw-bold my-3 text-primary">
          Accomodation Category List
        </h3>
        <UserTable />
      </div>
    </div>
  );
};

export default AdminAccomodation;
