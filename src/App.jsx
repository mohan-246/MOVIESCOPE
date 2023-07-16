import  { useState, useEffect } from "react";
import Diss from "./api/Discover";
import { MovieList } from "./components/MovieList";
import Popp from "./api/Popular";
import Topp from "./api/TopRated";
import Uppp from "./api/Upcoming";
import { Header } from "./components/Header";
import Sear from "./api/Search";

function App() {
  const [disres, setdisres] = useState([]);
  const [popres, setpopres] = useState([]);
  const [topres, settopres] = useState([]);
  const [uppres, setuppres] = useState([]);
  const [serres, setserres] = useState([]);

  let wo;
  useEffect(() => {
    
    let wi = async () => {
      wo = await Diss();
      
      setdisres(wo);
      
      wo = await Popp();
      setpopres(wo);
      wo = await Topp();
      settopres(wo);
      wo = await Uppp();
      setuppres(wo);
    };
    wi();
  }, []);
  const handleSubmit = async (term) => {
    

    wo = await Sear(term);
    setserres(wo);
    
  };

  return (
    <div className="bg-slate-50">
      {" "}
      <Header onsubmit={handleSubmit} />
      <div className=" w-full overflow-x-hidden list-container h-full  ">
        {useEffect(() => {
         
        }, [disres, popres, topres, uppres])}
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

export default App;
