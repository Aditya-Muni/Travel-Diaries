import React from "react";
import user from "./../../assets/Emily.jpg";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PostCard(props) {
  return (
    <div className="h-fit mx-8 my-4 pb-4 bg-gray-100 rounded-2xl border-[1px] border-cyan-400">
      <div className="flex justify-between">
        <div className="self-start flex flex-row p-4">
          <img src={props.img} className="h-12 rounded-full" />
          <div className="pl-4 self-center h-12">
            <p className="text-cyan-400 font-semibold">{props.name}</p>
            <p className="text-gray-400 font-normal text-base">
              {props.userId}
            </p>
          </div>
        </div>
        <div className="self-center flex flex-row pr-8">
          <div className="flex flex-row mr-8">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="self-center h-5 text-cyan-400 mr-2"
            />
            <p className="self-center">{props.location}</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBookmark}
              className="h-8 text-cyan-400 hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
      <p className="font-normal px-4">{props.content}</p>
      {/* images */}
      <div className="mx-3 my-4 flex flex-row">
        <div className="h-40 w-[33%] mx-1 bg-slate-500 rounded-md"></div>
        <div className="h-40 w-[33%] mx-1 bg-slate-500 rounded-md"></div>
        <div className="h-40 w-[33%] mx-1 bg-slate-500 rounded-md"></div>
      </div>
    </div>
  );
}

export default PostCard;
