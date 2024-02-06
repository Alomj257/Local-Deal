import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { MdCategory, MdGridView } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import logo from "../../../assets/icons/logo.png";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <nav className=" text-white admin-sidebar">
      <ul className="px-0">
        <img src={logo} alt="" width={100} className="shadow p-2 admin-logo" />
        {sidebar.map((data, key) => {
          return (
            <>
              <li className="p-3 fs-5 position-relative d-flex justify-content-between ">
                <span>
                  {data.icons} <span className="title">{data.name}</span>
                </span>
                {data.child && (
                  <FaChevronDown className="admin-child-icon title" />
                )}
                {data.child && (
                  <ul className="px-0">
                    {data.child.map((d, i) => {
                      return (
                        <>
                          <li className="p-3 fs-5 ">{d}</li>
                        </>
                      );
                    })}
                  </ul>
                )}
              </li>
            </>
          );
        })}
      </ul>
    </nav>
  );
};
export default Sidebar;

const sidebar = [
  { name: "Dashboard", icons: <MdGridView /> },
  {
    name: "category",
    icons: <MdCategory />,
    child: ["category1", "category2", "category3", "category4", "category5"],
  },
  { name: "promotion", icons: <GrAnnounce /> },
  { name: "Users", icons: <FaUserCircle /> },
];
