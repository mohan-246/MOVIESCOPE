import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movi from "../api/MovieId";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Credi from "../api/Credits";
import { CastList } from "./CastList";

export const Card = () => {
  let [Movie, setMovi] = useState({});
  let [Cast,setCast]=useState([])
  let wo;
  const param = useParams();
  const baseUrl = "https://image.tmdb.org/t/p/original";
  
  useEffect(() => {
    let wi = async () => {
      wo = await Movi(param.id);
      
      setMovi(wo);
      wo= await Credi(param.id)
      setCast(wo)
    };
    wi();
  }, []);
  useEffect(() => {
    
  }, [Movie,Cast]);
 
  return (
    <div className="bg-slate-50">
      <div className="h-full ">
        <div className="mix-blend-multiply relative top-0  h-100 w-200 bg-slate-700 ">
          <img
            className="mix-blend-multiply relative top-0 w-full"
            src={baseUrl.concat(Movie.backdrop_path)}
          />
        </div>
        <img
          className="absolute float-left rounded-lg mx-5 w-[30%] h-auto top-[5%] "
          src={baseUrl.concat(Movie.poster_path)}
        />
        <div className="absolute top-[5%] left-[35%] text-white font-mono font">
          <p className="font-extrabold xs:text-xs uppercase sm:text-xl lg:text-5xl">{Movie.title}</p>
          <div className="flex xs:text-[6px]  sm:text-md lg:text-xl xs:gap-1 sm:gap-3">
            <FontAwesomeIcon className="sm:mt-4 xs:mt-3 text-red-600" icon={faHeart} />
            <p className="mt-3">
              {Math.floor(Movie.vote_average * 100) / 100}/10
            </p>
            <p className="ml-5 mt-3">{Movie.release_date}</p>
            <p className="ml-5 mt-3">{Movie.runtime} mins</p>
          </div>
          <p className="xs:text-[6px] sm:text-sm md:text-md mt-3 lg:text-lg text-gray-400">"{Movie.tagline}"</p>
          <div className="xs:text-[6px] sm:text-sm md:text-md mt-5 lg:text-lg">{Movie.overview}</div>
        </div>
      </div>
      <CastList Topic="Cast" List={Cast} MovId={param.id}/>
    </div>
  );
};
