<template>
  <div class="mt-2">
    <div class="">
      <!--Table Data-->
      <div class="px-4 py-2 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
        <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
          <table class="min-w-full leading-normal">
            <!--Table Header-->
            <thead>
              <tr>
                <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                  Category
                </th>
                <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                  Created By
                </th>
                <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                  Status
                </th>
                <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                  Edit
                </th>
              </tr>
            </thead>
            <!--Table Body-->
            <tbody>
              <tr v-for="(category, index) in categories" :key="index">
                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="">
                      <p class="text-gray-900 whitespace-nowrap">
                        {{ category.categoryName }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <p class="text-gray-900 whitespace-nowrap">
                    {{ category.createdBy }}
                  </p>
                </td>
                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <span v-if="category.status" class="relative inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    Active
                  </span>
                  <span v-if="!category.status" class="relative inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                    Inactive
                  </span>
                </td>
                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <!--Edit Button-->
                  <button class="mx-1" @click="handleUpdate(category._id)">
                    <Icon name="bx:bxs-edit" class="h-6 w-6 text-teal-600" />
                  </button>
                  <!--Delete Button-->
                  <button class="mx-1" @click="deleteCategoryID(category._id)">
                    <Icon name="material-symbols:delete-outline-rounded" class="h-6 w-6 text-red-600" />
                  </button>
                  <!--Modal Section-->
                  <div :class="`modal ${!open && 'opacity-0 pointer-events-none'} z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`">
                    <div class="absolute w-full h-full bg-slate-400 opacity-5 modal-overlay" @click="open = false" />
                    <div class="z-50 w-96 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md">
                      <div class="px-6 pt-10 pb-5 relative modal-content">
                        <!-- Close Icon -->
                        <div class="z-50 absolute top-5 right-5 cursor-pointer modal-close" @click="open = false">
                          <svg class="text-gray-600 w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                          </svg>
                        </div>
                        <!-- Body -->
                        <div>
                          <div class="flex justify-center">
                            <svg class="h-36 w-36 text-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 12V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M14 12V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M4 7H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                          <p class="text-2xl text-center font-bold">Delete Category</p>
                          <p class="text-sm text-center text-gray-500">
                            Are you sure you want to delete this category?
                          </p>
                        </div>
                        <!-- Footer -->
                        <div class="flex justify-center mt-4">
                          <button class="px-8 py-2 text-lg mr-6 text-white bg-teal-600 rounded-lg hover:bg-teal-500 focus:outline-none" @click="open = false">
                            No
                          </button>
                          <button class="px-8 py-2 text-lg tracking-wide text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none" @click="deleteCategory(IdDelete)">
                            Yes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--Modal Section End-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="card flex justify-content-center">
        <Toast />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCategoryStore } from '~/store/categoryStore';
import { useToast } from 'primevue/usetoast';

const open = ref(false);
const IdDelete = ref<string | null>(null);

const categoryStore = useCategoryStore();

onMounted(async () => {
  await categoryStore.fetchCategories();
});

const categories = computed(() => categoryStore.categories);

const deleteCategoryID = (id: string) => {
  IdDelete.value = id;
  open.value = true;
};
const toast = useToast();
const deleteCategory = async (id: string) => {
  if (id) {
    await categoryStore.deleteCategory(id);
    open.value = false;
    toast.add({ severity: 'success', summary: 'Success', detail: 'Category Deleted Successfully', life: 3000 });
  }else{
    toast.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong', life: 3000 });
  }
};

const router = useRouter();
const handleUpdate = (id: string) => {
  router.push(`/admin/category/${id}`);
};
</script>

<style scoped></style>
