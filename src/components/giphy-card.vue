<template>
    <div class="giphy__container">
      <router-link :to="{ name: 'gifDetail', params: { id: gif.id} }">
        <img  :src="rendering.url" 
              :style="giphyDimensions">
        <font-awesome-icon class="giphy__favorites" icon="fa-solid fa-heart" @click="saveToFavorites"/>
        <div v-if="author" class="giphy__overlay_info">
          <img :src="author.avatar_url" :alt="author.display_name">
          <p class="giphy__user_name"> {{ gif.user.display_name }} </p>
        </div>
        <div v-else>
          <p class="giphy__overlay_info giphy__title"> {{ gif.title }} </p>
        </div>
      </router-link>
    </div>
</template>

<script>
  export default {
    name: 'giphyCardComponent',
    props: {
      gif: { Object, required: true },
      gifWidth: Number,
      gifHeight: Number
    },

    created() {
      console.log(this.gif);
    },

    computed: {
      giphyDimensions() {
        return {
          '--gifWidth': this.gifWidth ? `${this.gifWidth}px` : '100%',
          '--gifHeight': this.gifHeight ? `${this.gifHeight}px` : '100%'
        }
      },
      rendering() {
        return this.gif.images.fixed_width_small;
      },
      author() {
        return this.gif.user;
      }
    },

    methods: {
      saveToFavorites() {
        const myFavorites = localStorage.getItem('my-favorites');
        const favorite = { 
          title: this.gif.title,
          gif: this.gif.images.fixed_width_small
        }

        if(myFavorites) {
          const favorites = JSON.parse(myFavorites);

          favorites.push(favorite);
          localStorage.setItem('my-favorites', JSON.stringify(favorites));

          return null;
        }
        localStorage.setItem('my-favorites', JSON.stringify( [favorite] ));
      }
    }
  }
</script>

<style lang="scss" scoped>
  .giphy__container {
    cursor: pointer;
    position: relative;
    height: 100%;
    width: 100%;

    img {
      width: var(--gifWidth);
      height: var(--gifHeight);
      border-radius: .4rem;
      // object-fit: contain;
    }

    .giphy__overlay_info {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      display: grid;
      grid-template-columns: max-content minmax(0, max-content);;
      align-items: center;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0),
        rgba(0, 0, 0, 0.8)
      );
      gap: .5rem;
      opacity: 0;
      padding: .5rem;
      transition: opacity ease-out .3s;

      img {
        object-fit: cover;
        width: 2rem;
        height: 2rem;
      }

      .giphy__user_name {
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        white-space: nowrap;
      }
    }

    .giphy__favorites {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 1.2rem;
      padding: .5rem;
      opacity: 0;
  
      filter: drop-shadow(0 0 1px rgba(59, 59, 59, 0.4));
      
      &:hover {
        animation-name: example;
        animation-duration: .4s;
        animation-iteration-count: infinite;        
        filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0));
        
        > path {
          fill: rgb(228, 80, 80);
        }
      }

      @keyframes example {
        from {font-size: 1.2rem;}
        to {font-size: 1.3rem;}
      }
    }

    .giphy__title {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      opacity: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      white-space: nowrap;
    }

    &:hover {
      .giphy__overlay_info {
        opacity: 1;
      }

      .giphy__favorites {
        opacity: 1;
      }

      .giphy__title {
        opacity: 1;
      }
    }
  }
</style>