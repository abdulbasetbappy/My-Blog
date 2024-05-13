<template>
    <div>
      <!-- breadcrumb -->
      <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
          <li class="flex items-center text-blue-500">
            <nuxtLink to="/admin" class="text-gray-700">Admin</nuxtLink>
            <Icon name="uil:arrow-right"/>  
          </li>
          <li class="flex items-center">
            <nuxtLink to="/admin/blog" class="text-gray-700">Blogs</nuxtLink>
          </li>
        </ol>
      </nav>
      <!-- breadcrumb end -->
  
      <!-- Page Title -->
      <h3 class="text-3xl font-medium text-gray-700">Blogs</h3>
  
      <!-- Count Section -->
      <div class="mt-4">
        <div class="flex flex-wrap -mx-6">
          <!--Total Blog Counter Section-->
          <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div
              class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
            >
              <div class="p-3 bg-teal-600 bg-opacity-75 rounded-full">
                <Icon name="bx:bxs-book" class="h-8 w-8 text-white" />
              </div>
  
              <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700">{{ totalBlogs }}</h4>
                <div class="text-gray-500">Total Blogs</div>
              </div>
            </div>
          </div>
          <!--Active Blog Counter Section-->
          <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
            <div
              class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
            >
              <div class="p-3 bg-blue-600 bg-opacity-75 rounded-full">
                <Icon name="bx:bxs-book-open" class="h-8 w-8 text-white" />
              </div>
  
              <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700">{{ activeBlogs }}</h4>
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
                <h4 class="text-2xl font-semibold text-gray-700">{{ inactiveBlogs }}</h4>
                <div class="text-gray-500">Inactive</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Button Section-->
      <div class="flex flex-row justify-between my-5">
        <!-- Write Blog Button -->
        <div>
          <nuxtLink
            class="flex items-center cursor-pointer px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-teal-600 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500"
            to="Blogs/Create"
          >
            <Icon name="bx:bxs-pencil" class="w-5 h-5 mx-1" />
            <span class="pl-2">Write Blog</span>
          </nuxtLink>
        </div>
        <!--  Write Blog Button End -->
  
      </div>
      <!-- Button Section End-->
  
      <!-- Table Section -->
      <BlogDetailsTable />
      <!-- Table Section End -->
    </div>
  </template>
  
  <script setup lang="ts">
  definePageMeta({
    layout: "admin",
    middleware: 'auth'
  });
  //get all Blogs\
  const Blogs = ref([]);

  onMounted(async () => {
    const response = await fetch('/api/post');
    const data = await response.json();
    Blogs.value = data;
    console.log(Blogs.value);
  });

  //get all Blogs
  const totalBlogs = computed(() => Blogs.value.length);
  //get all Blogs Status===Published then count active
  const activeBlogs = computed(() => Blogs.value.filter(blog => blog.status === 'Published').length);
  //get all Blogs Status===Draft then count inactive
  const inactiveBlogs = computed(() => Blogs.value.filter(blog => blog.status === 'Draft').length);
  </script>
  
  <style scoped></style>
  