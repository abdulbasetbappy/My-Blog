<script lang="ts" setup>
import Navbar from "~/components/layouts/frontend/Navbar.vue";
</script>
<template>
  <div class="w-full min-h-full">
    <Navbar />
    <div class="content mt-12 md:mt-16 mx-4">
      <div class="w-full flex flex-col md:flex-row mt-2">
        <!-- main slot content show -->
        <div class="w-full md:w-3/4 md:pr-3 mb-5 md:mb-0">
          <div>
            <img class="w-full mb-2" src="../assets/top.png" alt="" />
          </div>
          <slot />
        </div>

        <!-- right side bar -->
        <div class="w-full md:w-1/4">
          <SideCard />
        </div>
      </div>
    </div>
  </div>

  <div
    class="footer border-t text-center border-gray-300 bg-primary text-white font-normal p-2 w-full"
  >
    Copyright@KangTutor
  </div>
</template>
