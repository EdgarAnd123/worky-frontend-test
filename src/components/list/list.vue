<template>
  <div :class="[gridType === 'grid' ? 'grid grid-cols-4 gap-4' : 'masonry sm:masonry-sm md:masonry-md' ]">
    <giphy-card v-for="(gif, index) in gifs" :key="index"
                :gifUrl="gif.images" 
                :gifWidth="gridType  === 'grid' ? 238 : null" 
                :gifHeight="gridType  === 'grid' ? 150 : null"
                class="mb-4"/>
  </div>
</template>

<script>
  import giphyCardComponent from "@/components/giphy-card/giphy-card.vue"

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