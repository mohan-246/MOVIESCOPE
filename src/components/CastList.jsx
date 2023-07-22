import { CastCard } from "./CastCard";
import { Link } from "react-router-dom";

export const CastList = ({ Topic, List, MovId }) => {
  return (
    <div className="" id="scrollable-list">
      <p className="text-xl font-extrabold  font-mono uppercase mx-4 my-5">
        {Topic}
      </p>
      <div className="gap-2 list-container overflow-y-visible h-[420px] overflow-x-auto  space-x-2 flex">
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
