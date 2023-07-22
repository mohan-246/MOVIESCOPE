import { useState, useEffect } from "react";
import { MovieList } from "./components/MovieList";
import { Header } from "./components/Header";
import OneApi from "./api/OneApi";

export default function App() {
  const [movieLists, setMovieLists] = useState({
    discover: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = async (url, listKey) => {
    try {
      const response = await OneApi(url);
      setMovieLists((prevLists) => ({
        ...prevLists,
        [listKey]: response.results,
      }));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${
      import.meta.env.VITE_API_KEY
    }`;
    const topratedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${
      import.meta.env.VITE_API_KEY
    }`;
    const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }`;
    const discoverUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }`;

    fetchMovies(discoverUrl, "discover");
    fetchMovies(popularUrl, "popular");
    fetchMovies(topratedUrl, "topRated");
    fetchMovies(upcomingUrl, "upcoming");
  }, []);

  const handleSubmit = async (term) => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${term}&api_key=${
      import.meta.env.VITE_API_KEY
    }`;
    try {
      const response = await OneApi(searchUrl);
      setSearchResults(response.results);
      setSearchTerm(term);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
   return (
    <div className="bg-slate-50">
      <Header onSubmit={handleSubmit} />
      <div className="w-full overflow-x-hidden list-container h-full">
        {searchResults.length > 0 && (
          <MovieList
            Topic="Search Results"
            List={searchResults}
            Term={searchTerm}
          />
        )}
        <MovieList Topic="Discover" List={movieLists.discover} />
        <MovieList Topic="Popular" List={movieLists.popular} />
        <MovieList Topic="Top Rated" List={movieLists.topRated} />
        <MovieList Topic="Upcoming" List={movieLists.upcoming} />
      </div>
    </div>
  );
}
