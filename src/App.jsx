import { useState, useEffect } from "react";
import { MovieList } from "./components/MovieList";
import { Header } from "./components/Header";
import OneApi from "./api/OneApi";

export default function App() {
  const [disres, setdisres] = useState([]); 
  const [popres, setpopres] = useState([]);
  const [topres, settopres] = useState([]);
  const [uppres, setuppres] = useState([]);
  const [serres, setserres] = useState([]);
  const upcomingUrl=`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`
  const topratedUrl=`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`
  const popularUrl=`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`
  const discoverUrl=`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`
  let searchUrl,searchTerm

  let wo;
  useEffect(() => {
    let wi = async () => {
      wo = await OneApi(discoverUrl);

      setdisres(wo.results);

      wo = await OneApi(popularUrl);
      setpopres(wo.results);
      wo = await OneApi(topratedUrl);
      settopres(wo.results);
      wo  = await OneApi(upcomingUrl);
      setuppres(wo.results);
    };
    wi();
  }, []);
  const handleSubmit = async (term) => {
    searchTerm=term
    searchUrl=`https://api.themoviedb.org/3/search/movie?query=${term}&api_key=${import.meta.env.VITE_API_KEY}`
    wo = await OneApi(searchUrl);
    setserres(wo.results);
  };

  return (
    <div className="bg-slate-50">
      {" "}
      <Header onsubmit={handleSubmit} />
      <div className=" w-full overflow-x-hidden list-container h-full  ">
        {useEffect(() => {}, [disres, popres, topres, uppres])}
        {serres.length > 1 && (
          <MovieList Topic="Search Results" List={serres} />
        )}
        <MovieList Topic="Discover" List={disres} />
        <MovieList Topic="Popular" List={popres} />
        <MovieList Topic="Top Rated" List={topres} />
        <MovieList Topic="Upcoming" List={uppres} />
      </div>
    </div>
  );
}

