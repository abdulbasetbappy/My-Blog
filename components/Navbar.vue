<template>
  <Menubar
    
    :model="items"
    :pt="{
      root: { class: 'bg-[#1fb9ad]' },
      menu: {
        class: 'flex  gap-x-4',
      },
    }"
  />
</template>

<script setup>
import Menubar from "primevue/menubar";
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    command: "home",
    url: "/",
  },
  {
    label: "About",
    command: "about",
    url: "/about",
  },
  {
    label: "Blogs",
    command: "blogs",
    url: "/blogs",
  },
]);
</script>

<style scoped>
/* Add your custom styles if needed */
</style>
