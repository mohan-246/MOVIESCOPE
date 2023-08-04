import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { CastList } from "./CastList";
import OneApi from "../api/OneApi";
import { MovieReview } from "./MovieReview";
import { document } from "postcss";

export const Card = () => {
  const [Movie, setMovie] = useState({});
  const [Cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);

  const { id } = useParams();
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const creditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${
    import.meta.env.VITE_API_KEY
  }`;
  const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${
    import.meta.env.VITE_API_KEY
  }`;
  const reviewUrl = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${
    import.meta.env.VITE_API_KEY
  }&page=${page}`;
  let bgClasses="mix-blend-multiply relative top-0 bg-slate-700"
  Movie.backdrop_path?bgClasses+=" h-auto" : bgClasses+=" sm:h-[100vh]"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await OneApi(movieUrl);
        setMovie(movieData);

        const creditsData = await OneApi(creditsUrl);
        setCast(creditsData.cast);

        const reviewsData = await OneApi(reviewUrl);
        setReviews((prevReviews) => [...prevReviews, ...reviewsData.results]);
        console.log(reviewUrl);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  console.log(reviews);
  return (
    <div className="bg-slate-50">
      <div className="h-full ">
        <div id="poster-bg" className={bgClasses}>
        
         {Movie.backdrop_path && <img
            className="mix-blend-multiply relative top-0 w-full"
            src={baseUrl.concat(Movie.backdrop_path)}
          />}
        </div>
        <img
          className="absolute float-left rounded-lg mx-5 w-[30%] h-auto sm:top-[5%] xs:top-[3%]"
          src={baseUrl.concat(Movie.poster_path)}
        />
        <div className="absolute sm:top-[5%] xs:top-[3%] mx-3 left-[35%] text-white font-mono font">
          <p className="font-extrabold xs:text-xs sm:text-xl uppercase ">
            {Movie.title}
          </p>
          <div className="flex xs:text-[8px]  sm:text-md lg:text-xl xs:gap-1 sm:gap-3">
            <FontAwesomeIcon
              className="sm:mt-4 xs:mt-3 text-red-600"
              icon={faHeart}
            />
            <p className="mt-3">
              {Math.floor(Movie.vote_average * 100) / 100}/10
            </p>
            <p className="ml-5 mt-3">{Movie.release_date}</p>
            <p className="ml-5 mt-3">{Movie.runtime} mins</p>
          </div>
          <p className="xs:text-[7px] sm:text-sm md:text-md mt-3 lg:text-lg text-gray-400">
            "{Movie.tagline}"
          </p>
          <div className="xs:text-[7px] sm:text-sm md:text-md mt-5 lg:text-lg">
            {Movie.overview}
          </div>
        </div>
      </div>
      <CastList Topic="Cast" List={Cast} MovId={id} />
      {reviews.length > 1 && <MovieReview List={reviews} />}
      {reviews.length > 1 && (
        <div className="justify-center w-full my-2 flex">
          <button
            onClick={handleLoadMore}
            className="rounded-lg bg-slate-900 text-white w-full font-mono font-extrabold sm:text-2xl xs:text-xs xs:p-2"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
