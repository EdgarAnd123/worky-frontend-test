<template>
  <router-link to="/">
    <Logo class="my-4" />
  </router-link>
</template>

<script>
  import LogoComponent from "@/components/logo.vue"

  export default {
    name: 'headerComponent',
    components: {
      'Logo': LogoComponent
    }
  };

</script>