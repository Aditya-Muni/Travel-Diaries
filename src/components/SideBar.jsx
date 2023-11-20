import React from "react";
import user from "./../assets/Emily.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faUser, faCog } from "@fortawesome/free-solid-svg-icons";
import goa from "./../assets/Goa.jpg";
import zurich from "./../assets/zurich.jpg";
import sydney from "./../assets/sydney.jpg";

const Destinations = [
  {
    img: goa,
    place: "goa",
  },
  {
    img: zurich,
    place: "zurich",
  },
  {
    img: sydney,
    place: "sydney",
  },
  {
    img: zurich,
    place: "Berlin",
  },
  {
    img: zurich,
    place: "tokyo",
  },
  {
    img: goa,
    place: "Delhi",
  },

  {
    img: sydney,
    place: "Moscow",
  },
  {
    img: sydney,
    place: "london",
  },
];

function SideBar() {
  return (
    <div className=" bg-gray-100 w-[23%] h-screen flex flex-col fixed left-right">
      {/* profile */}
      <div className="pt-24 pl-24 py-6 pr-4 flex flex-row align-middle justify-center border-b-2 border-gray-200 shadow-sm">
        {/* -------------------- user img -------------------- */}
        <img src={user} className="h-16 rounded-full" />
        <div className="pl-4 self-center">
          {/* -------------------- user's name -------------------- */}
          <p className="text-cyan-400 font-semibold">Emily Johnson</p>
          {/* -------------------- username -------------------- */}
          <p className="text-gray-400 font-normal text-base">@Traveler22</p>
        </div>
        <FontAwesomeIcon
          icon={faCog}
          className="text-cyan-400 ml-6 text-xl self-start"
        />
      </div>

      {/* section-filters */}
      <div className=" pl-24 py-4 flex flex-col justify-center border-b-2 border-gray-200 shadow-sm">
        {/* -------------------- On click should show user's posts -------------------- */}
        <div className="filter-btn self-start">
          <FontAwesomeIcon icon={faUser} className="mr-4 h-4" />
          Your Posts
        </div>
        {/* -------------------- On click should show all posts saved by user -------------------- */}
        <div className="filter-btn self-start">
          <FontAwesomeIcon icon={faFloppyDisk} className="mr-4 h-" />
          Saved
        </div>
      </div>
      {/* search filters  */}
      <div className="pt-4 pb-12 pr-6 ml-24">
        <h2 className="pb-4 text-cyan-400 text-lg font-semibold">
          Popular Destinations
        </h2>
        {/* -------------------- show popular destination & on click show posts of only those locations -------------------- */}
        <div className="grid grid-cols-2 gap-4">
          {Destinations.map((data) => {
            return (
              <div className="flex flex-row">
                <img src={data.img} className="h-10 w-10 rounded-full" />
                <div className="pl-2 self-center">
                  <p className="text-[#6CA49F] font-medium text-base">
                    {data.place}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="flex flex-col"></div> */}
      </div>
    </div>
  );
}

export default SideBar;
