import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import icon from "../../../assets/icons/logo_icon.png";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo-details">
        <i className="icon">
          <img src={icon} alt="Logo" style={{ width: "20px", height: "20px" }} />
        </i>
        <div className="logo_name">LocalDeal</div>
        <i
          className={`bx ${isOpen ? "bx-menu-alt-right" : "bx-menu"}`}
          id="btn"
          onClick={toggleSidebar}
        ></i>
      </div>
      <ul className="nav-list px-0 m-0">
        <li>
          <i className='bx bx-search'></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        <li>
          <Link to="/admin">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </Link>
          <span className="tooltip">Dashboard</span>
        </li>
        <li className="position-relative category">
          <Link to="/admin/category">
            <i className="bx bx-category-alt"></i>
            <span className="links_name">Category</span>
          </Link>
          {/* <span className="tooltip">Category</span> */}
          <ul className="sub-menu">
            <li><Link to="/admin/category1" className="links_name">Food</Link></li>
            <li><Link to="/admin/category2" className="links_name">Accommodation</Link></li>
            <li><Link to="/admin/category2" className="links_name">Entertainment</Link></li>
            <li><Link to="/admin/category2" className="links_name">Activities</Link></li>
            <li><Link to="/admin/category2" className="links_name">Services</Link></li>
            <li><Link to="/admin/category2" className="links_name">Beauty</Link></li>
            <li><Link to="/admin/category2" className="links_name">Home</Link></li>
            {/* Add more submenu items as needed */}
          </ul>
        </li>
        <li>
          <Link to="/admin/promotion">
            <i className="bx bx-heart"></i>
            <span className="links_name">Promotion</span>
          </Link>
          {/* <span className="tooltip">Promotion</span> */}
          <ul className="sub-menu">
            <li><Link to="/admin/category1" className="links_name">Premium </Link></li>
            <li><Link to="/admin/category2" className="links_name">Basic</Link></li>
            {/* Add more submenu items as needed */}
          </ul>
        </li>
        <li>
          <Link to="/admin/users">
            <i className="bx bx-user-pin"></i>
            <span className="links_name">User</span>
          </Link>
          <span className="tooltip">User</span>
        </li>
        <li>
          <Link to="/admin/setting">
            <i className="bx bx-cog"></i>
            <span className="links_name">Setting</span>
          </Link>
          <span className="tooltip">Setting</span>
        </li>
        <li>
          <Link to="/help">
            <i className="bx bx-help-circle"></i>
            <span className="links_name">Help & Support</span>
          </Link>
          <span className="tooltip">Help & Support</span>
        </li>
        <li>
          <Link to="/admin/lougout">
            <i className="bx bx-log-out-circle"></i>
            <span className="links_name">Logout</span>
          </Link>
          <span className="tooltip"> Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
