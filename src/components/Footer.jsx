import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faXTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="pt-8 pb-5 flex flex-col justify-center bg-[#E8EDF5]">
      <div className="self-center">
        <FontAwesomeIcon
          icon={faYoutube}
          className="px-4 py-2 h-5 text-cyan-400 cursor-pointer hover:text-cyan-800"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="px-4 py-2 h-5 text-cyan-400 cursor-pointer hover:text-cyan-800"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className="px-4 py-2 h-5 text-cyan-400 cursor-pointer hover:text-cyan-800"
        />
        <FontAwesomeIcon
          icon={faXTwitter}
          className="px-4 py-2 h-5 text-cyan-400 cursor-pointer hover:text-cyan-800"
        />
      </div>
      <p className="self-center">
        Created by:{" "}
        <span className="text-cyan-400">
          <a href="https://adityamuni.tech/">Aditya</a> & Rajat
        </span>
      </p>
    </div>
  );
}

export default Footer;
