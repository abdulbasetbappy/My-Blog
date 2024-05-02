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
            <nuxtLink to="/admin/blogs/category" class="text-gray-700"
              >Update</nuxtLink
            >
          </li>
        </ol>
      </nav>
      <!-- breadcrumb end -->
  
      <!-- Page Title -->
      <h3 class="text-3xl font-medium text-gray-700">Update Category</h3>
  
      <!--Category details Input-->
      <form
        class="max-w-[500px] h-auto mt-16 p-6 rounded-xl m-auto bg-slate-300"
        action=""
      >
        <h1 class="text-center font-semibold">Update Now</h1>
        <!--Parent Category-->
        <div class="card my-4 flex justify-center flex-col">
          <label class="font-medium" for="ParentCategory"
            >Parent Category
            <span class="italic font-normal text-sm text-gray-500"
              >(optional)</span
            >
          </label>
          <Dropdown
            v-model="parenCategory"
            :options="cities"
            optionLabel="name"
            optionValue="name"
            name="ParentCategory"
            placeholder="Select Parent Category"
            class="w-full outline-none md:w-14rem"
          />
        </div>
        <div class="card my-4 flex gap-2 justify-center items-center">
          <!--Category Input-->
          <div class="w-[70%]">
            <label class="font-medium" for="Category">Category Name</label>
            <InputText
              class="h-10  px-2 outline-none w-full"
              name="Category"
              type="text"
              placeholder="New Category Name"
              v-model="categoryName"
            />
          </div>
  
          <!--Category Status-->
          <div
            class="flex w-[30%] p-1 mt-4 flex-row justify-around items-center"
          >
          <p class="font-medium">Status</p>
          <label class="flex cursor-pointer select-none items-center">
            <div class="relative">
              <input
                type="checkbox"
                class="sr-only"
                @change="handleCheckboxChange"
              />
              <div class="block h-8 w-14 rounded-full bg-[#E5E7EB]"></div>
              <div
                :class="{ 'translate-x-full !bg-primary': isChecked }"
                class="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition"
              ></div>
            </div>
          </label>
        </div>
  
        </div>
  
        <button
          class="bg-teal-500 w-full py-3 rounded-xl text-xl font-semibold text-teal-50"
          type="submit"
          @click.prevent="handleSubmit"
        >
          Update Category
        </button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  //Dropdown
  import Dropdown from "primevue/dropdown";
  const cities = ref([
    { name: "VueJs" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Nuxt" },
    { name: "React" },
    { name: "Frontend" },
    { name: "Backend" },
    { name: "NodeJs" },
    { name: "ExpressJs" },
  ]);
  const parenCategory = ref();
  //Input- Category name
  const categoryName = ref();
  //Switch Input - Category Active or Inactive
  const isChecked = ref(false);
  const handleCheckboxChange = () => {
    isChecked.value = !isChecked.value;
  };
  definePageMeta({
    layout: "admin",
    middleware: 'auth'
  });

  //onmounted get Individual category details from (api/category/id)
  const Category = ref([]);

  const route = useRoute(); // Get the category ID from route params
  //on Mounted Fetch Category data From /api/category route
  onMounted(async () => {
    try {
      const categoryId = route.params.id[0];
        const response = await fetch(`/api/category/${categoryId}`);
        Category.value = await response.json();
        console.log(Category.value.data._id);
        //change all inputs default value of Category.value to default value

        categoryName.value = Category.value.data.categoryName;
        parenCategory.value = Category.value.data.parenCategory;
        isChecked.value = Category.value.data.status;

      } catch (error) {
        console.error('Error fetching category:', error);
      }
  });

  //get all edited finalvalues and hndle submit
  async function handleSubmit () {
    const from = {
      categoryName: categoryName.value,
      status: isChecked.value,
      parenCategory: parenCategory.value,
    };
    console.log(from);
    //Sent data with body on /api/category/add route with put methods
    await fetch(`/api/category/${Category.value.data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(from),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  </script>
  
  <style scoped></style>
  