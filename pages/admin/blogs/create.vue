<script setup lang="ts">
import TipTapEditor from "../../editor/index.vue";
definePageMeta({
  layout: "admin",
});
</script>

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
          <nuxtLink to="/Admin/Blogs" class="text-gray-600">Blogs</nuxtLink>
          <Icon name="uil:arrow-right" />
        </li>
        <li class="flex items-center">
          <nuxtLink to="/Admin/Blogs/create" class="text-gray-600"
            >Create</nuxtLink
          >
        </li>
      </ol>
    </nav>
    <!-- breadcrumb end -->

    <!-- Page Title -->
    <h3 class="text-3xl font-medium text-gray-700">Add New Post</h3>
    <!--Multi Select-->

    <!--Preview Button-->
    <div class="flex gap-4 justify-end my-4">
      <button
        class="flex items-center justify-center px-3 py-2 bg-teal-600 font-medium tracking-wider text-white transition-colors duration-200 transform rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500"
      >
        <Icon name="material-symbols:publish-rounded" class="h-6 w-6" />
        <span class="ml-2">Publish Now</span>
      </button>
      <button
        class="flex items-center justify-center px-3 py-2 bg-teal-600 font-medium tracking-wider text-white transition-colors duration-200 transform rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500"
      >
        <Icon
          name="material-symbols:visibility-outline-rounded"
          class="h-6 w-6"
        />
        <span class="ml-2">Preview</span>
      </button>
    </div>
    <!-- Editor-->
    <TipTapEditor />
  </div>
</template>

<style scoped></style>
