<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'

const showAll = ref(false)

const cols = ref(4)
function updateCols() {
  if (window.innerWidth >= 1280) cols.value = 4
  else if (window.innerWidth >= 1024) cols.value = 3
  else if (window.innerWidth >= 640) cols.value = 2
  else cols.value = 1
}
onMounted(() => { updateCols(); window.addEventListener('resize', updateCols) })
onUnmounted(() => window.removeEventListener('resize', updateCols))

const visibleProjects = computed(() => showAll.value ? projects : projects.slice(0, cols.value))
</script>

<template>
  <section class="min-h-[calc(100vh-100px)] max-sm:min-h-[calc(100vh-56px)] pt-12 pb-16 bg-muted-peach">
    <h2 class="font-semibold text-4xl mb-12 pl-40 max-sm:px-6">Projects</h2>

    <TransitionGroup
      name="card"
      tag="div"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10 px-16 sm:px-32 lg:px-52 xl:px-40 max-sm:px-6"
    >
      <ProjectCard
        v-for="(project, index) in visibleProjects"
        :key="project.id"
        :project="project"
        :imageFirst="index % 2 === 0"
      />
    </TransitionGroup>

    <div v-if="projects.length > cols" class="mt-10 text-center">
      <button
        @click="showAll = !showAll"
        class="px-6 py-2 border border-mahogany text-mahogany font-medium hover:bg-mahogany hover:text-neutral-50 transition-colors duration-200 rounded"
      >
        {{ showAll ? 'Show less' : 'Show more' }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.card-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.card-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.card-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.card-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
