<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted-green text-mahogany">
    {{ label }}
  </span>
</template>
