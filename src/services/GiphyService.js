import GiphyApi from "@/services/GiphyApi"

const ERROR_MESSAGE = 'Hubo un error al traer los datos. Intente nuevamente';

export default {
  async getTrendingGifs() {
    try {
      const { data: {data: gifs} } = await GiphyApi.getGifsByTrending();
      
      return gifs;
    } catch(error) {
      console.log(error);

      return ERROR_MESSAGE;
    }
  },

  async searchForGifs(searchTerm) {
    try {
      const { data: {data: gifs} } = await GiphyApi.getGifsBySearch(searchTerm);
      
      return gifs;
    } catch(error) {
      console.log(error);
      
      return ERROR_MESSAGE;
    }
  },

  async searchGifbyId(idParam) {
    try {
      const { data: { data } } = await GiphyApi.getGifById(idParam);

      return data;
    } catch(error) {
      console.log(error);
      
      return ERROR_MESSAGE;
    }
  }
}