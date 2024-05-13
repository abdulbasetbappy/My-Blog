<script setup lang="ts">

import TipTapEditor from "../../editor/index.vue";
definePageMeta({
  layout: "admin",
  middleware: "auth",
});

</script>

<template>
  <div>
    <!--Header-->
    <div class="flex items-center justify-between flex-row">
      <!-- Page Title -->
      <h3 class="text-3xl mb-3 font-medium text-gray-700">Add New Post</h3>
      <!--Multi Select-->

      <!-- breadcrumb -->
      <nav class="text-sm font-semibold" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
          <li class="flex items-center text-blue-500">
            <nuxtLink to="/admin" class="text-gray-700">Admin</nuxtLink>
            <Icon name="uil:arrow-right" />
          </li>
          <li class="flex items-center text-blue-500">
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
    </div>
  
    <!-- Editor-->
    <TipTapEditor />
  </div>
</template>

<style scoped></style>
