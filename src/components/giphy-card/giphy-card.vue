<template>
  <img  :src="rendition.url" 
        :style="giphyDimensions" 
        @mouseover="startGif" 
        @mouseleave="stopGif">
</template>

<script>
  export default {
    name: 'giphyCardComponent',
    props: {
      gifUrl: { Object, required: true },
      gifWidth: Number,
      gifHeight: Number
    },

    data() {
      return {
        gif: {
          isPlaying: false,
          animation: '',
          placeholder: ''
        }
      }
    },

    created() {
      this.gif.animation = this.gifUrl.fixed_width_small;
    },

    computed: {
      giphyDimensions() {
        return {
          '--gifWidth': this.gifWidth ? `${this.gifWidth}px` : '100%',
          '--gifHeight': this.gifHeight ? `${this.gifHeight}px` : '100%'
        }
      },
      rendition() {
        return this.gifUrl.fixed_width_small;
      },
    },

    methods: {
      startGif() {        
        
      },

      stopGif() {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  img {
    width: var(--gifWidth);
    height: var(--gifHeight);
    border-radius: .4rem;
    cursor: pointer;
  }
</style>