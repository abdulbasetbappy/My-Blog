<template>
  <section>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <!--Container Section-->
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <!-- Page Title -->
          <h1
            class="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Reset Your Password
          </h1>
          <!-- Form  Start-->
          <form class="space-y-4 md:space-y-6">

            <!-- --- --- OTP Verification Section --- --- -->
            <div>
              <!--Label-->
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Your OTP
              </label>
              <!--Input-->
              <div
                class="flex flex-row items-center justify-between mx-auto w-full max-w-xs"
              >
              <!--First Input-->
                <div class="w-14 h-14">
                  <input
                    class="w-full h-full flex flex-col items-center justify-center text-white text-center px-5 outline-none rounded-xl border border-gray-500 text-xl bg-gray-800 focus:ring-1 focus:border-none ring-teal-600"
                    type="text"
                    name=""
                    id=""
                    placeholder="X"
                    maxlength="1"
                  />
                </div>
              <!--Second Input-->
                <div class="w-14 h-14">
                  <input
                    class="w-full h-full flex flex-col items-center text-white justify-center text-center px-5 outline-none rounded-xl border border-gray-500 text-xl bg-gray-800 focus:border-none focus:ring-1 ring-teal-600"
                    type="text"
                    name=""
                    id=""
                    placeholder="X"
                    maxlength="1"
                  />
                </div>
              <!--Third Input-->
                <div class="w-14 h-14">
                  <input
                    class="w-full h-full flex flex-col items-center text-white justify-center text-center px-5 outline-none rounded-xl border border-gray-500 text-xl bg-gray-800 focus:ring-1 focus:border-none ring-teal-600"
                    type="text"
                    name=""
                    id=""
                    placeholder="X"
                    maxlength="1"
                  />
                </div>
              <!--Fourth Input-->
                <div class="w-14 h-14">
                  <input
                    class="w-full h-full flex flex-col items-center text-white justify-center text-center px-5 outline-none rounded-xl border border-gray-500 text-xl bg-gray-800 focus:border-none focus:ring-1 ring-teal-600"
                    type="text"
                    name=""
                    id=""
                    placeholder="X"
                    maxlength="1"
                  />
                </div>
              </div>
            </div>

            <!-- --- --- New Password Section ---  --- -->
            <div class="relative">
              <!--Label-->
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >New Password</label
              >
              <!--Input-->
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                id="password"
                placeholder="Enter New Password"
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

            <!-- --- --- Confirm Password Section ---  --- -->
            <div class="relative">
              <!--Label-->
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Confirm Password</label
              >
              <!--Input-->
              <input
                v-model="ConfirmPassword"
                :type="ConShowPassword ? 'text' : 'password'"
                name="password"
                id="password"
                placeholder="Confirm Your Password"
                class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-teal-500"
                required
              />
              <!--Toggle of Show/Hide Password-->
              <div
                class="absolute top-8 right-0 z-30 inset-y-1 flex items-center px-4"
              >
                <button
                  type="button"
                  @click="toggleConPasswordVisibility"
                  class="z-30 focus:outline-none"
                >
                  <svg
                    :class="{
                      hidden: ConShowPassword,
                      block: !ConShowPassword,
                    }"
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
                    :class="{
                      block: ConShowPassword,
                      hidden: !ConShowPassword,
                    }"
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

            <!-- --- --- Submit Button ---  --- -->
            <button
              type="submit"
              class="w-full text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Reset Password
            </button>
          </form>
          <!-- Form End -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const password = ref("");
const ConfirmPassword = ref("");
const showPassword = ref(false);
const ConShowPassword = ref(false);

//Toggle Password For New Password 
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
//Toggle Password For Confirm Password
const toggleConPasswordVisibility = () => {
  ConShowPassword.value = !ConShowPassword.value;
};
</script>

<style scoped></style>
