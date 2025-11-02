<script setup lang="ts">
import WriteupInfocard from '../components/WriteupInfocard.vue';
// import { ref } from 'vue'

// defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
  <div class="min-h-[calc(100vh-100px)] max-sm:min-h-[calc(100vh-56px)] flex flex-col pl-40 pt-12 pr-16 bg-muted-plum">
    <div class="flex flex-row gap-16">
      <div class="basis-1/2">
        <div class="font-semibold text-4xl">Write-ups</div>
        <div class="pt-12 text-lg font-medium ">I love solving problems. <br /><br />I have been participating in CTF competitions since 2022 as one of the three members of TOP PROGRAMMER 2005 DATABASE MAESTRO.<br /><br /></div>
        <div class="flex flex-col">
          <a class="text-lg" href="/blog"> Here are some write-ups on my <u>blog</u></a>
          <a class="mt-16" href="https://top-programmer-2005-database-maestro.surge.sh/">
            <button class="bg-tp2dm-savannah pl-4 pr-6 py-2 text-lg flex items-center gap-3  text-neutral-950 w-80 font-light">
              <img src="../../public/giraffe_head.png" alt="TP2DM Logo" class="h-12 w-12">
              official TP2DM web page
            </button>
          </a>
          <a class="mt-8" href="https://ctftime.org/user/152999">
            <button class="bg-[#ff8981] pl-4 pr-6 py-2 text-lg flex items-center gap-4 text-neutral-950 w-80 font-light">
              <img src="../../public/CTFtime.png" alt="CTFtime Logo" class="h-12 w-12">
              CTFtime/Fasnon
            </button>
          </a>
        </div>
      </div>
      <div class="basis-1/2 flex flex-col">
        <p>Recent</p>
        <WriteupInfocard />
        <p>My Favourites</p>
        <WriteupInfocard />
        <p>Random</p>
        <WriteupInfocard />
      </div>
    </div>
  </div>
</template>
