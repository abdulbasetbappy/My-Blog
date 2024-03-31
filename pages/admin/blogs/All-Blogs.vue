<template>
  <!-- breadcrumb -->
  <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
    <ol class="list-none p-0 inline-flex">
      <li class="flex items-center text-blue-500">
        <nuxtLink to="/admin" class="text-gray-700">Admin</nuxtLink>
        <Icon name="uil:arrow-right" />
      </li>
      <li class="flex items-center">
        <nuxtLink to="/admin/blogs" class="text-gray-700">Blogs</nuxtLink>
      </li>
      <li class="flex items-center text-blue-500">
        <Icon name="uil:arrow-right" />
        <nuxtLink to="/admin/blogs/All-Blogs" class="text-gray-700"
          >All-Blogs</nuxtLink
        >
      </li>
    </ol>
  </nav>
  <!-- breadcrumb end -->
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<style scoped></style>
