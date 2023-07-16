import React from "react";
import { CastCard } from "./CastCard";
import { MovieCard } from "./MovieCard";
import { useHorizontalScroll } from "../Function/HorizontalScroll";
import { Link,BrowserRouter,Route,Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Card } from "./Card";

export const CastList = ({ Topic, List,MovId }) => {
  const scrollRef=useHorizontalScroll()
  const navigate=useNavigate()

  return (
    
    <div className="" id="scrollable-list" >
      <p className="text-xl font-extrabold  font-mono uppercase mx-4 my-5">{Topic}</p>
      <div className="gap-2 list-container overflow-y-visible h-[405px] overflow-x-auto  space-x-2 flex" ref={scrollRef}>
      
        {List.map((c) => (
        <Link key={c.id} to={`/Details/${MovId}`}>{c.profile_path && <CastCard key={c.id} id={c.id} poster={c.profile_path} item={c}  />}</Link> 
        ))}
        
      </div>
    </div>
    
    
  );
};
