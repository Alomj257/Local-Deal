import React from "react";
import UserTable from "../components/UserTable/UserTable";

const Contact = () => {
  const columns = ["name", "email", "subject", "message", "createdAt"];
  return (
    <div>
      <UserTable url="/contact/" title="All Contact List" columns={columns} />
    </div>
  );
};

export default Contact;
