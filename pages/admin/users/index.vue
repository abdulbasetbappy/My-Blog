<template>
    <div>
    <!-- breadcrumb -->
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
      <ol class="list-none p-0 inline-flex">
        <li class="flex items-center text-blue-500">
          <NuxtLink href="#" class="text-gray-700">Admin</NuxtLink>
          <Icon name="uil:arrow-right"/>  
        </li>
        <li class="flex items-center">
          <NuxtLink href="#" class="text-gray-700">Users</NuxtLink>
        </li>
      </ol>
    </nav>
    <!-- breadcrumb end -->

    <test/>

    </div>
</template>

<script setup lang="ts">
import test from '../../editor/test.vue'
definePageMeta({
  layout: 'admin'
})
</script>

<style scoped>

</style>