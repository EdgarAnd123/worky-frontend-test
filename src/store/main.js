import Vue from 'vue'
import Vuex from 'vuex'
import gifsStore from './gifs.store'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      gifs: gifsStore
    }
})