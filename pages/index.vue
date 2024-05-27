<script setup>
import { useBlogStore } from '~/store/blogStore';

definePageMeta({
    layout: "frontend",
});

const blogStore = useBlogStore();

onMounted(() => {
    blogStore.fetchBlogs();
});
</script>

<template>
<div v-for="blog in blogStore.blogs" :key="blog.title">
    {{ blog.title }}
</div>
</template>

<style scoped></style>
