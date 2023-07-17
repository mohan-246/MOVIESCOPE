import axios from "axios"

async function OneApi(reqUrl) {
    const url=reqUrl
    const response = await axios.get(url,
    {
      headers: {
        accept: "application/json",
      },
    })
    
    return response.data
}
export default OneApi