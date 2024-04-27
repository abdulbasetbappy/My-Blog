<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const items = ref([
  {
    label: "Home",
    command: "home",
    url: "/",
  },
  {
    label: "About US",
    command: "about",
    url: "/about",
  },
  {
    label: "Contact",
    command: "contact",
    url: "/contact",
  },
  {
    label: "login",
    command: "login",
    url: "/login",
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

<template>
  <nav class="relative z-10">
    <!-- Navigation Bar -->
    <div class="bg-primary w-full px-5 fixed top-0">
      <div class="py-1 flex justify-between items-center">
        <div class="flex items-center justify-between w-full mx-auto">
          <!-- Logo -->
          <div class="font-bold text-xl text-white">Blogs</div>
          <!-- Navigation links (hidden on small devices) -->
          <div class="hidden md:block">
            <div class="flex items-center space-x-4">
              <NuxtLink
                v-for="item in items"
                :key="item.command"
                :href="item.url"
                class="text-white cursor-pointer px-3 py-2 rounded-md text-xl font-medium"
                :class="{ border: isActive(item.url) }"
              >
                {{ item.label }}
              </NuxtLink>
              <NuxtLink to="/search">
                <Icon
                  name="tabler:search"
                  class="text-white text-2xl cursor-pointer"
                />
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="-mr-2 sm:block md:hidden flex items-center">
          <button @click="toggleMobileMenu" type="button" class="text-white">
            <span class="sr-only">Open main menu</span>
            <Icon v-if="!mobileMenuOpen" name="heroicons:bars-3"></Icon>
            <Icon v-if="mobileMenuOpen" name="maki:cross"></Icon>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu (shown on small devices) -->
    <div v-show="mobileMenuOpen" class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 bg-gray-100 mt-16">
        <a
          v-for="item in items"
          :key="item.command"
          :href="item.url"
          class="text-black block px-3 py-2 rounded-md text-base font-medium"
          :class="{ 'bg-white': isActive(item.url) }"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<style>
/* Add your custom styles if needed */
</style>
