<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import AboutMe from './views/AboutMe.vue'
import Experiences from './views/Experiences.vue'
import Projects from './views/Projects.vue'
import Writeups from './views/Writeups.vue'
import Contact from './views/Contact.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>

<template>
  <div class="h-full flex flex-col">
    <NavBar />
    <AboutMe id="about" class="pt-28 mb-28" />
    <Experiences id="experiences" class="scroll-mt-28 pb-28" />
    <Projects id="projects" class="scroll-mt-28 pb-28" />
    <Writeups id="writeups" class="scroll-mt-28 pb-28" />
    <Contact id="contact" class="scroll-mt-24 pb-28" />
  </div>
</template>

