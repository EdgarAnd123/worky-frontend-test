<template>
  <input  v-model="searchInput" @input="onInputHandler" id="inline-full-name" type="text"  placeholder="Search all the GIFS"
          class="bg-white appearance-none border-2 w-full py-4 px-4 text-gray-600 leading-tight focus:outline-none focus:border-purple-500">
</template>

<script>
  import GiphyService from "@/services/GiphyService"

  export default {
    name: 'searchComponent',
    data() {
      return {
        searchInput: '',
        timeout: null
      }
    },
    methods: {
      searchForGifs() {
        // this.isLoading = true;

        GiphyService.searchForGifs(this.searchInput).then(
          (gifs) => {
            this.isLoading = false;

            this.setSearchInLocalStorage();
            this.$emit('searchedGifs', { gifs, searchTerm: this.searchInput });
            
          },
          (error) => {
            this.isLoading = false;
            console.log(error);
          }
        )
      },

      setSearchInLocalStorage() {
        let searchesPerformed = [];

        if(!localStorage.getItem('previously-searched')?.search(this.searchInput)){
          searchesPerformed.push(this.searchInput);
          localStorage.setItem('previously-searched', JSON.stringify(searchesPerformed) );
        }
      },

      onInputHandler() {
        clearTimeout(this.timeout);

        setTimeout(() => {
          this.searchForGifs();
        }, 1500);
      }
    }
  }
</script>

<style>

</style>