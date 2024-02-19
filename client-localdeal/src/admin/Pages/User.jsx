import React from "react";
import UserTable from "../components/UserTable/UserTable";

const User = () => {
  return (
    <div className=" user-page">
      {/**/}

      <UserTable title="User Table" type="user" url="/admin/users" />
    </div>
  );
};

export default User;
