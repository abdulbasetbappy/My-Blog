<template>
  <!-- Table Section End -->
  <div v-if="users.length > 0" class="mt-8">
          <!-- Page Title -->
          <h3 class="text-3xl font-medium text-gray-700">Users</h3>
  
  <!-- Count Section -->
  <div class="mt-4">
    <div class="flex flex-wrap -mx-6">
      <!--Total Category Counter Section-->
      <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
        <div
          class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
        >
          <div class="p-3 bg-teal-600 bg-opacity-75 rounded-full">
            <Icon name="material-symbols:category-rounded" class="h-8 w-8 text-white" />
          </div>

          <div class="mx-5">
            <h4 class="text-2xl font-semibold text-gray-700">{{ totalUsers }}</h4>
            <div class="text-gray-500">Total Users</div>
          </div>
        </div>
      </div>
      <!--Active Blog Counter Section-->
      <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
        <div
          class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
        >
          <div class="p-3 bg-blue-600 bg-opacity-75 rounded-full">
            <Icon name="material-symbols:volunteer-activism-rounded" class="h-8 w-8 text-white" />
          </div>

          <div class="mx-5">
            <h4 class="text-2xl font-semibold text-gray-700">{{ activeUsers }}</h4>
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
            <h4 class="text-2xl font-semibold text-gray-700">{{ inactiveUsers }}</h4>
            <div class="text-gray-500">Inactive</div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="mt-6">
      <div class="flex flex-col mt-3 sm:flex-row">
        <div class="flex">
          <!--Number of Table Data
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
            <Icon name="bx:bxs-chevron-down" class="w-4 h-4 fill-current" />
            </div>
          </div>-->
          <!--Filter By Status Table Data
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
            <Icon name="bx:bxs-chevron-down" class="w-4 h-4 fill-current" />
            </div>
          </div>-->
        </div>
        <!--Search Table Data
        <div class="relative block mt-2 sm:mt-0">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <Icon name="material-symbols:search-rounded" class="w-4 h-4 fill-current" />
          </span>

          <input
            placeholder="Search"
            class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
          />
        </div>-->
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
                  Name
                </th>
                <th
                  class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                >
                  Email
                </th>
                <th
                  class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                >
                  Status
                </th>
              </tr>
            </thead>
            <!--Table Body-->
            <tbody>
              <tr v-for="user in users" :key="user._id">
                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="">
                      <p class="text-gray-900 whitespace-nowrap">
                        {{ user.username }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <p class="text-gray-900 whitespace-nowrap">
                    {{ user.email }}
                  </p>
                </td>
                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
  
                    <!--If user.status is true toggle active-->
                    <label class="relative inline-flex cursor-pointer items-center">
            <input 
              type="checkbox" 
              :id="'switch-' + user._id" 
              class="peer sr-only" 
              :checked="user.active" 
              @change="toggleActive(user)"
            />
            <label for="switch" class="hidden"></label>
            <div 
              :class="{ 'bg-slate-800': user.active, 'bg-slate-200': !user.active }"
              class="peer h-6 w-11 rounded-full border after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"
            ></div>
          </label>

                </td> 
              </tr>
            </tbody>
          </table>
          <!--Pagination Section
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
          </div>-->
        </div>
      </div>
    </div>
  </div>
  <div v-else>
      <p>No users found.</p>
    </div>
</template>

<script setup lang="ts">
const open = ref(false);
const users = ref([]);
// Fetch users from the backend API on component mount
onMounted(async () => {
  try {
    const response = await fetch('/api/user');
    users.value = await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
  }
});

//Total User count
const totalUsers = computed(() => users.value.length);
//Total Active Users count
const activeUsers = computed(() => users.value.filter((user) => user.active).length);
//Total Inactive Users count
const inactiveUsers = computed(() => users.value.filter((user) => !user.active).length);

async function toggleActive(user) {
  try {
    // Toggle the user's active status
    user.active = !user.active;

    // Prepare the request body
    const requestBody = { active: user.active };
    
    // Update user's status in the database
    const response = await fetch(`/api/user/${user._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      // Revert the user's status if update fails
      user.active = !user.active;
      console.error('Failed to update user status:', response.statusText);
    }
    console.log('Updated user status:', user.active);
  } catch (error) {
    console.error('Error updating user status:', error);
  }
}

</script>

<style scoped></style>
