<template>
  <div>
    <Loading :show="isLoading" />
    <div v-if="gif.images" >
      <div class="gif__detail_container">
        <div v-if="author" class="gif__detail_info animate__animated animate__bounceInLeft">
          <div class="gif__detail_info_author">
            <img :src="author.avatar_url" :alt="author.display_name">
            <div>
              <p class="font-extrabold"> {{ author.username }} </p>
              <p> @ {{ author.username }} </p>
            </div>
          </div>
          <p class="gif__detail_info_description"> {{ author.description }} </p>
          <div class="socials">
            <p>Follow on: </p>
              <a
                v-if="author.facebook_url"
                :href="author.facebook_url"
                target="_blank"
                class="fb">
              </a>
              <a
                v-if="author.instagram_url"
                :href="author.instagram_url"
                target="_blank"
                class="ig">
              </a>
              <a
                v-if="author.twitter_url"
                :href="author.twitter_url"
                target="_blank"
                class="tw">
              </a>
          </div>
        </div>
        <div class="gif animate__animated animate__bounceInDown">
          <h1 class="gif__title">{{ gif.title }} </h1>
          <img  class="gif__image" :src="rendering" :alt="gif.title">
        </div>    
        <div class="gif__detail_actions animate__animated animate__bounceInRight">
          <h3> <font-awesome-icon class="giphy__favorites" icon="fa-solid fa-heart"/> Favorite </h3>
          <h3> <font-awesome-icon class="giphy__favorites" icon="fa-solid fa-paper-plane"/> Share </h3>
          <h3> <font-awesome-icon class="giphy__favorites" icon="fa-solid fa-code"/> Embed </h3>
        </div>
        <div class="tags__container animate__animated animate__fadeInUp">
          <p class="tag">#omg</p>
          <p class="tag">#best</p>
          <p class="tag">#dessert</p>
          <p class="tag">#bomb</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import loadingComponent from "@/components/loading.vue"

  export default {
      name: 'homeComponent',
      components: {
        'Loading': loadingComponent
      },

      beforeRouteEnter(to, from, next) {
        next( (vue) => { 
            vue.$root.$store.dispatch("fetchGif", vue.$route.params.id);
        })
      },

      beforeRouteLeave(to, from, next) {
        this.$root.$store.dispatch("resetGifs");
        next();
      },

      computed: {
        gif() {
          return this.$root.$store.getters.getGif;
        },
        rendering() {
          return this.gif.images.original.url;
        },
        author() {
          return this.gif.user;
        },
        isLoading() {
          return this.$root.$store.getters.getLoading;
        }
      }
  }
</script>

<style lang="scss" scoped>
  .gif__detail_container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        'info'
        'actions'
        'gif'
        'tags';
    gap: 1rem;
    justify-content: center;

    .gif__detail_info {
        grid-area: info;
        display: grid;
        grid-auto-rows: min-content;
        justify-content: center;
        gap: 1rem;

        &_author {
          display: grid;
          grid-template-columns: 50px max-content;
          grid-auto-rows: 50px;
          gap: .5rem;

          img {
            width: 100%;
            height: 100%
          }
        }

        &_description {
          font-size: .8rem;
          width: 100%;

          word-break: break-all;
        }

        .socials {
          a {
            display: block;
            width: 2.4rem;
            height: 2.4rem;
            background-size: contain !important;
          }

          .fb {
            background: url('../assets/facebook@3x.png') no-repeat center center;
          }

          .ig {
            background: url('../assets/instagram@3x.png') no-repeat center center;
          }

          .tw {
            background: url('../assets/twitter@3x.png') no-repeat center center;
          }
        }

      @media only screen and (min-width: 768px) {
        justify-content: start;
        padding: 1.5rem 0;
      }
    }

    .gif {
      grid-area: gif;
      display: grid;
      justify-content: center;

      .gif__title {
        color: #a6a6a6;
      }

      @media only screen and (min-width: 768px) {
        justify-content: start;
      }

      @media only screen and (min-width: 1024px) {
        justify-content: center;
      }
    }

    .gif__detail_actions {
      grid-area: actions;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: min-content;
      text-align: center;
      font-weight: bold;
      gap: 1rem;

      @media only screen and (min-width: 768px) {
        grid-auto-rows: min-content;
        text-align: start;
        padding: 1.5rem 0;
      }
    }
    
    .tags__container {
      grid-area: tags;
      display: flex;
      justify-content: center;

      .tag {
        display: inline-block;
        background-color: rgb(46, 46, 46);
        border-radius: 20px;
        font-style: italic;
        line-height: 38px;
        margin: 0 8px 0 0;
        padding: 0 16px;
        height: 40px;
        overflow: visible;        
      }

      @media only screen and (min-width: 768px) {
        justify-content: start;
      }

      @media only screen and (min-width: 1024px) {
        justify-content: center;
      }
    }

    @media only screen and (min-width: 768px) {
      grid-template-columns: max-content 100px;
      grid-template-areas:
        'info info'
        'gif actions'
        'tags tags';
      justify-content: center;
    }

    @media only screen and (min-width: 1024px) {
      grid-template-columns: 180px 1fr 125px;
      grid-template-areas:
        'info gif actions'
        '. tags .';
    }
  }
</style>