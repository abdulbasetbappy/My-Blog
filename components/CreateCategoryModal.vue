<template>
  <div
    :class="`modal ${
      !isOpen && 'opacity-0 pointer-events-none'
    } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
  >
    <div
      class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
      @click="closePopup()"
    />

    <div
      class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
    >
      <!-- Modal data -->
      <div class="px-6 py-4 text-left modal-content">
        <!-- Title -->
        <div class="flex items-center justify-between pb-3">
          <p class="text-2xl font-bold">Create New Category</p>
          <div class="z-50 cursor-pointer modal-close" @click="closePopup()">
            <svg
              class="text-black fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              />
            </svg>
          </div>
        </div>

        <!-- Body -->
        <!-- Add Category Input -->
        <div>
          <div class="relative">
            <span class="text-gray-700">Parent Name</span>
            <input
              type="button"
              @click="toggleOptions"
              class="flex w-full items-center px-2 py-2.5 tracking-wide text-white capitalize transition-colors duration-200 transform bg-teal-600 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500"
              :value="selectedInput || 'Select Parent Category'"
            />
            <!-- Dropdown Content -->
            <div
              v-show="optionOpen"
              class="absolute z-50 mt-2 w-full bg-white rounded shadow-lg border border-zinc-200"
            >
              <button
                v-for="option in options"
                :key="option"
                @click="selectOption(option)"
                class="block w-full py-2 px-4 text-left hover:bg-zinc-100"
              >
                {{ option }}
              </button>
            </div>
          </div>
          <label class="block my-6">
            <span class="text-gray-700">Category Name</span>
            <input
              type="text"
              placeholder="Enter Category Name"
              class="bg-gray-50 outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-teal-500"
            />
          </label>
        </div>

        <!-- Footer -->
        <div class="flex justify-between align-middle pt-2">
          <div class="flex items-center justify-start w-full">
            <label for="toggle" class="flex items-center cursor-pointer">
              <input type="checkbox" id="toggle" class="sr-only peer" />
              <div
                class="block relative peer-checked:bg-teal-600 bg-teal-900 w-16 h-9 p-1 rounded-full before:absolute before:bg-teal-600 before:w-7 before:h-7 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-8 peer-checked:before:bg-white"
              ></div>
              <span class="ml-3">Inactive</span>
            </label>
          </div>
          <button
            type="submit"
            class="px-6 py-3 font-medium tracking-wide text-white bg-teal-600 rounded-md hover:bg-teal-500 focus:outline-none"
            @click="closePopup()"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
// Reactive variables
const optionOpen = ref(false);
const selectedInput = ref();
// Define your options list here
const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
// Method to select an option
const selectOption = (option: string) => {
  selectedInput.value = option;
  optionOpen.value = false;
};
const toggleOptions = () => {
  optionOpen.value = !optionOpen.value;
};

const props = defineProps({
  isOpen: Boolean,
  closeModal: Function, // Define the closeModal prop
});
// Method to close the modal
const closePopup = () => {
  props.closeModal?.();
};
</script>

<style scoped></style>
