<template>
  <div class="header__container">
    <Logo />  
  </div>
</template>

<script>
  import LogoComponent from "@/components/logo.vue"

  export default {
    name: 'headerComponent',
    components: {
      'Logo': LogoComponent
    },
  };

</script>

<style lang="scss" scoped>
  .header__container {
    margin: 1rem 0;
  }
</style>