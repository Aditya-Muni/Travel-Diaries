import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="bg-hero py-64 flex justify-center align-middle flex-col">
      <h2 className="text-xl self-center font-semibold  text-cyan-400 ">
        Welcome to travel diaries!
      </h2>
      <h1 className="m-2 text-6xl font-semibold self-center text-gray-100 ">
        Explore.Share.<span className="text-cyan-400">Inspire.</span>
      </h1>
      <p className="m-2 self-center text-center  text-gray-300">
        Transform your journey into a captivating narrative,
        <br /> where each chapter serves as a vibrant stroke on the canvas of
        our world, allowing your story to <br />
        gracefully unfold and captivate all who encounter it.
      </p>
      <div className="m-2 p-1 flex justify-center self-center w-[50%] rounded-xl bg-gray-100">
        <input
          className="w-[100%] py-2 px-4 self-center resize-none rounded-l-xl text-[#6CA49F] placeholder-cyan-400 bg-[#E8EDF5] active: border-none outline-none "
          placeholder="Search your destination"
        />
        <div className=" w-[6%] flex justify-center align-middle rounded-r-xl bg-cyan-400">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className=" h-5 self-center text-gray-100  "
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
