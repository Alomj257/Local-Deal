import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
;

const DashBoard = () => {
  return (
    <>
      <div className="d-flex" style={{ minWidth: "fit-content" }}>
        {/* <Sidebar /> */}
        <Header />
        <main>right</main>
      </div>
    </>
  );
};

export default DashBoard;
