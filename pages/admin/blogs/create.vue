<script setup lang="ts">
import MultiSelect from "primevue/multiselect";
import FileUpload from 'primevue/fileupload';
import Dropdown from 'primevue/dropdown';
import TipTapEditor from "../../editor/index.vue";
definePageMeta({
  layout: "admin",
});


//Multiple Select Dropdown
const Options = ref([
  { name: "JavaScript", code: "Js" },
  { name: "Vue", code: "V" },
  { name: "React", code: "R" },
  { name: "Node", code: "N" },
  { name: "Express", code: "E" },
]);
//Status
const statusOptions = ref([
  { name: "Draft", code: "D" },
  { name: "Published", code: "P" },
]);
//Get all data On a Reactive Variable With V-model
const payload = reactive({
  editorData: "",
  title: "",
  metaTitle: "",
  metaDescription: "",
  category: "",
  status:"",
});
const submitForm = () => {
  console.log("Form submitted");
  console.log("Payload:", payload);
};
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

    <!--Input Field-->
    <div class="flex flex-row gap-2">
      <div class="border-2 w-full ">
        <!--Title Input -->
        <div class="flex justify-start flex-col mb-4 text-gray-700 items-start">
          <p class="text-xl font-medium">Title</p>
          <input
            class="w-full h-10 border border-gray-500 focus:outline-none tracking-normal rounded-md px-3 py-2 font-medium text-xl"
            type="text"
            v-model="payload.title"
          />
        </div>
        <!--Category/Image/Status Input -->
        <div class="flex mb-3 w-full">
          <!--Category Selection-->
          <div class="w-2/4 ">
            <p class="text-xl font-medium">Category</p>
              <MultiSelect
                v-model="payload.category"
                display="chip"
                :options="Options"
                optionLabel="name"
                placeholder="Select Cities"
                :maxSelectedLabels="3"
                class="w-full border border-gray-500 md:w-20rem"
              />
    
          </div>
          
          <!--Image Upload-->
          <div class="w-1/4 mx-2">
                <p class="text-xl font-medium">Upload Image</p>
                <FileUpload mode="basic" class="w-full" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />
          </div>

          <!--Status Selection-->
          <div class="w-1/4">
              <p class="text-xl font-medium">Status</p>
              <Dropdown v-model="payload.status" :options="statusOptions" optionLabel="name" placeholder="Select Status" class="w-full" />
          </div>
        </div>
      </div>
    </div>
    <!--Input Field End-->

    <!-- Editor-->
    <TipTapEditor />

    <!--Meta Data-->
    <div class="flex justify-start flex-row gap-2 mt-4 text-gray-700 items-start">
      <!--Meta Tag-->
      <div class="w-full">
        <p class="text-xl font-medium">Meta Tag<span class=" text-sm font-normal italic ">(Comma-separated",")</span></p>
        <input
          class="w-full h-10 border border-gray-500 focus:outline-none tracking-normal rounded-md px-3 py-2 font-medium text-xl"
          type="text"
          v-model="payload.metaTitle"
        />
      </div>
    </div>
    <!--Meta Tag-->
    <div class="flex justify-start flex-col my-2 text-gray-700 items-start">
      <p class="text-xl font-medium">Meta Description <span class=" text-sm font-normal italic ">(At Least 256 Characters)</span></p>
      <textarea
        class="w-full border border-gray-500 h-[120px] focus:outline-none tracking-normal rounded-md px-3 py-2 font-normal text-sm"
        placeholder="Your Meta Description goes here..."
        v-model="payload.metaDescription"
      />
    </div>
    <!--Meta Data End-->
  </div>
</template>

<style scoped></style>
