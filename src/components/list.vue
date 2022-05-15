<template>
  <div :class="[gridType === 'grid' ? 'trendingGrid xs:trendingGrid-xs sm:trendingGrid-sm md:trendingGrid-md' : 'masonry xs:masonry-xs sm:masonry-sm md:masonry-md' ]">
    <giphy-card v-for="(gif, index) in gifs" :key="index"
                :gif="gif"
                class="mb-4"/>
  </div>
</template>

<script>
  import giphyCardComponent from "@/components/giphy-card.vue"

  export default {
    name: 'listComponent',
    components: {
      'giphy-card': giphyCardComponent
    },
    props: {
      gifs: {
        Object,
        required: true
      },
      gridType: String
    }
  }
</script>