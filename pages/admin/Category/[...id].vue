<template>
  <div>
    <!-- breadcrumb -->
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
      <ol class="list-none p-0 inline-flex">
        <li class="flex items-center text-blue-500">
          <nuxtLink to="/admin" class="text-gray-700">Admin</nuxtLink>
          <Icon name="uil:arrow-right" />
        </li>
        <li class="flex items-center">
          <nuxtLink to="/Admin/Category" class="text-gray-700">Category</nuxtLink>
        </li>
        <li class="flex items-center text-blue-500">
          <Icon name="uil:arrow-right" />
          <nuxtLink to="/admin/blogs/category" class="text-gray-700">Update</nuxtLink>
        </li>
      </ol>
    </nav>
    <!-- breadcrumb end -->

    <!-- Page Title -->
    <h3 class="text-3xl font-medium text-gray-700">Update Category</h3>

    <!--Category details Input-->
    <form class="max-w-[500px] h-auto mt-16 p-6 rounded-xl m-auto bg-slate-300" @submit.prevent="handleSubmit">
      <h1 class="text-center font-semibold">Update Now</h1>
      <div class="card my-4 flex gap-2 justify-center items-center">
        <!--Category Input-->
        <div class="w-[70%]">
          <label class="font-medium" for="Category">Category Name</label>
          <InputText class="h-10 px-2 outline-none w-full" name="Category" type="text" placeholder="New Category Name" v-model="categoryName" />
        </div>

        <!--Category Status-->
        <div class="flex w-[30%] p-1 mt-4 flex-row justify-around items-center">
          <p class="font-medium">Status</p>
          <label class="flex cursor-pointer select-none items-center">
            <div class="relative">
              <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
              <div class="block h-8 w-14 rounded-full bg-[#E5E7EB]"></div>
              <div :class="{ 'translate-x-full !bg-primary': isChecked }" class="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition"></div>
            </div>
          </label>
        </div>
      </div>

      <button class="bg-teal-500 w-full py-3 rounded-xl text-xl font-semibold text-teal-50" type="submit">
        Update Category
      </button>
    </form>
  </div>
  <div class="card flex justify-content-center">
    <Toast />
  </div>
</template>

<script setup lang="ts">
//Import Module
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import { useCategoryStore } from '~/store/categoryStore';

//Initialize Variables
const categoryName = ref('');
const isChecked = ref(false);

//Toggle Button
const handleCheckboxChange = () => {
  isChecked.value = !isChecked.value;
};

//Define Page Meta
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
});

//Use Route Toast and Store
const route = useRoute();
const router = useRouter();
const toast = useToast();
const categoryStore = useCategoryStore();

//On Mounted Fetch Category By Id
onMounted(async () => {
  const categoryId = route.params.id;
  await categoryStore.fetchCategoryById(categoryId.toString());
  //Replace the category Details
  categoryName.value = categoryStore.category.categoryName;
  isChecked.value = categoryStore.category.status;
});

//Handle Submit
const handleSubmit = async () => {
  //Get Id From Route Params
  const categoryId = route.params.id;
  //Update Category
  const updatedCategory = {
    categoryName: categoryName.value,
    status: isChecked.value,
  };
  //Show Toast and Push to Category Details Page
  const result = await categoryStore.updateCategory(categoryId.toString(), updatedCategory);
    if (result.success) {
    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Category Updated Successfully',
      life: 2000,
    });
    categoryName.value = '';
    isChecked.value = false;
    setTimeout(() => {
    //push to Admin/Category
    router.push('/admin/category');
    }, 2500);
  } else {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Category Not Updated',
      life: 2500,
    });
  }

};
</script>

<style scoped></style>
