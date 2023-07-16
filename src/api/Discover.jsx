import axios from "axios"
async function Diss() {
  // eslint-disable-next-line no-undef
  const url=`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`
    const response = await axios.get(url,
    {
      headers: {
        accept: "application/json",
      },
    })
    
    return response.data.results
}
export default Diss