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
        <div class="flex items-center justify-between w-full py-3 mx-auto">
          <!-- Logo -->
          <NuxtLink to="/" class="font-bold text-2xl cursor-pointer text-white">Blogs</NuxtLink>
          <!-- Navigation links (hidden on small devices) -->
          <div class="hidden md:block">
            <div class="flex items-center gap-4">
              <NuxtLink
                v-for="item in items"
                :key="item.command"
                :href="item.url"
                class="text-white px-3 rounded-md text-lg font-medium"
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


  </nav>
</template>

<style>
/* Add your custom styles if needed */
</style>
