<template>
  <div class="relative mt-36">
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Search..."
      class="border border-primary rounded-md py-2 px-4 w-full"
    />
    <Icon
      name="tabler:search"
      class="text-primary text-2xl absolute right-3 top-1/2 border-l-2 transform -translate-y-1/2 cursor-pointer"
    />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "forntend",
});
</script>

<style scoped></style>
