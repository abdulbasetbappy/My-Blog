<script lang="ts" setup></script>
<template>
  <Navbar />

  <!-- layouts -->
  <div class="w-full flex-wrap-reverse flex justify-between">
    <div class="w-full md:w-3/4 px-5">
      <!-- Content for the main area -->
      <slot />
    </div>
    <div class="min-h-screen px-5 bg-gray-100 w-full md:w-1/4">
      <!-- Content for the right sidebar -->
      <SideCard />
    </div>
  </div>
  <div class="footer border-t border-gray-300 bg-primary p-2 w-full">
    footer
  </div>
</template>
