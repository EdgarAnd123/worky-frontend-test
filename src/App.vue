<template>
  <div id="app">
    <header-component />
		<router-view ></router-view>
  </div>
</template>

<script>
  import headerComponent from "./layout/header.vue"
  import homeComponent from "./pages/home.vue"

  export default {
    name: 'App',
    components: {
      'header-component': headerComponent,
      'home-component': homeComponent
    }
  }
</script>