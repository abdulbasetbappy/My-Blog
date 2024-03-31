<script setup lang="ts">
import {ref} from "vue";
import { useSidebar } from "../composables/useSdiebar";

const { isOpen } = useSidebar();
const activeClass = ref(
  "bg-gray-600 bg-opacity-25 rounded-md text-teal-100 border-teal-600"
);
const inactiveClass = ref(
  "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:rounded-md hover:text-gray-100"
);

//Dropdown
const nodes = ref([
  {
    key: "01",
    label: "DashBoard",
    data: "/Admin",
    type: "url",
    icon: "",
  },
  {
    key: "02",
    label: "Blogs",
    data: "/Admin/Blogs",
    type: "url",
    icon: "",
    children: [
      {
        key: "201",
        label: "All Blogs",
        icon: "",
        data: "/Admin/Blogs/All-Blogs",
        type: "url",
      },
      {
        key: "201",
        label: "Add New",
        icon: "",
        data: "/Admin/Blogs/Create",
        type: "url",
      },
      {
        key: "202",
        label: "Category",
        icon: "",
        data: "/Admin/Blogs/Category",
        type: "url",
      },
    ],
  },
  {
    key: "04",
    label: "Users",
    data: "/Admin/Users",
    type: "url",
    icon: "",
    children: [
      {
        key: "401",
        label: "Add New",
        icon: "",
        data: "/Admin/Users/Create",
        type: "url",
      },
    ],
  },
  {
    key: "05",
    label: "Settings",
    data: "/Admin/Settings",
    type: "url",
    icon: "",
  },
]);
</script>

<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
      @click="isOpen = false"
    />
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 flex justify-between items-center flex-col py-12 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0"
    >
      <div>
        <div class="flex items-center justify-center">
          <div class="flex items-center">
            <svg
              class="w-12 h-12"
              viewBox="0 0 36 36"
              fill="#4C51BF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.648,25.734a1.465,1.465,0,0,1-.157-.942H3.847L13.716,7.417l4.159,7.41,1.308-.976L15.076,6.467A1.752,1.752,0,0,0,13.7,5.56a1.531,1.531,0,0,0-1.343.924l-10,17.593a1.729,1.729,0,0,0-.087,1.656,1.526,1.526,0,0,0,1.456.706H12.1a1.523,1.523,0,0,1-1.456-.7Z"
                fill="#2dd4bf"
              />
              <path
                d="M29.636,24.112,21.589,9.823a1.692,1.692,0,0,0-1.351-.907,1.489,1.489,0,0,0-1.308.907l-1.064,1.7v3.3l2.371-4.071,7.951,14.071H25.163a1.377,1.377,0,0,1-.122.837l-.026.052a1.729,1.729,0,0,1-1.456.732h4.734a1.72,1.72,0,0,0,1.456-.732,1.548,1.548,0,0,0-.122-1.6Z"
                fill="#2dd4bf"
              />
              <path
                d="M25.233,25.7l.026-.052.07-.139a1.278,1.278,0,0,0,.061-.7,2.11,2.11,0,0,0-.27-.724l-6.286-10.9-.95-1.656h-.017l-.959,1.648-6.277,10.9a2.18,2.18,0,0,0-.244.715,1.438,1.438,0,0,0,.148.942,1.563,1.563,0,0,0,1.482.7H23.725a1.79,1.79,0,0,0,1.508-.741ZM17.866,14.836,23.62,24.8H12.112Z"
                fill="#2dd4bf"
              />
            </svg>
            <span class="mx-2 text-3xl font-semibold text-white">V-Pannel</span>
          </div>
        </div>

        <nav class="mt-10">
          <Tree
            :value="nodes"
            selectionMode="single"
            :highlightOnSelect=true
            class="w-full bg-transparent  text-gray-300 cursor-pointer"
          >
            <template #url="{ node }">
              <NuxtLink :to="node.data">{{ node.label }}</NuxtLink>
            </template>
          </Tree>
        </nav>
      </div>

      <div class="flex items-end justify-center mt-8">
        <button
          class="flex items-center px-16 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-teal-600 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500"
        >
          <span class="mx-1">LogOut</span>
          <svg
            class="w-6 h-6 mx-1"
            viewBox="-3.6 -3.6 31.20 31.20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"
            stroke="#e6e6e6"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="4.272"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15"
                stroke="#ebebeb"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827"
                stroke="#ebebeb"
                stroke-width="2.4"
                stroke-linecap="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.p-tree{
  background-color: transparent;
  padding: 0px
}
</style>
