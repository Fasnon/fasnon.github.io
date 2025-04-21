<script setup lang="ts">
// import { ref } from 'vue'

// defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
  <div class="min-h-[calc(100vh-100px)] max-sm:min-h-[calc(100vh-56px)] flex flex-col pl-40 pt-8 pr-16 bg-muted-green">
    <div class="flex flex-row pt-8">

        <div class="font-semibold text-4xl">My Experiences</div>
        <div class="pt-14">
          <button class="bg-tame-green text-neutral-50 pl-4 pr-10 py-2 text-xl flex items-center gap-3 font-semibold">
            <img src="../../public/arrow-right-fill.svg" alt="Arrow icon" class="h-12 w-12">
            See my resume
          </button>

        </div>
    </div>
  </div>
</template>
