<script setup lang="ts">

function thorstenMediumClick() {
  const audio = new Audio('/audio/jamooooin.wav');
  audio.play();
}

</script>

<template>
  <div class="container">
    <h1>Steakholder</h1>
    <ul class="steak-list">
      <li class="steak-item">
        <img src="/images/steakholder2.jpeg" alt="Steak Holder 2" />
        <p class="steak-text">Sir Arthur Loin</p>
      </li>
      <li class="steak-item">
        <img src="/images/steakholder3.jpeg" alt="Steak Holder 3" />
        <p class="steak-text">Chuck Ribeye</p>
      </li>
      <li class="steak-item">
        <img src="/images/steakholder4.jpeg" alt="Steak Holder 4" />
        <p class="steak-text">Madam T-Bone</p>
      </li>
      <li class="steak-item">
        <img src="/images/steakholder5.jpeg" alt="Steak Holder 5" />
        <p class="steak-text">Thorsten (medium)</p>
      </li>
      <li class="steak-item clickable" @click="thorstenMediumClick">
        <img src="/images/steakholder1.jpeg" alt="Steak Holder" />
        <p class="steak-text">Thorsten (well-done)</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 40px;
}

.steak-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 800px;
}

.steak-item {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  padding: 15px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.05);
  transition: background-color 0.3s ease;
}

.steak-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.clickable {
  cursor: pointer;
}

img {
  max-width: 200px;
  height: auto;
  border-radius: 12px;
  flex-shrink: 0;
}

.steak-text {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
}
</style>
