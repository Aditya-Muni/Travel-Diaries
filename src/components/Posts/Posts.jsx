import React from "react";
import PostCard from "./PostCard";
import Data from "./PostData";

function Posts() {
  return (
    <div className="pt-20 ml-[23%] w-[54%]">
      {/* posts */}
      {Data.map((data) => {
        return (
          <PostCard
            img={data.img}
            name={data.Name}
            userId={data.UserID}
            content={data.PostContent}
            location={data.location}
          />
        );
      })}
    </div>
  );
}

export default Posts;
