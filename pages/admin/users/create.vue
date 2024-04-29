<template>
  <div>
    <!-- breadcrumb -->
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
      <ol class="list-none p-0 inline-flex">
        <li class="flex items-center text-blue-500">
          <NuxtLink href="#" class="text-gray-700">Admin</NuxtLink>
          <Icon name="uil:arrow-right" />
        </li>

        <li class="flex items-center">
          <NuxtLink href="#" class="text-gray-700">Users</NuxtLink>
        </li>
        <li class="flex items-center text-blue-500">
          <Icon name="uil:arrow-right" />
          <NuxtLink href="#" class="text-gray-700">Add New</NuxtLink>
        </li>
      </ol>
    </nav>
    <!-- breadcrumb end -->
    <section class="flex justify-center items-center p-6">
        <div>
          <form class=" h-auto w-[400px] bg-slate-300 p-6 rounded-md">
            <div >
              <h1 class="font-bold" >Add New User</h1>
            </div>
            <div class="my-2">
              <label for="text">Name</label>
              <input v-model="form.username" class="w-full outline-none p-2 rounded" type="text" name="text"placeholder="Enter Your Name">
            </div>
            <div class="my-2">
              <label for="email">Email</label>
              <input v-model="form.email" class="w-full outline-none p-2 rounded" name="email" type="email" placeholder="Enter Email">
            </div>
            <div class="my-2">
              <label for="password">Password</label>
              <input v-model="form.password" class="w-full outline-none p-2 rounded" type="password" name="password" placeholder="Enter Password">
              <div>
              </div>
            </div>
            <div class="my-2">
              <label for="password">Confirm Password</label>
              <input v-model="form.confirmPassword" class="w-full outline-none p-2 rounded" type="password" name="password" placeholder="Confirm Password">
              <div>
              </div>
            </div>
            <button @click.prevent="handleFormSubmit" class="bg-teal-500 text-white p-2 rounded my-2 w-full">Add User</button>
          </form>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "guest",
});
const form = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
})
//Submit Form
async function handleFormSubmit() {
  try {

    await useFetch("/api/user/signup", {
    method: "POST",
    body: form,
});
  } catch (e) {
    console.log(e);
  }
}
</script>

<style scoped></style>
