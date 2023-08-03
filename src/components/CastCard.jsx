import React from "react";

export const CastCard = ({ item, id, poster }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w185";
  const url = baseUrl.concat(poster);
  
  return (
    <div className="rounded bg-slate-100 xs:h-[200px] sm:h-[400px] whitespace-normal  shadow-md xs:mx-1 sm:mx-2 " >
      <img
        className="sm:w-[150px] sm:h-[255px] xs:w-[75px] xs:h-[128px] rounded-lg object-cover"
        src={url}
      />
      <div className="sm:px-4 sm:w-[150px] sm:py-4 xs:px-2 xs:w-[75px] xs:py-2">
        <p className="sm:text-sm xs:text-[7px] text-start font-bold">{item.name}</p>
        <p className="sm:text-sm xs:text-[7px] text-start sm:py-2 text-gray-700">{item.character}</p>
      </div>
    </div>
  );
};
