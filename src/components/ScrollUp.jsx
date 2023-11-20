import React from "react";
import logo from "./../assets/logo2.png";

function ScrollUp() {
  const scrolling = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="fixed z-10 right-5 bottom-5 flex flex-row bg-[#E8EDF5] border-2 border-cyan-400 rounded-full hover:cursor-pointer"
      onClick={scrolling}
    >
      <p className="self-center my-2 mx-3">Scroll to Top</p>
      <img src={logo} alt="logo" className="h-10 w-10" />
    </div>
  );
}

export default ScrollUp;
