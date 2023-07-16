import React from "react";

export const CastCard = ({ item, id, poster }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const url = baseUrl.concat(poster);
  
  return (
    <div className="rounded bg-slate-100 h-[400px] whitespace-normal  shadow-md mx-2 " >
      <img
        className="w-[150px] h-[255px] rounded-lg object-cover"
        src={url}
      />
      <div className="px-4 w-[150px]  py-4">
        <p className="text-sm text-start  font-bold">{item.name}</p>
        <p className="text-sm text-start py-2 text-gray-700">{item.character}</p>
      </div>
    </div>
  );
};
