<template>
  <!-- Table Section End -->
  <div class="mt-8">
    <div class="mt-6">
      <div class="flex flex-col mt-3 sm:flex-row">
        <div class="flex">
          <!--Number of Table Data-->
          <div class="relative">
            <select
              class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>

            <div
              class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
            >
            <Icon name="material-symbols:arrow-drop-down" class="w-6 h-6 text-gray-500"/>
            </div>
          </div>
          <!--Filter By Status Table Data-->
          <div class="relative">
            <select
              class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border-t border-b border-r border-gray-400 rounded-r appearance-none sm:rounded-r-none sm:border-r-0 focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
            >
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <div
              class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
            >
            <Icon name="material-symbols:arrow-drop-down" class="w-6 h-6 text-gray-500"/>
            </div>
          </div>
        </div>
        <!--Search Table Data-->
        <div class="relative block mt-2 sm:mt-0">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <Icon name="material-symbols:search" class="w-6 h-6 text-gray-500"/>
          </span>

          <input
            placeholder="Search"
            class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
          />
        </div>
      </div>
      <!--Table Data-->
      <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
        <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
          <table class="min-w-full leading-normal">
            <!--Table Header-->
            <thead>
              <tr>
                <th
                  class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                >
                  Blog Title
                </th>
                <th
                  class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                >
                  Category
                </th>
                <th
                  class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                >
                  Published
                </th>
                <th
                  class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                >
                  Status
                </th>
                <th
                  class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                >
                  Edit
                </th>
              </tr>
            </thead>
            <!--Table Body-->
            <tbody>
              <tr v-for="(u, index) in paginatedTableData" :key="index">
                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="">
                      <p class="text-gray-900 whitespace-nowrap">
                        {{ u.name }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <p class="text-gray-900 whitespace-nowrap">
                    {{ u.role }}
                  </p>
                </td>
                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <p class="text-gray-900 whitespace-nowrap">
                    {{ u.created }}
                  </p>
                </td>
                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <span
                    class="relative inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                    >{{ u.status }}</span
                  >
                </td>
                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <!--Edit Button-->
                  <button class="mx-1">
                    <Icon name="material-symbols:edit-square-outline-rounded" class="w-6 h-6 text-teal-600"/>
                  </button>
                  <!--Delete Button-->
                  <button class="mx-1" @click="open = true">
                    <Icon name="material-symbols:delete-outline-rounded" class="w-6 h-6 text-red-600"/>
                  </button>
                  <!--Modal Section-->
                  <div
                    :class="`modal ${
                      !open && 'opacity-0 pointer-events-none'
                    } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
                  >
                    <div
                      class="absolute w-full h-full bg-slate-400 opacity-5 modal-overlay"
                      @click="open = false"
                    />

                    <div
                      class="z-50 w-96 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
                    >
                      <!-- Add margin if you want to see some of the overlay behind the modal -->
                      <div class="px-6 pt-10 pb-5 relative modal-content">
                        <!-- Close Icon -->
                        <div
                          class="z-50 absolute top-5 right-5 cursor-pointer modal-close"
                          @click="open = false"
                        >
                          <svg
                            class="text-gray-600 w-8 h-8 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                          >
                            <path
                              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                            />
                          </svg>
                        </div>

                        <!-- Body -->
                        <div>
                          <div class="flex justify-center">
                            <svg
                              class="h-36 w-36 text-red-600"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 12V17"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M14 12V17"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4 7H20"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <p class="text-2xl text-center font-bold">
                            Delete Category
                          </p>
                          <p class="text-sm text-center text-gray-500">
                            Are you sure you want to delete this category?
                          </p>
                        </div>

                        <!-- Footer -->
                        <div class="flex justify-center mt-4">
                          <button
                            class="px-8 py-2 text-lg mr-6 text-white bg-teal-600 rounded-lg hover:bg-teal-500 focus:outline-none"
                            @click="open = false"
                          >
                            No
                          </button>
                          <button
                            class="px-8 py-2 text-lg tracking-wide text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none"
                            @click="open = false"
                          >
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
          <!--Pagination Section-->
          <div
            class="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between"
          >
            <span class="text-xs text-gray-900 xs:text-sm"
              >Showing 1 to 4 of 50 Entries</span
            >

            <div class="inline-flex mt-2 xs:mt-0">
              <button
                class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400"
              >
                Prev
              </button>
              <button
                class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTableData } from "../composables/useTableData";
const { paginatedTableData } = useTableData();
const open = ref(false);
</script>

<style scoped></style>
