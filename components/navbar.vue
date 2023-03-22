<template>
  <header>
    <nav class="nav">
      <NuxtLink to="/" class="nav-branding">rol2005hun</NuxtLink>
      <ul class="nav-menu">
        <li class="nav-item" @click="toggleMenu(1)">
          <NuxtLink to="about" class="nav-link">about me</NuxtLink>
        </li>
        <li class="nav-item" @click="toggleMenu(1)">
          <NuxtLink to="projects" class="nav-link">projects</NuxtLink>
        </li>
        <li class="nav-item" @click="toggleMenu(1)">
          <NuxtLink to="contacts" class="nav-link">contacts</NuxtLink>
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
  