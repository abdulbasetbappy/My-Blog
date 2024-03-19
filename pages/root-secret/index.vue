<template>
  <section>
    <!--Container-->
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0"
    >
      <!--Content-->
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <!--Title-->
          <h1
            class="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Welcome back
          </h1>
          <!--Form Start-->
          <form class="space-y-4 md:space-y-6">
            <!-- Email Input Section -->
            <div>
              <!--Label-->
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Email
              </label>
              <!--Input-->
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-teal-500"
                placeholder="name@company.com"
                required
              />
            </div>

            <!-- Password Input Section -->
            <div class="relative">
              <!--Label-->
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <!--Input-->
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-teal-500"
                required
              />
              <!--Toggle of Show/Hide Password-->
              <div
                class="absolute top-8 right-0 z-30 inset-y-1 flex items-center px-4"
              >
                <button
                  type="button"
                  @click="togglePasswordVisibility"
                  class="z-30 focus:outline-none"
                >
                  <svg
                    :class="{ hidden: showPassword, block: !showPassword }"
                    aria-hidden="true"
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#14b8a6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                  <svg
                    :class="{ block: showPassword, hidden: !showPassword }"
                    aria-hidden="true"
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#14b8a6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Remember Me and Forgot Password Section -->
            <div class="flex items-center justify-between">
              <!--Remember Section-->
              <div class="flex items-start">
                <!--Remember Checkbox-->
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 accent-teal-500 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <!--Remember Label-->
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300"
                    >Remember me</label
                  >
                </div>
              </div>
              <!--Forgot Password Link-->
              <nuxt-link
                to="/root-secret/reset"
                class="text-sm font-medium text-white hover:underline dark:text-primary-500"
                >Forgot password?</nuxt-link
              >
            </div>
            <!-- Sign In Button -->
            <button
              type="submit"
              class="w-full text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
          </form>
          <!--Form End-->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const password = ref("");
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

<style scoped></style>
