import React from "react";
import UserTable from "../components/UserTable/UserTable";

const User = () => {
  const columns = ["name", "email", "phoneNo", "gender", "role"];
  return (
    <div className=" user-page">
      {/**/}

      <UserTable
        title="User Table"
        type="user"
        url="/admin/users"
        columns={columns}
      />
    </div>
  );
};

export default User;
