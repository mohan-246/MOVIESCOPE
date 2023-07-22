import { MovieCard } from "./MovieCard";
import { useHorizontalScroll } from "../Function/HorizontalScroll";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import { Container } from "postcss";

export const MovieList = ({ Topic, List,Term }) => {
  // const scrollRef = useHorizontalScroll();

  return (
    <div className=" relative" id="scrollable-list">
      <div className="flex justify-between">
        <p className="text-xl  font-extrabold  font-mono uppercase mx-4 my-5">
          {Topic}
        </p>
        {Topic === "Search Results" ? (
          <Link to={`/More/${Topic}/${Term}`}>
            <p className="text-sm p-1 font-bold  font-mono uppercase mx-4 my-5">
              More <FontAwesomeIcon className="text-sm " icon={faAngleRight} />
            </p>
          </Link>
        ) : (
          <Link to={`/More/${Topic}`}>
            <p className="text-sm p-1 font-bold  font-mono uppercase mx-4 my-5">
              More <FontAwesomeIcon className="text-sm " icon={faAngleRight} />
            </p>
          </Link>
        )}
      </div>
      <div className="flex flex-row relative">
        <div
          className="gap-2 list-container  h-[425px] overflow-x-auto  space-x-2 flex"
          // ref={scrollRef}
          id="scrollContainer"
        >
          {List.map(
            (e) =>
              e.poster_path && (
                <Link key={e.id} to={`/Details/${e.id}`}>
                  <MovieCard
                    key={e.id}
                    id={e.id}
                    poster={e.poster_path}
                    item={e}
                  />
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
};
