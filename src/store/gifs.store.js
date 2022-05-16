import GiphyApi from "@/services/GiphyApi"

export default {
  state: {
    trendingGifs: [],
    gifs: [],
    gif: {},
    isLoading: false
  },

  getters: {
      getTrendingGifs: (state) => state.trendingGifs,
      getGifs: (state) => state.gifs,
      getGif: (state) => state.gif,
      getLoading: (state) => state.isLoading
  },

  actions: {
      fetchTrendingGifs( { commit, dispatch } ) {
          dispatch('setLoading', true);

          GiphyApi.getGifsByTrending().then(
            ({ data: {data: gifs} }) => {
              commit('SET_TRENDING_GIFS', gifs);

              dispatch('setLoading', false);
            },
            (error) => {
              console.log(error);

              dispatch('setLoading', false);
            }
          );
      },

      fetchGifs( { commit, dispatch }, searchTerm ) {
        dispatch('setLoading', true);

        GiphyApi.getGifsBySearch(searchTerm).then(
          ({ data: {data: gifs} }) => {
            commit('SET_GIFS', gifs);

            dispatch('setLoading', false);
          },
          (error) => {
            console.log(error);

            dispatch('setLoading', false);
          }
        );
      },

      fetchGif( { commit, dispatch }, idParam ) {
        dispatch('setLoading', true);

        GiphyApi.getGifById(idParam).then(
          ({ data: {data: gif} }) => {
            commit('SET_GIF', gif);

            dispatch('setLoading', false);
          },
          (error) => {
            console.log(error);

            dispatch('setLoading', false);
          }
        );
      },

      resetGifs( { commit }) {
        commit('SET_RESET_GIFS');
      },

      setLoading( { commit }, status) {
          commit('SET_LOADING', status);
      },
  },

  mutations: {
    SET_TRENDING_GIFS(state, gifs) {
      state.trendingGifs = gifs;
    },

    SET_GIFS(state, gifs) {
      state.gifs = gifs;
    },

    SET_GIF(state, gif) {
      state.gif = gif;
    },

    SET_RESET_GIFS(state) {
      state.gifs = [];
    },

    SET_LOADING(state, status) {
      state.isLoading = status;
    }
  }
}