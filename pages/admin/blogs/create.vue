<script setup>
    import { ref } from 'vue';
    
    import MultiSelect from 'primevue/multiselect';


    definePageMeta({
        layout: "admin",
    });

    const selectedCities = ref();
    const cities = ref([
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ]);

</script>

<template>
    <div>
      <!-- breadcrumb -->
      <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
          <li class="flex items-center text-blue-500">
            <nuxtLink to="/admin" class="text-gray-700">Admin</nuxtLink>
            <svg
              class="fill-current w-3 h-3 mx-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              />
            </svg>
          </li>
          <li class="flex items-center">
            <nuxtLink to="/Admin/Write" class="text-gray-600">Write</nuxtLink>
          </li>
        </ol>
      </nav>
      <!-- breadcrumb end -->
  
      <!-- Page Title -->
      <h3 class="text-3xl font-medium text-gray-700">Create Post</h3>
      <!--Multi Select-->


    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCities" display="chip" :options="cities" optionLabel="name" placeholder="Select Cities"
            :maxSelectedLabels="3" class="w-full md:w-20rem" />
    </div>




      <!--Preview Button-->
      <div class="flex justify-end my-4">
        <button
          class="flex items-center justify-center px-3 py-2 bg-teal-600 font-medium tracking-wider text-white transition-colors duration-200 transform rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500"
        >
          <svg
            class="h-6 w-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="ml-2">Preview</span>
        </button>
      </div>
      <!-- Editor-->
      <TipTapEditor />
    </div>
  </template>
  

  <style scoped></style>
  