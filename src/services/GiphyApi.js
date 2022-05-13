import axios from "axios"
import { GIPHY_API, API_KEY } from "@/constants"

export default {
  getGifsByTrending() {
    return axios.get(`http://${GIPHY_API}/trending?api_key=${API_KEY}&limit=4`)
  },
  getGifsBySearch(searchParam) {
    return axios.get(`http://${GIPHY_API}/search?api_key=${API_KEY}&q=${searchParam}&limit=15`)
  }
}