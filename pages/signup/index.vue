<template>
  <div class="max-w-lg w-full mx-auto mt-10 shadow-md p-5">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-primary">
        SignUp to your account
      </h2>
    </div>
    <form class="mt-8 space-y-6" @submit.prevent="login">
      <!-- Login Form -->
      <div class="rounded-md shadow-sm">
        <div>
          <label for="name" class="sr-only">Email address</label>
          <input
            id="name"
            name="name"
            type="text"
            v-model="name"
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
            autocomplete="email"
            v-model="email"
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
            v-model="password"
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
            v-model="confirmPassword"
            autocomplete="current-password"
            required
            class="rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Confirm Password"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          @click.prevent="submitForm"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Signup
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "forntend",
});
//data From From
const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

//Submit Form
const submitForm = () => {
  console.log(name.value, email.value, password.value, confirmPassword.value);
};
</script>

<style lang="scss" scoped></style>
