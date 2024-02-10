import React, { useState } from "react";
import UserTable from "../components/UserTable/UserTable";
import Modal from "../../utils/Modal/Modal";
import AddUser from "../components/AddUser/AddUser";

const User = () => {
  const [users, setUsers] = useState([]);

  const handleAddItem = (newItem) => {
    setUsers([...users, newItem]);
  };
  return (
    <div className="px-3">
      <h3 className="mb-3"> User List</h3>

      <UserTable users={users} />
    </div>
  );
};

export default User;
