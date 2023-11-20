import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Data from "./ReviewsData.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" p-12 bg-review h-auto flex flex-col align-middle">
      <h1 className="header text-gray-100 self-center">
        What our Travelers says!
      </h1>
      {/* m-4 relative flex justify-center align-middle group */}
      <div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="hidden group-hover:block  absolute  top-[50%] -translate-x-0 translate-y[-50%] right-5 text-2xl rounded-full  h-8 w-8"
        />
        <FontAwesomeIcon
          icon={faChevronLeft}
          className=" hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y[-50%] left-5 text-2xl rounded-full  h-8 w-8"
        />
        {/* entire card */}
        <Slider {...settings}>
          {Data.map((d) => (
            <div className=" relative mx-48 mt-16 mb-4 flex flex-col justify-center align-middle self-center rounded-2xl border-[1px] border-cyan-400 bg-cyan-400 bg-opacity-5">
              <h1 className="absolute top-[0%] left-[8%] text-8xl text-cyan-400">
                "
              </h1>
              <h1 className="absolute top-[25%] right-[8%] text-8xl text-cyan-400">
                "
              </h1>
              <p className="mx-32 my-4 p-4 self-center text-center text-gray-100">
                {d.review}
              </p>
              <div className="flex justify-center align-middle">
                <div className="mb-4 flex flex-row">
                  <img
                    className=" h-14 w-14 mr-4 rounded-full bg-black "
                    src={d.img}
                  />
                  <div>
                    <p className="text-gray-100 text-lg">{d.Name}</p>
                    <p className="text-cyan-400">{d.UserID}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* <div className=" relative mx-40 my-16 flex flex-col justify-center align-middle self-center rounded-2xl border-[1px] border-cyan-400 bg-cyan-400 bg-opacity-5">
          <h1 className="absolute top-[0%] left-[8%] text-8xl text-cyan-400">
            "
          </h1>
          <h1 className="absolute top-[25%] right-[8%] text-8xl text-cyan-400">
            "
          </h1>
          <p className="mx-32 my-4 p-4 self-center text-center text-gray-100">
            Booking our dream vacation through this travel website was a breeze.
            The accommodations, tours, and recommendations exceeded our
            expectations. A truly unforgettable experience!
          </p>
          <div className="mb-4 grid grid-cols-2 gap-1 self-center">
            <div className=" h-14 w-14  rounded-full bg-black self-center">
              img
            </div>
            <div>
              <p className="text-gray-100 text-lg">User Name</p>
              <p className="text-cyan-400">@userId</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Reviews;
