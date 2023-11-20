import React from "react";
import logo from "./../assets/travel-diaries-logo.png";
import { useState } from "react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <img src={logo} className="h-16 mx-12 mt-3 mb-2" />
      <div className="nav-link flex justify-between align-middle">
        <a>About Us</a>
        <a>Review</a>
        <a>Contact Us</a>
      </div>
      <div className="btn hover:bg-opacity-40">Sign up</div>
    </div>
  );
}

export default Navbar;
