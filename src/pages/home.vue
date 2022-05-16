<template>
  <div class="animate__animated animate__fadeIn">
    <search-element @searchedGifs="getSearchedGifs" />
    <Loading :show="isLoading" />
    <div class="trending_header__container animate__animated animate__lightSpeedInLeft">
      <trending-icon />
      <h4 class="py-4"> Trending </h4>
    </div>

    <div class="mb-4 trendingGrid xs:trendingGrid-xs sm:trendingGrid-sm md:trendingGrid-md">
      <giphy-card :gif="gif" v-for="(gif, index) in trendingGifs" :key="index" />
    </div>

    <template v-if="searchedGifs.length">
      <h2 class="py-4"> {{ searchTerm }} </h2>

      <div class="masonry sm:masonry-sm md:masonry-md">
        <div class="mb-4" v-for="(gif, index) in searchedGifs" :key="index">
          <giphy-card :gif="gif" />
        </div>
      </div>
    </template>  
  </div>
</template>

<script>
  import searchComponent from "@/components/search.vue"
  import giphyCardComponent from "@/components/giphy-card.vue"
  import loadingComponent from "@/components/loading.vue"

  import TrendingIcon from "@/components/TrendingIcon.vue"

  export default {
    name: 'homeComponent',
    components: {
      'search-element': searchComponent,
      'giphy-card': giphyCardComponent,
      'trending-icon': TrendingIcon,
      'Loading': loadingComponent
    },

    data(){
      return {
        searchTerm: ''
      }
    },

    beforeRouteEnter(to, from, next) {
      next((vue) => {
        vue.$root.$store.dispatch("fetchTrendingGifs");
      })
    },

    computed: {
      trendingGifs() {
        return this.$root.$store.getters.getTrendingGifs;
      },
      searchedGifs() {
        return this.$root.$store.getters.getGifs;
      },
      isLoading() {
        return this.$root.$store.getters.getLoading;
      }
    },

    methods: {
      getSearchedGifs(searchTerm) {
        this.searchTerm = searchTerm;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .trending_header__container{
    display: grid;
    grid-template-columns: repeat(2, minmax(0, auto) );
    gap: .5rem;
    align-items: center;
    justify-content: start;
  }
</style>