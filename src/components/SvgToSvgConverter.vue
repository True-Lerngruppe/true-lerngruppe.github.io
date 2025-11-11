<script setup lang="ts">
import { ref } from 'vue';
import ChonkyDwayne from './icons/chonky_dwayne.vue';

const selectedFile = ref<File | null>(null);
const showResult = ref(false);

function handleFileSelect(event: Event) {
  const fileInput = event.target as HTMLInputElement;
  const file = fileInput.files?.[0];
  const fileNameDisplay = document.getElementById('fileNameDisplay');
  if (!fileNameDisplay) return;

  if (file) {
    console.log('File selected: ', file.name);
    selectedFile.value = file;

    // Display the file name
    fileNameDisplay.textContent = file.name;
    fileNameDisplay.style.display = 'block';
  }
  else {
    console.log('No file selected');
    fileNameDisplay.textContent = '';
    fileNameDisplay.style.display = 'none';
  }
}

/**
 * Convert the selected SVG file
 */
function convertSvg() {
  // Get the file that was stored during file selection
  const file = selectedFile.value;

  if (!file) {
    alert('Please select an SVG file first');
    return;
  }

  if (!file.name.toLowerCase().endsWith('.svg')) {
    alert('Please select a SVG file');
    return;
  }

  showResult.value = true;
}
</script>

<template>
  <div class="container">
    <h1>SVG to SVG Converter</h1>
    <div class="upload-section">
      <input type="file" accept=".svg" id="inputFile" @change="handleFileSelect">
      <div id="fileNameDisplay" class="file-name-display"></div>
    </div>
    <button id="convertButton" class="convert-btn" aria-label="Convert SVG" @click="convertSvg">
      <span class="btn-text">Convert</span>
    </button>
    <div v-if="showResult" class="output-container">
      <ChonkyDwayne />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font: 16px Arial, sans-serif;
}

h1 {
  margin-bottom: 20px;
}

.upload-section {
  width: 100%;
  max-width: 350px;
  margin-bottom: 15px;
}

.file-name-display {
  margin-top: 10px;
  padding: 8px;
  background-color: #e8f4f8;
  border-radius: 4px;
  font-size: 14px;
  word-break: break-all;
}

.convert-btn {
  padding: 12px 30px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.convert-btn:hover {
  background-color: #357abd;
}

/* Input field styling */
input[type="file"] {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 16px;
  transition: all 0.2s ease;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

input[type="file"]:focus {
  border-color: #4a90e2;
  outline: none;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
}

.output-container {
  width: 100%;
  max-width: 500px;
  max-height: 400px;
  overflow: auto;
  margin-top: 30px;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.05);
  background-color: #fafafa;
}
</style>
