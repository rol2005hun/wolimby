<template>
  <main class="index">
    <div class="container">
      <p class="how-to">Are you a dev? Let's see how fast can you write short code snippets! The game will start when you hit the first key! 
      If you want to stop the game, click the pause button! Where you see space, hit space button, nothing else!</p>
      <div class="container-code">
        <client-only>
          <span v-for="(char, index) in formattedSnippet"
            :key="index" :class="{ correct: char === typedText[index], incorrect: char !== typedText[index], br: char === ' ', neutral: typedText.length <= index }">
          {{ char }}</span>
        </client-only>
      </div>
      <div class="container-stats">
        <button class="stop-btn" @click="stop">
          <i class="fas fa-pause"></i>
        </button>
        <div class="stat">
          <span class="label">CPM:</span>
          <span class="value">{{ cpm }}</span>
        </div>
        <div class="stat">
          <span class="label">Time:</span>
          <span class="value">{{ formatTime(time) }}</span>
        </div>
        <button class="restart-btn" @click="restart">
          <i class="fas fa-redo"></i>
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect, onMounted } from 'vue';
import '@/assets/scss/typeracer.scss';
import codesnippets from '@/assets/js/codesnippets.json';

const typedText = ref('');
const time = ref(0);
const timer = ref();
const currentSnippet = ref('');
const counter = ref(0);
const formattedSnippet = computed(() => currentSnippet.value.split(''));

const cpm = computed(() => {
  const wordCount = typedText.value.trim().split(/\s+/).length;
  const minutes = time.value / 60;
  return Math.round(wordCount / minutes);
});

function startTimer() {
  timer.value = setInterval(() => {
    time.value++;
  }, 1000);
}

function stopTimer(option: string) {
  if(option == 'with') {
    clearInterval(timer.value);
    timer.value = null;
  } else if(option == 'without') {
    clearInterval(timer.value);
  }
}

function stop() {
  stopTimer('without');
}

function restart() {
  generateNewSnippet();
  time.value = 0;
  stopTimer('with');
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function generateNewSnippet() {
  let newSnippet = currentSnippet.value;
  while (newSnippet === currentSnippet.value) {
    newSnippet = codesnippets[Math.floor(Math.random() * codesnippets.length)].code;
  }
  currentSnippet.value = newSnippet.replace(/\n/g, '');
  typedText.value = '';
}

watchEffect(() => {
  if(typedText.value === currentSnippet.value) {
    generateNewSnippet();
    counter.value++;
  }

  if(counter.value == 5) stop();

  if(typedText.value.length > currentSnippet.value.length) typedText.value = typedText.value.slice(0, -1);
});

onMounted(() => {
  generateNewSnippet();
});

if(process.client) {
  window.addEventListener('keydown', (event) => {
    if(!timer.value) {
      startTimer();
    }

    if(event.key === ' ') {
      typedText.value += ' ';
      return;
    }

    if(event.key === 'Backspace') {
      typedText.value = typedText.value.slice(0, -1);
      return;
    }

    if(event.key.length === 1) {
      typedText.value += event.key;
    }
  });
}
</script>
