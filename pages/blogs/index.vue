<script setup>
definePageMeta({
  layout: "forntend",
});
</script>
<template>
  <div>
    <div class="flex flex-col justify-center">
      <!-- card 1 -->

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
        <!-- card 2 -->
        <div class="rounded overflow-hidden shadow-lg mx-auto flex flex-col h-full bg-white col-span-full">
            <img src="../../assets/buttom.jpg" alt="product thumb" class="w-full h-full"/>

            <div class="px-6 py-4 flex-grow">
                <div class="flex flex-row">
                    <p class="font-bold text-xl mb-2">This is a title</p>
                </div>

                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
                molestias, veniam officiis et, quaerat, nam non obcaecati facilis
                reiciendis delectus id voluptate? Cumque quam consequuntur amet
                atque a dolore laboriosam. </p>
                <span class="text-green-500 cursor-pointer" >
                    <NuxtLink to="/blog/Details">...See more</NuxtLink>
                </span>
                
            </div>
        </div>
        <!-- card 3 -->
        <div
          class="rounded overflow-hidden shadow-lg mx-auto flex flex-col h-full bg-white"
        >
          <img
            src="../../assets/buttom.jpg"
            alt="product thumb"
            class="w-full h-auto"
          />

          <div class="px-6 py-4 flex-grow">
            <p class="font-bold text-xl mb-2">This is a title</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              molestias, veniam officiis et, quaerat, nam non obcaecati facilis
              reiciendis delectus id voluptate? Cumque quam consequuntur amet
              atque a dolore laboriosam.<span
                class="text-green-500 cursor-pointer"
                ><NuxtLink to="/blogDetails">...See more</NuxtLink></span
              >
            </p>
          </div>
        </div>
        <!-- card 4 -->
        <div
          class="rounded overflow-hidden shadow-lg mx-auto flex flex-col h-full bg-white"
        >
          <img
            src="../../assets/buttom.jpg"
            alt="product thumb"
            class="w-full h-auto"
          />

          <div class="px-6 py-4 flex-grow">
            <p class="font-bold text-xl mb-2">This is a title</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              molestias, veniam officiis et, quaerat, nam non obcaecati facilis
              reiciendis delectus id voluptate? Cumque quam consequuntur amet
              atque a dolore laboriosam.<span
                class="text-green-500 cursor-pointer"
                ><NuxtLink to="/blogDetails">...See more</NuxtLink></span
              >
            </p>
          </div>
        </div>
      </div>
      <!-- card 5 -->
    </div>
  </div>
</template>

<style scoped></style>
