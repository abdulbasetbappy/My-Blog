<script lang="ts" setup>
import Navbar from '~/components/layouts/frontend/Navbar.vue';
</script>
<template>
<div class="w-full min-h-full">
    <Navbar />
    <div class="content mt-16 mx-4">
        <div class="w-full flex mt-2">
            <div class="w-3/4 pr-3">
                <div>
                    <img class="w-full mb-2" src="../assets/top.png" alt="" />
                </div>
                <slot />
            </div>

            <!-- right side bar -->
            <div class="w-1/4">right</div>
        </div>
        
    </div>
    
    

</div>


  

  <!-- layouts -->
  <div class="w-full flex-wrap-reverse flex justify-between">
    <div class="w-full md:w-3/4 px-5 mx-auto my-12">
      <!-- Content for the main area -->
      <slot />
    </div>
    <div class="min-h-screen px-5 bg-gray-100 w-full md:w-1/4">
      <!-- Content for the right sidebar -->
      <SideCard />
    </div>
  </div>
  <div class="footer border-t text-center border-gray-300 bg-primary text-white font-normal p-2 w-full">
    Copyright@KangTutor
  </div>
</template>
