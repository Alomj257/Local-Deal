import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import close icon
import logoPng from '../../assets/icons/logo.png';
import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg';
import './Navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logoPng} alt="Logo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? (
            // Show close icon when the navbar is open
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            // Show hamburger icon when the navbar is closed
            <Hamburger />
          )}
        </div>

        <div className={`nav-elements ${showNavbar && 'active'}`} onClick={closeNavbar}>
          <ul>
            <li>
              <NavLink to="/" onClick={closeNavbar}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeNavbar}>About</NavLink>
            </li>
            <li>
              <NavLink to="/location" onClick={closeNavbar}>Location</NavLink>
            </li>
            <li>
              <NavLink to="/categories" onClick={closeNavbar}>Categories</NavLink>
            </li>
            <li>
              <NavLink to="/promotions" onClick={closeNavbar}>Promotions</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeNavbar}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/adminlogin" onClick={closeNavbar}>
                {showNavbar ? 'Login' : <FontAwesomeIcon icon={faUser} />}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
