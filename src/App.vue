<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="h-full flex flex-col">
    <NavBar class="bg-gradient-to-r from-tame-green to-right-green w-full fixed"/>
    <HelloWorld class="mt-28"/>
  </div>
</template>

