<script setup lang="ts">
import { RouterLink } from 'vue-router';
import BurgerMenu from './components/BurgerMenu.vue'
</script>

<template>
  <BurgerMenu>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/svg_converter">Svg to svg converter</RouterLink>
    <RouterLink to="/impressum">Impressum</RouterLink>
    <RouterLink to="/funny_something">Patricks lustige idee</RouterLink>
    <RouterLink to="/trippy">Go for a trip</RouterLink>
    <RouterLink to="/escape_room">Escape Room</RouterLink>
  </BurgerMenu>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
