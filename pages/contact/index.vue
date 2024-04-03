<style lang="scss" scoped></style>
<template>
  <div class="container mx-auto py-8">
    <div class="max-w-lg mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <div class="py-4 px-6">
        <h2 class="text-xl font-semibold text-primary mb-5 text-center">
          Contact Us
        </h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="name" class="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-primary"
            />
          </div>
          <div>
            <label for="subject" class="block text-gray-700">Subject</label>
            <input
              type="text"
              id="name"
              name="name"
              class="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-primary"
            />
          </div>
          <div>
            <label for="email" class="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-primary"
            />
          </div>
          <div>
            <label for="number" class="block text-gray-700">Number</label>
            <input
              type="number"
              id="number"
              name="number"
              class="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-primary"
            />
          </div>
          <div>
            <label for="message" class="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-primary"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              class="w-full px-4 py-2 bg-primary text-white rounded-md transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: "forntend",
});
</script>

<style>
/* No custom styles needed, Tailwind provides all the necessary styles */
</style>
