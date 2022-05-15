<template>
  <div class="gif__detail_container">
    <div class="gif">
      <h1>{{ gif.title }} </h1>
      <img :src="rendering" :alt="gif.title">
    </div>    
    <div class="gif__detail_info">
      <p> Name </p>
      <p> Socials </p>
    </div>
    <div class="gif__detail_actions">
      <h3> Favorite </h3>
      <h3> Share </h3>
      <h3> Embed </h3>
    </div>
    <div class="gif__detail_tags">
       <p>Tag 1</p>
       <p>Tag 2</p>
       <p>Tag 3</p>
       <p>Tag 4</p>
    </div>
  </div>
</template>

<script>
  import GiphyService from "@/services/GiphyService"

  export default {
      name: 'homeComponent',
      data(){
        return {
          gif: {},
          isLoading: false
        }
      },

      created() {
        this.loadGif();
      },
      
      methods: {
        loadGif() {
          this.isLoading = true;

          GiphyService.searchGifbyId(this.$route.params.id).then(
            (gif) => {
              this.gif = gif;
              console.log(this.gif);
              
              this.isLoading = false;
            },
            (error) => {
              this.isLoading = false;
              console.log(error);
            }
          )
        }
      },
      computed: {
        rendering() {
          return this.gif.images.original.url;
        }
      }
  }
</script>

<style lang="scss" scoped>
  .gif__detail_container {
    display: grid;
    grid-template-areas: 
      'info gif actions'
      '. tags tags';

    .gif__detail_info {
        grid-area: info;
    }

    .gif {
      grid-area: gif;
    }

    .gif__detail_actions {
      grid-area: actions;
    }
    
    .gif__detail_tags {
      grid-area: tags;
    }
  }
</style>