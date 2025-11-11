<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'


const crazyCount = ref(1);

const count = ref(0);
const posX = ref(0);
const posY = ref(0);
const velX = ref(2);
const velY = ref(2);


const buttonHeight = ref(100);
const buttonWidth = ref(150);


const animationDuration = computed(() => {
  if (count.value < crazyCount.value) return '0.5s';

  const speedFactor = Math.max(0.05, 0.5 - (count.value - crazyCount.value) * 0.02);
  return `${speedFactor}s`;
})

const currentVelocity = computed(() => {
  if (count.value < crazyCount.value) return 2;

  return 2 + (count.value - crazyCount.value) * 1.5;
})

const buttonScale = computed(() => {
  if (count.value < crazyCount.value) return 1;

  const shrinkFactor = Math.max(0.01, 1 - (count.value - crazyCount.value) * 0.02);
  return shrinkFactor;
})

onMounted(() => {
  // Start bouncing animation when component mounts
  const animate = () => {
    if (count.value >= crazyCount.value) {

      posX.value += velX.value * (currentVelocity.value / 2)
      posY.value += velY.value * (currentVelocity.value / 2)

      const maxBounds = {
        x: window.innerWidth - buttonWidth.value,
        y: window.innerHeight - buttonHeight.value
      };
      const minBounds = {
        x: 0,
        y: 0
      };

      // Bounce off edges
      if (posX.value < minBounds.x || posX.value > maxBounds.x) {
        velX.value *= -1;

        if (posX.value <= minBounds.x) {
          posX.value = minBounds.x;
        } else {
          posX.value = maxBounds.x;
        }
      }
      if (posY.value < minBounds.y || posY.value > maxBounds.y) {
        velY.value *= -1;

        if (posY.value <= minBounds.y) {
          posY.value = minBounds.y;
        } else {
          posY.value = maxBounds.y;
        }
      }
    }
    requestAnimationFrame(animate)
  }
  animate()
})
</script>

<template>
  {{ count }}
  <button id="funky-button" :class="{ 'funky-button': count >= crazyCount }" :style="{
    '--animation-duration': animationDuration,
    '--scale-factor': buttonScale,
    transform: `scale(${buttonScale})`,
    position: count >= crazyCount ? 'fixed' : 'relative',
    left: count >= crazyCount ? `${posX}px` : 'auto',
    top: count >= crazyCount ? `${posY}px` : 'auto',
    zIndex: count >= crazyCount ? 9999 : 'auto',
    height: 150,
    width: 100
  }" @click="count++">
    Count
  </button>
</template>

<style scoped>
button {
  transition: all 0.3s ease;
  position: relative;
}

.funky-button {
  animation: funkyDance v-bind(animationDuration) infinite;
}

@keyframes funkyDance {
  0% {
    transform: rotate(0deg);
  }

  5% {
    transform: rotate(18deg);
  }

  10% {
    transform: rotate(36deg);
  }

  15% {
    transform: rotate(54deg);
  }

  20% {
    transform: rotate(72deg);
  }

  25% {
    transform: rotate(90deg);
  }

  30% {
    transform: rotate(108deg);
  }

  35% {
    transform: rotate(126deg);
  }

  40% {
    transform: rotate(144deg);
  }

  45% {
    transform: rotate(162deg);
  }

  50% {
    transform: rotate(180deg);
  }

  55% {
    transform: rotate(198deg);
  }

  60% {
    transform: rotate(216deg);
  }

  65% {
    transform: rotate(234deg);
  }

  70% {
    transform: rotate(252deg);
  }

  75% {
    transform: rotate(270deg);
  }

  80% {
    transform: rotate(288deg);
  }

  85% {
    transform: rotate(306deg);
  }

  90% {
    transform: rotate(324deg);
  }

  95% {
    transform: rotate(342deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
