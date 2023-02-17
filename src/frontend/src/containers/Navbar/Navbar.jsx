import React, { useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import "./Navbar.scss";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
    <div className="menu-button" onClick={showNav}>
        <GiHamburgerMenu/>
    </div>
    <nav className={`navbar ${isNavOpen && 'active'}`}>
        <ul>
        <li> <a href="#">HOME</a> </li>
        <li> <a href="#">ABOUT US</a> </li>
        <li> <a href="#">OBJECTIVES</a> </li>
        <li> <a href="#">STORIES</a> </li>
        <li> <a href="#">GALLERY</a> </li>
        <li> <button>JOIN NOW</button> </li>
      </ul>
    </nav>
    <GiHamburgerMenu />
    </>
  );
};

export default Navbar;
