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
          <nuxtLink to="/Admin/Category" class="text-gray-600">Category</nuxtLink>
        </li>
      </ol>
    </nav>
    <!-- breadcrumb end -->

    <!-- Page Title -->
    <h3 class="text-3xl font-medium text-gray-700">Category</h3>

    <!-- Count Section -->
    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <!--Total Category Counter Section-->
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-teal-600 bg-opacity-75 rounded-full">
              <svg
                class="w-8 h-8 text-white"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_429_11052)">
                  <circle
                    cx="17"
                    cy="7"
                    r="3"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle
                    cx="7"
                    cy="17"
                    r="3"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 14H20V19C20 19.5523 19.5523 20 19 20H15C14.4477 20 14 19.5523 14 19V14Z"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 4H10V9C10 9.55228 9.55228 10 9 10H5C4.44772 10 4 9.55228 4 9V4Z"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_429_11052">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">21</h4>
              <div class="text-gray-500">Total Category</div>
            </div>
          </div>
        </div>
        <!--Active Blog Counter Section-->
        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-blue-600 bg-opacity-75 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m10.575 19.575l-9.05-9.05q-.3-.3-.45-.675t-.15-.75q0-.425.175-.812t.525-.688Q3.675 5.825 6.5 4.913T12 4q2.675 0 5.5.913T22.375 7.6q.35.3.525.688t.175.812q0 .375-.15.75t-.45.675l-9.05 9.05q-.3.3-.675.45t-.75.15q-.375 0-.75-.15t-.675-.45"
                />
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">19</h4>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 18.425L17.6 19.8q-.275.275-.687.288T16.2 19.8q-.275-.275-.275-.7t.275-.7l1.4-1.4l-1.4-1.4q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.4 1.4l1.4-1.4q.275-.275.687-.275t.713.275q.3.3.3.713t-.3.712L20.425 17l1.375 1.4q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275zm.225-7.5h-.2q-2.525 0-4.3 1.775T12.95 17v.2q.025.45.1.913t.225.887q.075.25.038.488t-.213.412q-.225.225-.512.338T12 20.35q-.3 0-.587-.112T10.9 19.9l-9.325-9.325q-.325-.325-.475-.7t-.15-.8q0-.425.175-.85t.55-.725q2.2-1.725 4.85-2.612T12 4q2.825 0 5.475.888t4.85 2.612q.375.275.55.7t.175.85q0 .425-.15.812t-.475.713l-.5.5q-.2.2-.425.238t-.475-.063q-.425-.15-.875-.225t-.925-.1"
                />
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">2</h4>
              <div class="text-gray-500">Inactive</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Button Section-->
    <div class="flex flex-row justify-between my-5">
      <!-- Add Category Button -->
      <div>
        <!-- Add Category Modal Button -->
        <button
          class="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-teal-600 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500"
          @click="modalOpen"
        >
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                stroke="#fff"
                stroke-width="2.4"
                stroke-linecap="round"
              ></path>
              <path
                d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                stroke="#fff"
                stroke-width="2.4"
                stroke-linecap="round"
              ></path>
            </g>
          </svg>
          <span class="pl-2">Create Category</span>
        </button>
        <!-- Add Category Modal Content -->
        <CreateCategoryModal :isOpen="isOpenPopup" :closeModal="modalClose" />
      </div>
      <!-- Add Category Modal End -->

      <!--Refresh Button-->
      <button
        class="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-teal-600 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500"
        @click="refreshPage"
      >
        <svg
          class="w-5 h-5 mx-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="mx-1">Refresh</span>
      </button>
      <!--Refresh Button End-->
    </div>
    <!-- Button Section End-->

    <CategoryDetailsTable />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
//Popup
const isOpenPopup = ref(false);
const modalOpen = () => {
  isOpenPopup.value = true;
};
const modalClose = () => {
  isOpenPopup.value = false;
};
//refresh page
const refreshPage = () => {
  location.reload();
};
</script>

<style scoped></style>
