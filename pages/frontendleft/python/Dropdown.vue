<template>
  <div ref="dropDownRef" class="relative mx-auto w-fit text-white">
    <button @click="toggleDropDown" class="rounded-sm bg-sky-600 px-6 py-2">
      Dropdown
    </button>
    <ul
      :class="{ visible: open, invisible: !open }"
      class="absolute top-12 z-50 w-full space-y-1 rounded-sm shadow-md"
    >
      <li
        v-for="(item, idx) in items"
        :key="idx"
        :style="{
          transform: `translateY(${open ? 0 : (idx + 1) * 10}px)`,
          transitionDuration: open ? '500ms' : '150ms',
        }"
        class="rounded-sm bg-sky-400 p-2 hover:bg-sky-500"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const open = ref(false);
const dropDownRef = ref(null);
const items = ["React", "Angular", "Vue"];

const toggleDropDown = () => {
  open.value = !open.value;
};

const closeOnClickOutside = (event) => {
  if (dropDownRef.value && !dropDownRef.value.contains(event.target)) {
    open.value = false;
  }
};

onMounted(() => {
  document.addEventListener("mousedown", closeOnClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousedown", closeOnClickOutside);
});
</script>

<style scoped>
/* Add your scoped styles here */
</style>
