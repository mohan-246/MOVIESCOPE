import axios from "axios"

async function Sear(query) {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${import.meta.env.VITE_API_KEY}`,
    {
      headers: {
        accept: "application/json",
      },
    })
   
    return response.data.results
}
export default Sear