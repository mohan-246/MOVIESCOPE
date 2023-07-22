import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OneApi from "../api/OneApi";
import { MovieCard } from "./MovieCard";

export const More = () => {
  const [more, setMore] = useState([]);
  const [page, setPage] = useState(1);
  const { topic, term } = useParams();

  const fetchMovies = async (topic, url) => {
    try {
      const response = await OneApi(url);
      setMore((prevMore) => [...prevMore, ...response.results]);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    let currentUrl;
    switch (topic) {
      case "Discover":
        currentUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}`;
        break;
      case "Popular":
        currentUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}`;
        break;
      case "Top Rated":
        currentUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}`;
        break;
      case "Upcoming":
        currentUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}`;
        break;
      case "Search Results":
        console.log(topic, term);
        currentUrl = `https://api.themoviedb.org/3/search/movie?query=${term}&api_key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}`;
        break;
      default:
        console.log("Enter a valid path!");
        break;
    }

    fetchMovies(topic, currentUrl);
  }, [page, topic]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container mx-auto pt-3 bg-slate-50">
      <div className="flex flex-wrap justify-around gap-3 bg-slate-50">
        {more.map(
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
      <div className="justify-center w-full my-2 flex">
        <button
          onClick={handleLoadMore}
          className="rounded-lg bg-slate-900 text-white w-full font-mono font-extrabold text-2xl"
        >
          Load More
        </button>
      </div>
    </div>
  );
};
