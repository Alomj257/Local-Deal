import React, { useState } from "react";
import { FaList, FaRegHeart, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FiLogOut, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaThLarge, FaUser } from 'react-icons/fa';
import { BiCog } from "react-icons/bi";
import logo from '../../../assets/icons/logo.png';
import icon from '../../../assets/icons/logo_icon.png';
import "./Header.css";

const Header = () => {
    const [menuCollapse, setMenuCollapse] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [activeLink, setActiveLink] = useState('dashboard'); // Initially set to dashboard

    const menuIconClick = () => {
        setMenuCollapse(!menuCollapse);
    };

    const toggleCategories = () => {
        setShowCategories(!showCategories);
    };

    const handleItemClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div id="header" className={menuCollapse ? 'collapsed' : ''}>
            <img src={menuCollapse ? icon : logo} alt="Logo" style={{ width: menuCollapse ? '45px' : '130px', height: '45px' }} />
            <div className="closemenu" onClick={menuIconClick}>
                {menuCollapse ? <FiArrowRight /> : <FiArrowLeft />}
            </div>
            <div className="sidebar-content">
                <ul>
                    <li className={activeLink === 'dashboard' ? 'active' : ''} onClick={() => handleItemClick('dashboard')}>
                        {menuCollapse ? <FaThLarge /> : <><FaThLarge /> Dashboard</>}
                    </li>
                    <li>
                        <div className="menu-item" onClick={toggleCategories}>
                            {menuCollapse ? <FaList /> : <><FaList /> Categories</>}
                            {menuCollapse ? null : (showCategories ? <FaChevronDown className="chevron-icon" /> : <FaChevronRight className="chevron-icon" />)}
                        </div>
                        {!menuCollapse && showCategories && (
                            <ul className="sub-menu">
                                <li>Category 1</li>
                                <li>Category 2</li>
                            </ul>
                        )}
                    </li>
                    <li className={activeLink === 'promotion' ? 'active' : ''} onClick={() => handleItemClick('promotion')}>
                        {menuCollapse ? <FaRegHeart /> : <><FaRegHeart /> Promotion</>}
                    </li>
                    <li className={activeLink === 'user' ? 'active' : ''} onClick={() => handleItemClick('user')}>
                        {menuCollapse ? <FaUser /> : <><FaUser /> User</>}
                    </li>
                    <li className={activeLink === 'settings' ? 'active' : ''} onClick={() => handleItemClick('settings')}>
                        {menuCollapse ? <BiCog /> : <><BiCog /> Settings</>}
                    </li>
                </ul>
                <ul>
                    <li className={activeLink === 'logout' ? 'active' : ''} onClick={() => handleItemClick('logout')}>
                        {menuCollapse ? <FiLogOut /> : <><FiLogOut /> Logout</>}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
