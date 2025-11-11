<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const nav_id = ref('nav-bar');

const route = useRoute();

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function shuffleMenuItems() {
  const bar = document.getElementById(nav_id.value);
  if (!bar) return;

  for (let i = bar.children.length; i >= 0; i--) {
    const child = bar.children[Math.random() * i | 0];
    if (!child) continue;
    bar.appendChild(child);
  }
}

watch(() => route.path, () => {
  closeMenu();
  shuffleMenuItems();
});

onMounted(() => {
  shuffleMenuItems();
});

</script>

<template>
  <!-- Burger Button -->
  <button class="burger-button" @click="toggleMenu" aria-label="Toggle menu">
    <span :class="{ open: isMenuOpen }"></span>
    <span :class="{ open: isMenuOpen }"></span>
    <span :class="{ open: isMenuOpen }"></span>
  </button>

  <!-- Overlay -->
  <div class="overlay" :class="{ active: isMenuOpen }" @click="closeMenu"></div>

  <!-- Slide-in Menu -->
  <nav :id="nav_id" class="slide-menu" :class="{ open: isMenuOpen }">
    <slot></slot>
  </nav>
</template>

<style scoped>
/* Burger Button */
.burger-button {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1001;
  background: #281D4E;
  border: 2px solid green;
  border-radius: 8px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 10px;
  transition: background-color 0.3s ease;
}

.burger-button:hover {
  background-color: #A020F0;
}

.burger-button span {
  display: block;
  width: 28px;
  height: 3px;
  background-color: green;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Burger Animation */
.burger-button span.open:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.burger-button span.open:nth-child(2) {
  opacity: 0;
}

.burger-button span.open:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.overlay.active {
  opacity: 1;
  pointer-events: all;
}

/* Slide-in Menu */
.slide-menu {
  position: fixed;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100%;
  background-color: #1a1336;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  transition: left 0.3s ease;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
}

.slide-menu.open {
  left: 0;
}

.slide-menu :deep(a) {
  text-decoration: none;
  background-color: #281D4E;
  border: 2px solid green;
  border-radius: 12px;
  padding: 14px 25px;
  margin: 10px 20px;
  text-align: center;
  display: block;
  color: white;
  transition: background-color 0.3s ease;
}

.slide-menu :deep(a:hover),
.slide-menu :deep(a:active) {
  background-color: #A020F0;
}
</style>
