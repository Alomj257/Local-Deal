import React from "react";
import Sidebar from "../components/Sidebar";

const DashBoard = () => {
  return (
    <>
      <div className="d-flex" style={{ minWidth: "fit-content" }}>
        <Sidebar />
        <main>right</main>
      </div>
    </>
  );
};

export default DashBoard;
