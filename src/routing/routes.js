import giphyDetailComponent from "@/pages/gif-detail.vue"
import homeComponent from "@/pages/home.vue"


export default [
    {
      name: 'gifHome', path: "/", component: homeComponent
    },
    {
      name: 'gifDetail', path: "/gif-detail/:id", component: giphyDetailComponent
    },
    {
      path: '/*', redirect: '/'
    }
]
