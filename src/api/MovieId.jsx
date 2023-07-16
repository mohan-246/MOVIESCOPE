import axios from "axios"

async function Movi(id) {
    const url=`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`
    const response = await axios.get(url,
    {
      headers: {
        accept: "application/json",
      },
    })
    
    return response.data
}
export default Movi