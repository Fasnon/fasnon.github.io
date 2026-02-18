<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'

const showAll = ref(false)
const INITIAL_COUNT = 4
const visibleProjects = computed(() => showAll.value ? projects : projects.slice(0, INITIAL_COUNT))
</script>

<template>
  <section class="min-h-[calc(100vh-100px)] max-sm:min-h-[calc(100vh-56px)] px-8 sm:px-16 pt-12 pb-16 bg-muted-peach">
    <h2 class="font-semibold text-4xl mb-12">Projects</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        v-for="(project, index) in visibleProjects"
        :key="project.id"
        :project="project"
        :imageFirst="index % 2 === 0"
      />
    </div>

    <div v-if="projects.length > INITIAL_COUNT" class="mt-10 text-center">
      <button
        @click="showAll = !showAll"
        class="px-6 py-2 border border-mahogany text-mahogany font-medium hover:bg-mahogany hover:text-neutral-50 transition-colors duration-200 rounded"
      >
        {{ showAll ? 'Show less' : 'Show more' }}
      </button>
    </div>
  </section>
</template>
