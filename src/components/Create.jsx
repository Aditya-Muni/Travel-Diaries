import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faImage,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./../assets/logo2.png";

function Create() {
  return (
    <div className=" w-[23%] h-screen pt-20 flex flex-col fixed right-0 pr-4">
      <div className="w-[40%] text-cyan-400 font-semibold text-lg px-2 py-1 rounded-t-lg bg-[#E8EDF5]">
        Create a Post
      </div>
      <div className="w-full h-[30%] px-1 pt-2 pb-0 bg-[#E8EDF5] rounded-tr-lg">
        <textarea
          placeholder="Tell us about your experiences"
          className=" w-full h-full px-4 resize-none rounded-tr-lg placeholder-cyan-400 text-[#6CA49F] bg-gray-100 border-[2px] border-gray-100 focus:border-[2px] focus:border-cyan-400  focus:outline-none  "
        />
      </div>
      <div className="pl-1 flex flex-row bg-[#E8EDF5] rounded-bl-lg">
        <div className="w-[50%] mr-1 my-1 py-1 flex justify-center bg-gray-100 font-semibold text-cyan-400 rounded-bl-lg hover:text-[#6CA49F] hover:cursor-pointer">
          <FontAwesomeIcon icon={faImage} className="self-center mr-3 " />
          Images
        </div>
        <div className="w-[50%] mr-1 my-1  py-1 flex justify-center bg-gray-100 font-semibold text-cyan-400 hover:text-[#6CA49F] hover:cursor-pointer">
          <FontAwesomeIcon icon={faLocationDot} className="self-center mr-3 " />
          Location
        </div>
      </div>
      <div className="self-end w-[48%] pb-2 pt-1 flex justify-center rounded-b-lg font-semibold text-lg text-cyan-400 bg-[#E8EDF5]  hover:text-[#6CA49F] hover:cursor-pointer">
        <FontAwesomeIcon icon={faPaperPlane} className="self-center mr-3" />
        Post
      </div>
    </div>
  );
}

export default Create;
