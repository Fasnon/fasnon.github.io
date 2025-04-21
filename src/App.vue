<script setup lang="ts">
import AboutMe from './components/AboutMe.vue'
import NavBar from './components/NavBar.vue'
import Experiences from './components/Experiences.vue'
import Projects from './components/Projects.vue'
import Writeups from './components/Writeups.vue'
import Contact from './components/Contact.vue'
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
    <Contact id="contact" class="scroll-mt-28 pb-28" />

  </div>
</template>

