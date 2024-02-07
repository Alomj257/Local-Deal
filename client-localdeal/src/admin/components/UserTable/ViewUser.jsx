import React from "react";

const ViewUser = ({ user }) => {
  return (
    <div>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
      <div>{user?.role}</div>
      <div>{user?.contact}</div>
      <div>{user?.qualification}</div>
      <div>{user?.address}</div>
      <div>{user?.gender}</div>
      <div>{user?.nationality}</div>
      <div>{user?.passport}</div>
      <div>{user?.profile}</div>
    </div>
  );
};

export default ViewUser;
