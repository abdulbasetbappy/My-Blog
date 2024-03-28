<script lang="ts" setup></script>
<template>
  <div class="w-full">
    <div
      class="w-full border-b fixed h-16 bg-[#1fb9ad] flex justify-between items-center"
    >
      <div class="flex">
        <img class="w-10 p-1 ml-2" src="#" />
        <h1 class="text-2xl ml-1 mt-0 font-bold">Blog</h1>
      </div>
      <div class="flex">
        <Navbar />
      </div>
    </div>
    <!-- layouts -->
    <div class="w-full flex-wrap flex justify-between">
      <div class="min-h-screen pt-20 bg-[#999ba1] w-full md:w-1/6">
        <!-- Content for the left sidebar -->
        <ForntendLeftSidebar />
      </div>
      <div class="w-full md:w-4/6 px-5">
        <!-- Content for the main area -->
        <slot />
      </div>
      <div class="min-h-screen px-5 pt-20 bg-gray-100 w-full md:w-1/6">
        <!-- Content for the right sidebar -->
        <h1 class="text-2xl text-red-500 font-bold my-10">showing added</h1>
        <SideCard />
      </div>
    </div>
    <div
      class="footer border-t border-gray-300 fixed bottom-0 right-0 z-10 bg-[#1fb9ad] p-2 w-full"
    >
      footer
    </div>
  </div>
</template>
