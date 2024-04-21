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
            <nuxtLink to="/Admin/Blogs" class="text-gray-700">Blogs</nuxtLink>
          </li>
          <li class="flex items-center text-blue-500">
            <Icon name="uil:arrow-right" />
            <nuxtLink to="/admin/blogs/category" class="text-gray-700"
              >Category</nuxtLink
            >
          </li>
        </ol>
      </nav>
      <!-- breadcrumb end -->
  
      <!-- Page Title -->
      <h3 class="text-3xl font-medium text-gray-700">Category</h3>
  
      <!-- Count Section -->
      <div class="mt-4">
        <div class="flex flex-wrap -mx-6">
          <!--Total Category Counter Section-->
          <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div
              class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
            >
              <div class="p-3 bg-teal-600 bg-opacity-75 rounded-full">
                <Icon name="material-symbols:category-rounded" class="h-8 w-8 text-white" />
              </div>
  
              <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700">21</h4>
                <div class="text-gray-500">Total Category</div>
              </div>
            </div>
          </div>
          <!--Active Blog Counter Section-->
          <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
            <div
              class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
            >
              <div class="p-3 bg-blue-600 bg-opacity-75 rounded-full">
                <Icon name="material-symbols:volunteer-activism-rounded" class="h-8 w-8 text-white" />
              </div>
  
              <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700">19</h4>
                <div class="text-gray-500">Active</div>
              </div>
            </div>
          </div>
          <!--Inactive Blog Counter Section-->
          <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div
              class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
            >
              <div class="p-3 bg-pink-600 bg-opacity-75 rounded-full">
                <Icon name="material-symbols:signal-wifi-bad-rounded" class="h-8 w-8 text-white" />
              </div>
  
              <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700">2</h4>
                <div class="text-gray-500">Inactive</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Button Section-->
      <div class="flex flex-row justify-between my-5">
        <!-- Add Category Button -->
        <div>
          <!-- Add Category Modal Button -->
          <NuxtLink
            class="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-teal-600 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500"
            to="/Admin/Category/create"
          >
            <Icon name="material-symbols:edit-rounded" class="h-5 w-5 text-white" />
            <span class="pl-2">Create Category</span>
          </NuxtLink>
        </div>
        <!-- Add Category Modal End -->
        
        <!--Refresh Button-->
        <button
          class="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-teal-600 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500"
          @click="refreshPage"
        >
          <Icon name="material-symbols:refresh-rounded" class="w-5 h-5 mx-1" />
          <span class="mx-1">Refresh</span>
        </button>
        <!--Refresh Button End-->
      </div>
      <!-- Button Section End-->
  
      <CategoryDetailsTable />
    </div>
  </template>
  
  <script setup lang="ts">
  definePageMeta({
    layout: "admin",
  });
  //refresh page
  const refreshPage = () => {
    location.reload();
  };
  </script>
  
  <style scoped></style>
  