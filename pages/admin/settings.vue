<template>
    <div>
    <!-- breadcrumb -->
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
      <ol class="list-none p-0 inline-flex">
        <li class="flex items-center text-blue-500">
          <a href="#" class="text-gray-700">Admin</a>
          <Icon name="uil:arrow-right"/>  
        </li>
        <li class="flex items-center">
          <a href="#" class="text-gray-700">Settings</a>
        </li>
      </ol>
    </nav>
    <!-- breadcrumb end -->
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
</script>

<style scoped>

</style>