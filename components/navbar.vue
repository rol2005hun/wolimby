<template>
  <header>
    <nav class="nav">
      <NuxtLink to="/" class="nav-branding">Games</NuxtLink>
      <ul class="nav-menu">
        <li class="nav-item" @click="toggleMenu(1)">
          <a href="https://account.wolimby.hu" class="nav-link">Bejelentkezés</a>
        </li>
      </ul>
      <div class="nav-hamburger" @click="toggleMenu(0)">
        <span class="nav-bar"></span>
        <span class="nav-bar"></span>
        <span class="nav-bar"></span>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import '/assets/scss/navbar.scss';

function toggleMenu(option: number) {
  const body = document.querySelector('body');
  const hamburger = document.querySelector('.nav-hamburger');
  const menu = document.querySelector('.nav-menu');

  if(!option) {
    if(!hamburger?.classList.contains('active') || !menu?.classList.contains('active')) {
      body!.style.overflowX = 'hidden';
      setTimeout(() => {
        body!.style.removeProperty('overflow-x'); // elegánsabbá kell tenni (scss-ben is)
      }, 200)
    }
    hamburger?.classList.toggle('active');
    menu?.classList.toggle('active');
  } else {
    hamburger?.classList.remove('active');
    menu?.classList.remove('active');
  }
}
</script>
  