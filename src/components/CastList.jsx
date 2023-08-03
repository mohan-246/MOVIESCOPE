import { CastCard } from "./CastCard";
import { Link } from "react-router-dom";

export const CastList = ({ Topic, List, MovId }) => {
  return (
    <div className="" id="scrollable-list">
      <p className="sm:text-xl font-extrabold  font-mono uppercase sm:mx-4 sm:my-5 xs:mx-2 xs:my-3 xs:text-md">
        {Topic}
      </p>
      <div className="gap-2 list-container overflow-y-visible sm:h-[420px] overflow-x-auto xs:h-[210px]  space-x-2 flex">
        {List.map(
          (c) =>
            c.profile_path && (
              <Link key={c.id} to={`/Details/${MovId}`}>
                <CastCard
                  key={c.id}
                  id={c.id}
                  poster={c.profile_path}
                  item={c}
                />
              </Link>
            )
        )}
      </div>
    </div>
  );
};
