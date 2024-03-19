<script setup>
import Menubar from "primevue/menubar";
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    class: "text-red-500",
  },
  {
    label: "Features",
    icon: "pi pi-star",
  },
  {
    label: "Projects",
    icon: "pi pi-search",
    items: [
      {
        label: "Components",
        icon: "pi pi-bolt",
      },
      {
        label: "Blocks",
        icon: "pi pi-server",
      },
      {
        label: "UI Kit",
        icon: "pi pi-pencil",
      },
      {
        label: "Templates",
        icon: "pi pi-palette",
        items: [
          {
            label: "Apollo",
            icon: "pi pi-palette",
          },
          {
            label: "Ultima",
            icon: "pi pi-palette",
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
  },
]);
</script>

<template>
  <div class="card">
    <Menubar
      :model="items"
      :pt="{
        menu: {
          class: ' -ml-20 md:ml-0 w-[300px] md:w-auto mt-2 md:mt-0',
        },
      }"
      class="bg-[#1fb9ad] flex items-center justify-between"
    />
  </div>
</template>
<style scoped></style>
