import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const MoreCard = ({ M }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="  bg-slate-900 top-0 rounded-md w-full  ">
      
      <div className=" text-white">
        <img
          src={baseUrl.concat(M.poster_path)}
          className="sm:w-[15%] xs:w-[20%] float-left h-auto rounded-md mr-5"
        />
        <div className="  xs:pt-3 sm:pt-10">
        <p className="font-mono uppercase xs:text-xs sm:text-3xl font-bold">{M.original_title}</p>
        <div className="flex xs:text-[7px] sm:mt-4 sm:text-lg xs:gap-1 sm:gap-3">
          <FontAwesomeIcon
            className="sm:mt-4 xs:mt-[5px] text-red-600"
            icon={faHeart}
          />
          <p className="sm:mt-3 xs:mt-1 text-gray-400">{Math.floor(M.vote_average * 100) / 100}/10</p>
          <p className="ml-5 sm:mt-3 xs:mt-1 text-gray-400">{M.release_date}</p>
          <p className="ml-5 sm:mt-3 xs:mt-1 text-gray-400">{M.original_language}</p>
        </div>
        <div className="xs:text-[7px] sm:text-sm md:text-md sm:mt-5 xs:mt-2 lg:text-lg">
          {M.overview}
        </div>
        </div>
      </div>
    </div>
  );
};
