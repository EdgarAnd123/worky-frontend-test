import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routing/routes'

import './main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history',
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
