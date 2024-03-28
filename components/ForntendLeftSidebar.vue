<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const open = ref(false);
const openSub = ref(false);
const dropDownRef = ref(null);
const dropDownRefsub = ref(null);

const toggleDropDown = () => {
  open.value = !open.value;
};
const toggleDropDownsub = () => {
  openSub.value = !openSub.value;
};

const closeOnClickOutside = (event) => {
  if (dropDownRef.value && !dropDownRef.value.contains(event.target)) {
    open.value = false;
  }
};
const closeOnClickOutsidesub = (event) => {
  if (dropDownRefsub.value && !dropDownRefsub.value.contains(event.target)) {
    openSub.value = false;
  }
};

onMounted(() => {
  document.addEventListener("mousedown", closeOnClickOutside);
  document.addEventListener("mousedown", closeOnClickOutsidesub);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousedown", closeOnClickOutside);
  document.removeEventListener("mousedown", closeOnClickOutsidesub);
});
</script>

<template>
  <div class="flex px-5">
    <nav class="space-y-8">
      <!-- PHP Link -->
      <NuxtLink
        to="/frontendleft/php"
        class="cursor-pointer flex items-center gap-x-3 text-xl font-semibold"
      >
        <!-- PHP Icon -->

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M0 13.875v3.745c0 2.067 5.37 3.743 12 3.743V17.62c-6.63 0-12-1.68-12-3.743zm21.384 2.333L12 13.875v3.745l9.384 2.333C23.02 19.313 24 18.503 24 17.62v-3.745c0 .882-.98 1.692-2.616 2.333M12 10.133v3.742c-6.627 0-12-1.677-12-3.744V6.38c0-2.064 5.37-3.743 12-3.743c6.625 0 12 1.68 12 3.744v3.75c0 .883-.98 1.69-2.616 2.334L12 10.13z"
          ></path>
        </svg>

        PHP
      </NuxtLink>

      <!-- Python Link -->
      <NuxtLink
        to="/frontendleft/python"
        class="cursor-pointer flex items-center gap-x-3 text-xl font-semibold"
      >
        <!-- Python Icon -->

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19.14 7.5A2.86 2.86 0 0 1 22 10.36v3.78A2.86 2.86 0 0 1 19.14 17H12c0 .39.32.96.71.96H17v1.68a2.86 2.86 0 0 1-2.86 2.86H9.86A2.86 2.86 0 0 1 7 19.64v-3.75a2.85 2.85 0 0 1 2.86-2.85h5.25a2.85 2.85 0 0 0 2.85-2.86V7.5zm-4.28 11.79c-.4 0-.72.3-.72.89c0 .59.32.71.72.71a.71.71 0 0 0 .71-.71c0-.59-.32-.89-.71-.89m-10-1.79A2.86 2.86 0 0 1 2 14.64v-3.78A2.86 2.86 0 0 1 4.86 8H12c0-.39-.32-.96-.71-.96H7V5.36A2.86 2.86 0 0 1 9.86 2.5h4.28A2.86 2.86 0 0 1 17 5.36v3.75a2.85 2.85 0 0 1-2.86 2.85H8.89a2.85 2.85 0 0 0-2.85 2.86v2.68zM9.14 5.71c.4 0 .72-.3.72-.89c0-.59-.32-.71-.72-.71c-.39 0-.71.12-.71.71s.32.89.71.89"
          ></path>
        </svg>

        Python
      </NuxtLink>

      <!-- SASS Dropdown -->
      <div ref="dropDownRef" class="relative w-fit text-white">
        <!-- SASS Dropdown Button -->
        <button
          @click="toggleDropDown"
          class="rounded-sm flex items-center gap-x-3 font-semibold text-black text-xl"
        >
          <!-- SASS Dropdown Icon -->

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M8 1v3.5A1.5 1.5 0 0 0 9.5 6H13v3.037a2.42 2.42 0 0 0-1.272.657A2.492 2.492 0 0 0 10 9h-.073c-.942 0-1.759.537-2.161 1.321l-.084-.268a1.5 1.5 0 0 0-2.864 0l-.094.303A2.504 2.504 0 0 0 3 9.05V2.5A1.5 1.5 0 0 1 4.5 1zm1 .25V4.5a.5.5 0 0 0 .5.5h3.25zM2.427 11a.427.427 0 0 0-.19.809l.974.488A1.427 1.427 0 0 1 2.573 15H2.5A1.5 1.5 0 0 1 1 13.5a.5.5 0 0 1 1 0a.5.5 0 0 0 .5.5h.073a.427.427 0 0 0 .19-.809l-.974-.488A1.427 1.427 0 0 1 2.427 10H2.5A1.5 1.5 0 0 1 4 11.5a.5.5 0 0 1-1 0a.5.5 0 0 0-.5-.5zm4.3-.65a.5.5 0 0 0-.954 0l-1.25 4a.5.5 0 1 0 .954.3L5.68 14h1.14l.203.65a.5.5 0 1 0 .954-.3zM6.507 13h-.514l.257-.824zM9.5 11.427c0-.236.191-.427.427-.427H10a.5.5 0 0 1 .5.5a.5.5 0 0 0 1 0A1.5 1.5 0 0 0 10 10h-.073a1.427 1.427 0 0 0-.638 2.703l.975.488a.427.427 0 0 1-.191.809H10a.5.5 0 0 1-.5-.5a.5.5 0 0 0-1 0A1.5 1.5 0 0 0 10 15h.073a1.427 1.427 0 0 0 .638-2.703l-.975-.488a.427.427 0 0 1-.236-.382M13.427 11a.427.427 0 0 0-.19.809l.974.488A1.427 1.427 0 0 1 13.573 15H13.5a1.5 1.5 0 0 1-1.5-1.5a.5.5 0 0 1 1 0a.5.5 0 0 0 .5.5h.073a.427.427 0 0 0 .19-.809l-.974-.488A1.427 1.427 0 0 1 13.427 10h.073a1.5 1.5 0 0 1 1.5 1.5a.5.5 0 0 1-1 0a.5.5 0 0 0-.5-.5z"
            ></path>
          </svg>

          SASS
        </button>
        <!-- SASS Dropdown Menu -->
        <ul
          :class="{ visible: open, invisible: !open }"
          class="absolute top-18 left-24 z-50 bg-gray-500 w-full space-y-1 rounded-sm shadow-md"
        >
          <!-- CSS Link -->
          <li
            class="p-2 text-xl flex items-center gap-x-3 text-black font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M.132.162A.5.5 0 0 1 .5 0h14a.5.5 0 0 1 .498.542l-1 11.916a.5.5 0 0 1-.34.432l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1-.34-.432L.002.542a.5.5 0 0 1 .13-.38M11 3H4v1h6v2H6v1h4v2.14l-2.5.833L5 9.14V8H4v1.86l3.5 1.167L11 9.86z"
                clipRule="evenodd"
              ></path>
            </svg>

            CSS
          </li>
          <!-- Vue Dropdown -->
          <li class="p-2">
            <div ref="dropDownRefsub" class="relative w-fit text-white">
              <!-- Vue Dropdown Button -->
              <button
                @click="toggleDropDownsub"
                class="rounded-sm flex items-center gap-x-3 font-semibold text-black text-xl"
              >
                <!-- Vue Dropdown Icon -->

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 11.64L7.92 2h8.16zm0 10.31L3.27 4.91h4.57L12 14.47l4.16-9.56h4.57z"
                  ></path>
                </svg>

                Vue
              </button>
              <!-- Vue Dropdown Menu -->
              <ul
                :class="{ visible: openSub, invisible: !openSub }"
                class="absolute top-5 bg-gray-500 p-2 left-20 z-50 w-full space-y-1 rounded-sm shadow-md"
              >
                <!-- Vue Submenu Items -->
                <li>Nuxt</li>
                <li>Vue 3</li>
              </ul>
            </div>
          </li>
          <!-- Nuxt Link -->
          <li
            class="p-2 text-xl flex items-center gap-x-3 text-black font-semibold"
          >
            <!-- Nuxt Icon -->

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.53em"
              height="1em"
              viewBox="0 0 256 168"
            >
              <path
                fill="#00DC82"
                d="M143.618 167.029h95.166c3.023 0 5.992-.771 8.61-2.237a16.963 16.963 0 0 0 6.302-6.115a16.324 16.324 0 0 0 2.304-8.352c0-2.932-.799-5.811-2.312-8.35L189.778 34.6a16.966 16.966 0 0 0-6.301-6.113a17.626 17.626 0 0 0-8.608-2.238c-3.023 0-5.991.772-8.609 2.238a16.964 16.964 0 0 0-6.3 6.113l-16.342 27.473l-31.95-53.724a16.973 16.973 0 0 0-6.304-6.112A17.638 17.638 0 0 0 96.754 0c-3.022 0-5.992.772-8.61 2.237a16.973 16.973 0 0 0-6.303 6.112L2.31 141.975a16.302 16.302 0 0 0-2.31 8.35c0 2.932.793 5.813 2.304 8.352a16.964 16.964 0 0 0 6.302 6.115a17.628 17.628 0 0 0 8.61 2.237h59.737c23.669 0 41.123-10.084 53.134-29.758l29.159-48.983l15.618-26.215l46.874 78.742h-62.492zm-67.64-26.24l-41.688-.01L96.782 35.796l31.181 52.492l-20.877 35.084c-7.976 12.765-17.037 17.416-31.107 17.416"
              ></path>
            </svg>

            Nuxt
          </li>
        </ul>
      </div>

      <!-- CSS Link -->
      <NuxtLink
        to="/frontendleft/css"
        class="cursor-pointer flex items-center gap-x-3 text-xl font-semibold"
      >
        <!-- CSS Icon -->

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M.132.162A.5.5 0 0 1 .5 0h14a.5.5 0 0 1 .498.542l-1 11.916a.5.5 0 0 1-.34.432l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1-.34-.432L.002.542a.5.5 0 0 1 .13-.38M11 3H4v1h6v2H6v1h4v2.14l-2.5.833L5 9.14V8H4v1.86l3.5 1.167L11 9.86z"
            clipRule="evenodd"
          ></path>
        </svg>

        CSS
      </NuxtLink>

      <!-- Server Link -->
      <NuxtLink
        to="/frontendleft/server"
        class="cursor-pointer flex items-center gap-x-3 text-xl font-semibold"
      >
        <!-- Server Icon -->

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v.67l-2.5-1.11l-6.5 2.88V15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m0 8h8c.06 2.25 1 4.4 2.46 6H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M8 5h1V3H8zm0 8h1v-2H8zm0 8h1v-2H8zM4 3v2h2V3zm0 8v2h2v-2zm0 8v2h2v-2zm13.5-7l4.5 2v3c0 2.78-1.92 5.37-4.5 6c-2.58-.63-4.5-3.22-4.5-6v-3zm0 1.94L15 15.06v2.66c0 1.54 1.07 2.98 2.5 3.34z"
          ></path>
        </svg>

        Server
      </NuxtLink>
    </nav>
  </div>
</template>

<style scoped>
.dropdown-menu-enter-active,
.dropdown-menu-leave-active {
  transition: opacity 0.3s ease;
}
.dropdown-menu-enter-from,
.dropdown-menu-leave-to {
  opacity: 0;
}
</style>
