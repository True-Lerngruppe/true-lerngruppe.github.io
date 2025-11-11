<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Navigation from './components/Navigation.vue'
import ChonkyDwayne from './components/icons/chonky_dwayne.vue'
import FonkyDwayne from './components/icons/fonky_dwayne.vue'


</script>

<template>
  <header>
  <Navigation />
  </header>

  <main>
    <!-- Simple svg images with chonky AND fonky dwayne :) -->
    <!--FonkyDwayne/-->
    <!--ChonkyDwayne/-->

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
