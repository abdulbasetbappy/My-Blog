<script lang="ts" setup>
</script>
<template>
  <div class="w-full min-h-full">
    <Navbar />
    <div class="content mt-12 md:mt-16 mx-4">
      <div class="w-full flex flex-col md:flex-row mt-2">
        <!-- main slot content show -->
        <div class="w-full md:w-3/4 md:pr-3 mb-5 md:mb-0">
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
    <p>&copy; 2022 - All rights reserved</p>
  </div>
</template>
