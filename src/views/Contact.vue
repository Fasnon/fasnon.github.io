<script setup lang="ts">
// import { ref } from 'vue'

// defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
  <div class="min-h-[calc(100vh-100px)] max-sm:min-h-[calc(100vh-56px)] flex flex-col pl-40 pt-10 pr-16 bg-mahogany w-full">
    
    <div class="font-semibold text-4xl text-neutral-50 pt-12">Contact</div>
    
    <div class="pt-12  text-lg font-medium max-w-3xl text-neutral-50">
            Feel free to reach out!
        </div>


    <div class="flex flex-col pl-16 pt-12 w-[440px]">

        <div class="pt-8 w-full">
            <a href="mailto:davetankx@gmail.com">
                <button class="w-full bg-tame-green text-neutral-50 pl-4 py-2 text-lg flex items-center gap-3 ">
                    <img src="../../public/email.svg" alt="Arrow icon" class="h-12 w-12 mr-4">
                    <p class="text-nowrap text-neutral-800 font-light">davetankx@gmail.com</p>
                </button>
            </a>
        </div>
        <div class="pt-8 w-full">
            <a href="https://www.linkedin.com/in/tan-kai-xun-dave/">
                <button class="w-full bg-tame-green text-neutral-50 pl-4  py-2 text-lg flex items-center gap-3 ">
                    <img src="../../public/LinkedIn-icon.svg" alt="Arrow icon" class="h-12 w-12 mr-4">
                    <p class="text-nowrap text-neutral-800 font-light">/in/tan-kai-xun-dave</p>
                </button>
            </a>

        </div>
        <div class="pt-8 w-full">
            <a href="https://github.com/Fasnon">
                <button class=" w-full bg-tame-green text-neutral-50 pl-4 py-2 text-lg flex items-center gap-3 ">
                    <img src="../../public/github-mark.svg" alt="Arrow icon" class="h-12 w-12 mr-4">
                    <p class="text-nowrap text-neutral-800 font-light">github.com/Fasnon</p>
                </button>
            </a>

        </div>
    </div>
  </div>
</template>
