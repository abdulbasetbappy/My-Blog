<template>
  <nav class="bg-[#1fb9ad]">
    <!-- Navigation Bar -->
    <div class="mx-auto container px-5">
      <div class="py-5 flex justify-between items-center">
        <div class="flex items-center justify-between w-full mx-auto">
          <!-- Logo -->
          <div class="font-bold text-xl text-white">Blogs</div>
          <!-- Navigation links (hidden on small devices) -->
          <div class="hidden md:block">
            <div class="flex items-center space-x-4">
              <a
                v-for="item in items"
                :key="item.command"
                :href="item.url"
                class="text-white cursor-pointer px-3 py-2 rounded-md text-xl font-medium"
                :class="{ border: isActive(item.url) }"
              >
                {{ item.label }}
              </a>
              <Icon name="uil:search" class="text-white text-xl font-bold" />
            </div>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="-mr-2 sm:block md:hidden flex items-center">
          <button @click="toggleMobileMenu" type="button" class="text-white">
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="!mobileMenuOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-if="mobileMenuOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu (shown on small devices) -->
    <div v-show="mobileMenuOpen" class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          v-for="item in items"
          :key="item.command"
          :href="item.url"
          class="text-white block px-3 py-2 rounded-md text-base font-medium"
          :class="{ 'bg-gray-900': isActive(item.url) }"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const items = ref([
  {
    label: "Beranda",
    command: "home",
    url: "/",
  },
  {
    label: "Tutorial",
    command: "about",
    url: "/about",
  },
  {
    label: "Pemrograman",
    command: "pemrograman",
    url: "/pemrograman",
  },
  {
    label: "Teknologi",
    command: "teknologi",
    url: "/teknologi",
  },
]);

let mobileMenuOpen = ref(false);
const route = useRoute(); // Access current route

function isActive(url) {
  return route.path === url; // Check if current route path matches the provided URL
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>

<style>
/* Add your custom styles if needed */
</style>
