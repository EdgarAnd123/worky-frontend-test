<template>
  <div>
    <search-element @searchedGifs="fetchSearchedGifs" />
    <div v-if="isLoading">
      <p> Loading... </p>
    </div>
    <div v-else>
      <div class="trending_header__container">
        <trending-icon />
        <h4 class="py-4"> Trending </h4>
      </div>
        <list-component :gifs="trendingGifs" :gridType="'grid'" />
        <!-- <div class="mb-4" v-for="(gif, index) in trendingGifs" :key="index">
          <giphy-card :gifUrl="gif.images" :gifHeight="150" :giphyCardClass="{ 'image__object_fit-contain': true }" />
        </div> -->

      <template v-if="searchedGifs.length">
        <h2 class="py-4"> {{ searchTerm }} </h2>
        <list-component :gifs="searchedGifs" :gridType="'masonry'" />
  
        <!-- <div class="masonry sm:masonry-sm md:masonry-md">
          <div class="mb-4" v-for="(gif, index) in searchedGifs" :key="index">
            <giphy-card :gifUrl="gif.images" :gifWidth="248" />
          </div>
        </div> -->
      </template>
    </div>    
  </div>
</template>

<script>
  import searchComponent from "@/components/search.vue"
  import listComponent from "@/components/list.vue"
  import TrendingIcon from "@/components/TrendingIcon.vue"

  import GiphyService from "@/services/GiphyService"

  export default {
    name: 'homeComponent',
    components: {
      'search-element': searchComponent,
      'list-component': listComponent,
      'trending-icon': TrendingIcon
    },

    data(){
      return {
        searchTerm: '',
        trendingGifs: [],
        searchedGifs: [],
        isLoading: false
      }
    },

    created() {
      this.loadTrendingGifs();
    },
    
    methods: {
      loadTrendingGifs() {
        this.isLoading = true;

        GiphyService.getTrendingGifs().then(
          (gifs) => {
            this.trendingGifs = gifs;
            this.isLoading = false;
          },
          (error) => {
            this.isLoading = false;
            console.log(error);
          }
        )
      },

      fetchSearchedGifs( { gifs, searchTerm }) {
        this.searchTerm = searchTerm;
        this.searchedGifs = gifs;
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