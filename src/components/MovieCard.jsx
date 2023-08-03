import React from "react";

export const MovieCard = ({ item, id, poster }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w185";
  const url = baseUrl.concat(poster);

  var options = { year: "numeric", month: "long", day: "numeric" };
  var date = new Date(item.release_date);
  return (
    <div className="rounded-lg sm:p-2 sm:w-[166px] xs:w-[83px] xs:h-[200px] xs:p-1 xs:mx-1 bg-slate-100 sm:h-[400px] whitespace-normal  shadow-md sm:mx-2 ">
      <img
        className="xs:w-[75px] xs:h-[128px] sm:w-[150px] sm:h-[255px] rounded-lg object-cover"
        src={url}
      />
      <div className="sm:px-4 sm:w-[150px] sm:py-4 xs:px-2 xs:w=[75px] xs:py-2">
        <p className="sm:text-sm xs:text-[7px] text-start font-bold">
          {item.title}
        </p>
        <p className="sm:text-sm xs:text-[7px] text-start sm:py-2 xs:py-1 text-gray-700">
          {date.toLocaleDateString("en-US", options)}
        </p>
      </div>
    </div>
  );
};
