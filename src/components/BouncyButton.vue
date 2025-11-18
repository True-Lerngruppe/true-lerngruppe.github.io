<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'


const crazyCount = ref(69);

const count = ref(0);
const posX = ref(0);
const posY = ref(0);
const velX = ref(2);
const velY = ref(2);
const buttonElement = ref<HTMLButtonElement | null>(null);

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

const buttonLabel = computed(() => {
  if (count.value < 42) return 'Counter';
  if (count.value < 69) return 'Cunter';
  return 'Bouncer';
})

const isExploded = computed(() => count.value >= 80);

watch(count, (newCount) => {
  // Capture button position when animation starts
  if (newCount === crazyCount.value && buttonElement.value) {
    const rect = buttonElement.value.getBoundingClientRect();
    posX.value = rect.left;
    posY.value = rect.top;
  }
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
  <div class="explosion-container" :class="{ 'exploded': isExploded }">
    <div class="explosion" v-if="isExploded" :style="{
      left: `${posX}px`,
      top: `${posY}px`
    }"></div>
  </div>
  <span v-if="!isExploded">{{ count }}</span>
  <button v-if="!isExploded" id="funky-button" ref="buttonElement" :class="{ 'funky-button': count >= crazyCount }" :style="{
    '--animation-duration': animationDuration,
    '--scale-factor': buttonScale,
    transform: `scale(${buttonScale})`,
    position: count >= crazyCount ? 'fixed' : 'relative',
    left: count >= crazyCount ? `${posX}px` : 'auto',
    top: count >= crazyCount ? `${posY}px` : 'auto',
    zIndex: count >= crazyCount ? 900  : 'auto',
    height: 150,
    width: 100
  }" @click="count++">
    {{ buttonLabel }}
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

@keyframes explode {
  0% {
    width: 100px;
    height: 100px;
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(255, 69, 0, 0.9), 0 0 30px 0 rgba(255, 140, 0, 0.9), 0 0 60px 0 rgba(255, 200, 0, 0.7);
  }
  25% {
    width: 250px;
    height: 250px;
    opacity: 0.95;
    box-shadow: 0 0 0 20px rgba(255, 69, 0, 0.6), 0 0 80px 15px rgba(255, 140, 0, 0.8), 0 0 120px 25px rgba(255, 200, 0, 0.5);
  }
  50% {
    width: 400px;
    height: 400px;
    opacity: 0.85;
    box-shadow: 0 0 0 40px rgba(255, 69, 0, 0.4), 0 0 120px 30px rgba(255, 140, 0, 0.6), 0 0 180px 50px rgba(255, 200, 0, 0.3);
  }
  75% {
    width: 600px;
    height: 600px;
    opacity: 0.4;
    box-shadow: 0 0 0 60px rgba(255, 69, 0, 0.2), 0 0 150px 50px rgba(255, 140, 0, 0.3), 0 0 220px 80px rgba(255, 200, 0, 0.1);
  }
  100% {
    width: 800px;
    height: 800px;
    opacity: 0;
    box-shadow: 0 0 0 80px rgba(255, 69, 0, 0), 0 0 200px 100px rgba(255, 140, 0, 0), 0 0 300px 150px rgba(255, 200, 0, 0);
  }
}

@keyframes fieryGlow {
  0% {
    background: linear-gradient(135deg, rgba(255, 0, 0, 0) 0%, rgba(255, 50, 0, 0) 100%);
  }
  15% {
    background: linear-gradient(135deg, rgba(255, 50, 0, 0.5) 0%, rgba(255, 100, 0, 0.4) 100%);
  }
  35% {
    background: linear-gradient(135deg, rgba(255, 69, 0, 0.8) 0%, rgba(255, 140, 0, 0.7) 50%, rgba(255, 200, 0, 0.5) 100%);
  }
  65% {
    background: linear-gradient(135deg, rgba(200, 50, 0, 0.95) 0%, rgba(255, 100, 0, 0.9) 50%, rgba(255, 150, 0, 0.8) 100%);
  }
  100% {
    background: linear-gradient(135deg, rgba(139, 35, 0, 0.95) 0%, rgba(200, 50, 0, 0.9) 50%, rgba(255, 100, 0, 0.8) 100%);
  }
}

.explosion-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
}

.explosion {
  position: fixed;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 220, 0, 0.9) 0%, rgba(255, 140, 0, 0.7) 25%, rgba(255, 69, 0, 0.5) 50%, rgba(255, 0, 0, 0.3) 100%);
  animation: explode 2s ease-out forwards;
  z-index: 1001;
  pointer-events: none;
}
</style>
