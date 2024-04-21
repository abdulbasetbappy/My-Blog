<template>
  <div>
    <!-- breadcrumb -->
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
      <ol class="list-none p-0 inline-flex">
        <li class="flex items-center text-blue-500">
          <nuxtLink to="/admin" class="text-gray-700">Admin</nuxtLink>
          <Icon name="uil:arrow-right" />
        </li>

        <li class="flex items-center">
          <nuxtLink to="/Admin/Blogs" class="text-gray-700">Category</nuxtLink>
        </li>
        <li class="flex items-center text-blue-500">
          <Icon name="uil:arrow-right" />
          <nuxtLink to="/admin/blogs/category" class="text-gray-700"
            >Create</nuxtLink
          >
        </li>
      </ol>
    </nav>
    <!-- breadcrumb end -->

    <!-- Page Title -->
    <h3 class="text-3xl font-medium text-gray-700">Add New Category</h3>

    <!--Category details Input-->
    <form
      class="max-w-[500px] h-auto mt-16 p-6 rounded-xl m-auto bg-slate-300"
      action=""
    >
      <!--Parent Category-->
      <div class="card my-4 flex justify-content-center">
        <Dropdown
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="Select a City"
          class="w-full md:w-14rem"
        />
      </div>
      <div class="card my-4 flex gap-2 justify-content-center items-center">

          <!--Category Input-->
            <InputText class="h-10 w-[65%]" type="text" v-model="categoryName" />

          <!--Category Status-->
            <div class="flex w-[35%] p-1 flex-row justify-between items-center">
            <p for="categoryName" class="text-sm font-semibold text-gray-700">Active</p>
            <InputSwitch class="" v-model="categoryStatus" />
            <p for="categoryName" class="text-sm font-semibold text-gray-700">InActive</p>
            </div>
        </div>

      <button
        class="bg-teal-500 w-full py-3 rounded-xl text-xl font-semibold text-teal-50"
        ype="submit"
      >
        Add New Category
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
//Dropdown
import Dropdown from "primevue/dropdown";
const selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
//Input- Category name
const categoryName = ref(null);
//Switch Input - Category Active or Inactive
const categoryStatus = ref(false);
definePageMeta({
  layout: "admin",
});
</script>

<style scoped></style>
