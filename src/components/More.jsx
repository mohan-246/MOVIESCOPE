import React, { useState } from "react";
import { useParams } from "react-router-dom";
import OneApi from "../api/OneApi";
import { MoreList } from "./MoreList";

export const More = () => {
  const [more, setMore] = useState([]);
  const { topic } = useParams();
  console.log(topic)
  let wi, wo,page=1
  const upcomingUrl=`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`
  const topratedUrl=`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`
  const popularUrl=`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`
  const discoverUrl=`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`

  console.log(topic);
  switch (topic) {
    case "Search Results":
      break;
    case "Discover":
      wi = async () => {
        wo = await OneApi(discoverUrl);
        setMore(wo.results);
        console.log(more);
      };
      wi();
      break;
    case "Popular":
      wi = async () => {
        wo = await OneApi(popularUrl);
        setMore(wo.results);
        console.log(more);
      };
      wi();
      break;
    case "Top Rated":
      wi = async () => {
        wo = await OneApi(topratedUrl);
        setMore(wo.results);
        console.log(more);
      };
      wi();
      break;
    case "Upcoming":
      wi = async () => {
        wo = await OneApi(upcomingUrl);
        setMore(wo.results);
        console.log(more);
      };
      wi();
      break;
    default:
      break;
  }
  return <div>
    <MoreList More={more}/>
  </div>;
};
