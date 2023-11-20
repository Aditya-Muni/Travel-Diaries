import React from "react";
import logo from "./../assets/logo2.png";
import user from "./../assets/emily.jpg";

function NavBar2() {
  return (
    <div className="navbar2 bg-[#E8EDF5] h-auto px-12 pt-3 pb-2 fixed">
      <img src={logo} className="h-12" />
      <div className="nav-link2 flex justify-between align-middle">
        <a>About Us</a>
        <a>Contact Us</a>
      </div>
      {/* -------------------- suggest some locations useing API -------------------- */}
      <input
        className="w-[30%] py-2 px-4 self-center resize-none rounded-xl text-[#6CA49F] placeholder-cyan-400 bg-gray-100 focus:outline-none focus:border-[1px]  focus:border-cyan-400 "
        placeholder="Search your destination"
      />
      <div className="flex flex-row">
        {/* -------------------- user name -------------------- */}
        <p className="self-center mr-6">Hey! Emily</p>
        {/* -------------------- user img -------------------- */}
        <img src={user} className="h-12 rounded-full" />
      </div>
    </div>
  );
}

export default NavBar2;
