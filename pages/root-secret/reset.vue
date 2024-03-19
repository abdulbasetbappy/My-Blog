<template>
  <section>
    <!--Container-->
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <!--Content-->
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <!--Title-->
          <h1 class="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Enter Your E-mail
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
            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
                Send E-mail
            </button>
          </form>
          <!--Form End-->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>