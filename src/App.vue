<script lang="ts">
import SideNavigationBar from './components/SideNavigationBar.vue';

export default {
  components: {
    SideNavigationBar
  }
}
</script>

<template>
  <div class="d-flex h-100">
      <SideNavigationBar class="col h-100 position-fixed"/>
      <RouterView/>
  </div>
</template>

<style>
body{
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  display: block;
  padding: 0 !important;
  margin: 0 !important;
  position: relative;
  max-width: 100%;
}
</style>
