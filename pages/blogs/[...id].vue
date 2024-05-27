<template>
    <div>
      <h1>{{ Blog?.data?.title }}</h1>
      <div v-html="mdData"></div>
      <p>Views: {{ views }}</p>
      <h2>Related Blogs</h2>
      <ul>
        <li v-for="relatedBlog in relatedBlogs" :key="relatedBlog.id">{{ relatedBlog.data.title }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  // References for the blog, markdown data, views, all blogs, and related blogs
  const Blog = ref({});
  const mdData = ref('');
  const views = ref(0);
  const Blogs = ref([]);
  const relatedBlogs = ref([]);
  
  // Get route parameters
  const route = useRoute();
  
  // Function to fetch a single blog post by ID
  const fetchBlogById = async (postId) => {
    const response = await fetch(`/api/post/${postId}`);
    const data = await response.json();
    Blog.value = data;
    mdData.value = data.data.editorContent;
    views.value = data.data.views;
  };
  
  // Function to fetch all blog posts
  const fetchAllBlogs = async () => {
    const response = await fetch('/api/post');
    const data = await response.json();
    Blogs.value = data;
  };
  
  // Function to find related blogs based on category
  const findRelatedBlogs = (category, allBlogs) => {
    return allBlogs
      .filter(blog => blog.data.category === category)
      .slice(0, 3);
  };
  
  // OnMounted lifecycle hook
  onMounted(async () => {
    // Fetch single blog post
    const postId = route.params.id;
    await fetchBlogById(postId);
  
    // Fetch all blog posts
    await fetchAllBlogs();
  
    // Find related blogs based on the category of the current blog post
    relatedBlogs.value = findRelatedBlogs(Blog.value.data.category, Blogs.value);
  });
  </script>
  