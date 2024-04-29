<script setup>
definePageMeta({
  layout: "forntend",
  middleware: "guest",
});
//data From From
const form = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const isLoading = ref(false);
//Submit Form
async function handleFormSubmit() {
  try {
    isLoading.value = true;
    await useFetch("/api/user/signup", {
    method: "POST",
    body: form,
});
  } catch (e) {
    console.log(e);
  } finally {
    isLoading.value = false;
  }
}
</script>
<template>
  <div class="max-w-lg w-full mx-auto mt-10 shadow-md p-5">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-primary">
        SignUp to your account
      </h2>
    </div>
    <form class="mt-8 space-y-6">
      <!-- Login Form -->
      <div class="rounded-md shadow-sm">
        <div>
          <label for="name" class="sr-only">Email address</label>
          <input
            id="name"
            name="name"
            type="text"
            v-model="form.username"
            required
            class="relative block w-full px-3 py-2 border rounded-md border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label for="email" class="sr-only">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            unique=true
            autocomplete="email"
            v-model="form.email"
            required
            class="rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <div class="mt-2">
          <label for="password" class="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            v-model="form.password"
            required
            class="rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
        <div class="mt-2">
          <label for="password" class="sr-only">Confirm Password</label>
          <input
            id="password"
            name="password"
            type="password"
            v-model="form.confirmPassword"
            autocomplete="current-password"
            required
            class="rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Confirm Password"
          />
          <!--If Password Is Not Match-->
          <div v-if="form.password !== form.confirmPassword" class="text-red-500 text-xs mt-1">
            Passwords do not match
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          :disabled="isLoading"
          @click.prevent="handleFormSubmit"
          :class="{
          'opcatiy-20 cursor-not-allowed': isLoading,
        }"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Signup
        </button>
      </div>
    </form>
  </div>
</template>


<style lang="scss" scoped></style>
