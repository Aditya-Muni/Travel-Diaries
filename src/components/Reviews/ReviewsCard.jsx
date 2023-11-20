import React from "react";

function ReviewsCard() {
  return (
    <div className=" relative mx-40 my-16 flex flex-col justify-center align-middle self-center rounded-2xl border-[1px] border-cyan-400 bg-cyan-400 bg-opacity-5">
      <h1 className="absolute top-[0%] left-[8%] text-8xl text-cyan-400">"</h1>
      <h1 className="absolute top-[25%] right-[8%] text-8xl text-cyan-400">
        "
      </h1>
      <p className="mx-32 my-4 p-4 self-center text-center text-gray-100">
        Booking our dream vacation through this travel website was a breeze. The
        accommodations, tours, and recommendations exceeded our expectations. A
        truly unforgettable experience!
      </p>
      <div className="mb-4 grid grid-cols-2 gap-1 self-center">
        <div className=" h-14 w-14  rounded-full bg-black self-center">img</div>
        <div>
          <p className="text-gray-100 text-lg">User Name</p>
          <p className="text-cyan-400">@userId</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewsCard;
