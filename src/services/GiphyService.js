import GiphyApi from "@/services/GiphyApi"

export default {
  async getTrendingGifs() {
    try {
      const { data: {data: gifs} } = await GiphyApi.getGifsByTrending();
      
      return gifs;
    } catch(error) {
      console.log(error);

      return 'Hubo un error al traer los datos. Intente nuevamente';
    }
  },

  async searchForGifs(searchTerm) {
    try {
      const { data: {data: gifs} } = await GiphyApi.getGifsBySearch(searchTerm);
      
      return gifs;
    } catch(error) {
      console.log(error);
      
      return 'Hubo un error al traer los datos. Intente nuevamente';
    }
  }
}