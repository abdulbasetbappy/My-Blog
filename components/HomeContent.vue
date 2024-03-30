<script setup>
definePageMeta({
  layout: "forntend",
});
</script>

<template>
  <div class="container mx-auto md:my-36">
    <div>
      <img class="w-full mb-5 md:mb-10" src="../assets/top.png" alt="" />
    </div>
    <div>
      <div class="relative flex justify-center items-center">
        <!-- Image -->
        <img
          class="rounded-lg h-[300px] md:h-[500px]"
          src="../assets/banner.jpg"
        />
        <!-- Overlay -->
        <div
          class="absolute top-0 left-0 w-full h-full rounded-lg bg-primary opacity-60"
        ></div>
        <!-- Content -->
        <div class="absolute top-[50%] md:top-[60%] left-0 text-start p-5">
          <h1 class="text-sm md:text-lg text-black">In Label</h1>
          <h1 class="text-xl md:text-4xl text-black font-bold py-1 md:py-2">
            Ini Adalah Judul Artikel
          </h1>
          <p class="text-sm md:text-lg text-black">
            <span class="font-bold">By</span> Ridho Satriawan
          </p>
        </div>
      </div>
      <!-- post -->
      <Posts />
    </div>
  </div>
</template>
<style scoped>
/* Add flex styles to menu items */
</style>
