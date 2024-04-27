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
const {signOut} = useAuth();

//handle logout
const handleLogout = async () => {
  await signOut()
  useRouter().push({
    name: 'login'
  })
}
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
    ],
  },
  {
        key: "202",
        label: "Category",
        icon: "",
        data: "/Admin/Category",
        type: "url",
        children: [
          {
            key: "20202",
            label: "Add New",
            icon: "",
            data: "/Admin/Category/Create",
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
      <div class="w-[100%] p-4">
        <nav class="">
          <Tree
            :value="nodes"
            selectionMode="single"
            :highlightOnSelect=true
            class="w-full bg-transparent text-xl text-gray-300 cursor-pointer"
          >
            <template #url="{ node }">
              <NuxtLink class="" :to="node.data">{{ node.label }}</NuxtLink>
            </template>
          </Tree>
        </nav>
      </div>

      <div class="flex items-end justify-center mt-8">
        <button
          @click="handleLogout"
          class="flex items-center px-16 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-teal-600 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500"
        >
          <span class="mx-1">LogOut</span>
          <Icon name="uil:sign-out-alt"  class="h-6 w-6"/>
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
