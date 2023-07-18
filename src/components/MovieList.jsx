import { MovieCard } from "./MovieCard";
import { useHorizontalScroll } from "../Function/HorizontalScroll";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const MovieList = ({ Topic, List }) => {
  const scrollRef = useHorizontalScroll();

  return (
    <div className=" relative" id="scrollable-list">
      <div className="flex justify-between">
        <p className="text-xl  font-extrabold  font-mono uppercase mx-4 my-5">
          {Topic}
        </p>
         <Link to={`/More/${Topic}`}>
          <p className="text-sm p-1 font-bold  font-mono uppercase mx-4 my-5">
            More <FontAwesomeIcon className="text-sm " icon={faAngleRight} />
          </p>
        </Link> 
      </div>
      <div
        className="gap-2 list-container overflow-y-visible h-[420px] overflow-x-auto  space-x-2 flex"
        ref={scrollRef}
      >
        {List.map((e) => (
          e.poster_path &&   <Link key={e.id} to={`/Details/${e.id}`}><MovieCard key={e.id} id={e.id} poster={e.poster_path} item={e} /></Link>
        ))}
      </div>
    </div>
  );
};
