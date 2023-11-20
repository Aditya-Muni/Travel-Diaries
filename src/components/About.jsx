import React from "react";
import aboutImg from "./../assets/about-img.png";

function About() {
  return (
    <div className="px-24 py-20 grid grid-cols-2 gap-20">
      <div className="text-left flex flex-col justify-center">
        <h1 className="my-3 header">Who are we</h1>
        <h3 className="my-2 text-xl text-cyan-400 font-medium">
          "the world is a book and those who do not travel read only one page"
        </h3>
        {/* text-[#6CA49F] font-medium*/}
        <p className="my-2 ">
          Connecting passionate travelers and empowering them to create
          incridible journeys with a vibrant community of adventurers,
          explorers, and globetrotters who are eager to share their travel
          tales, tips, and recommendations.
          <br />
          <br /> Our mission is simple: to inspire and assist fellow travelers
          in crafting unforgettable experiences.With firsthand accounts of the
          best places to visit, the most mouthwatering local cuisines, and a
          breakdown of total expenses, you can embark on your journeys with
          confidence and enthusiasm.
        </p>
      </div>
      <div>
        <img src={aboutImg} />
      </div>
    </div>
  );
}

export default About;
