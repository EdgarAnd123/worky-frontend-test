<template>
  <input  v-model="searchInput" @input="onInputHandler" id="inline-full-name" type="text"  placeholder="Search all the GIFS"
          class="bg-white appearance-none border-2 w-full py-4 px-4 text-gray-600 leading-tight focus:outline-none focus:border-purple-500">
</template>

<script>
  export default {
    name: 'searchComponent',
    data() {
      return {
        searchInput: '',
        timeOut: null
      }
    },
    
    methods: {
      searchForGifs() {
        this.$root.$store.dispatch("fetchGifs", this.searchInput);
        
        this.$emit('searchedGifs', this.searchInput);
        this.saveSearch();
      },

      saveSearch() {
        const searchesPerformed = localStorage.getItem('my-searches');

        if(searchesPerformed) {
          const searches = JSON.parse(searchesPerformed);

          searches.push(this.searchInput);
          localStorage.setItem('my-searches', JSON.stringify(searches) );

          return null;
        }

        localStorage.setItem('my-searches', JSON.stringify([this.searchInput]) );
      },

      onInputHandler() {
        clearTimeout(this.timeOut);

        this.timeOut = setTimeout(this.searchForGifs, 500);
      }
    }
  }
</script>

<style>

</style>