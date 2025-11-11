<script setup lang="ts">
import { onMounted } from 'vue';


function shuffleLinks()
{
  const bar = document.getElementById("nav-bar");
  if(!bar) return;

  for (let i = bar.children.length; i >= 0; i--) {
    const child = bar.children[Math.random() * i | 0];
    if(!child) continue;
    bar.appendChild(child);
  }
}

onMounted(() => {
  shuffleLinks();
});

</script>

<template>
  <!--
  Die "buttons" (eigentlich hyperlinks) nutzen wir zur navigation zu verschiedenen
  Unterseiten
  -->
  <nav id="nav-bar">
    <a href="index.html">Svg to svg converter</a>
    <a href="/">Patricks lustige idee</a>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
  background-color: #281D4E;
  border: 2px solid green;
  border-radius: 12px;
  padding: 14px 25px;
  margin: 10px;
  text-align: center;
  display: inline-block;
}

a:hover, a:active {
  background-color: #A020F0;
}
</style>
