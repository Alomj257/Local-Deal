import React from "react";
import UserTable from "../components/UserTable/UserTable";

const Newslatter = () => {
  return (
    <div>
      <UserTable
        url="/newsletter/"
        title="Subscriber Email List"
        columns={["email", "_id"]}
        type="subscruber"
      />
    </div>
  );
};

export default Newslatter;
