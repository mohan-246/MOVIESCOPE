import axios from "axios"

async function Uppp() {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`,
    {
      headers: {
        accept: "application/json",
      },
    })
    
    return response.data.results
}
export default Uppp