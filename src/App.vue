<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import ChonkyDwayne from './components/icons/chonky_dwayne.vue'
import FonkyDwayne from './components/icons/fonky_dwayne.vue'
import BurgerMenu from './components/BurgerMenu.vue'

</script>

<template>
  <BurgerMenu>
    <RouterLink to="/svg_converter">Svg to svg converter</RouterLink>
    <RouterLink to="/">Patricks lustige idee</RouterLink>
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
