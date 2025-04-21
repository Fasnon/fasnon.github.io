<script setup lang="ts">
// import { ref } from 'vue'

// defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
  <div class="min-h-[calc(100vh-100px)] max-sm:min-h-[calc(100vh-56px)] flex flex-col pl-40 pt-8 pr-16 bg-muted-plum">
    <div class="flex flex-row">
      <div class="basis-3/5 pt-20">

        <div class="font-semibold text-4xl">Write-ups</div>
        <div class="pt-12  text-lg font-medium max-w-3xl">I am currently serving my national service as a Cyber Defence Operator in the Digital Intelligence Service, where I am gaining hands-on experience in the cybersecurity landscape. My training  has built upon my solid foundation in networking and basic  cybersecurity.<br /><br />In my free time, I pursue my passion for programming, often participating in Capture-the-Flag (CTF) competitions  to sharpen and test my technical skills.<br /><br />I am particularly drawn to solving complex problems—a skill that transcends domains, which has  guided me through my previous experiences.<br /><br />After completing my national service, I intend to pursue Computer Science in university</div>
        <div class="pt-14">
          <button class="bg-tame-green text-neutral-50 pl-4 pr-10 py-2 text-xl flex items-center gap-3 font-semibold">
            <img src="../../public/arrow-right-fill.svg" alt="Arrow icon" class="h-12 w-12">
            See my resume
          </button>

        </div>
      </div>
      <div class="min-w-40" />
    </div>
  </div>
</template>
