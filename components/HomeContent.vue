<script setup>



</script>

<template>
    <div class="container">
        <div>
            <div class="relative flex justify-center items-center" v-for="Blog in Blogs" :key="Blog._id">
                <!-- Image -->
                <img class="rounded-lg w-full" src="../assets/banner.jpg" />
                <!-- Overlay -->
                <div class="absolute top-0 left-0 w-full h-full rounded-lg bg-gray-300 opacity-60"></div>
                <!-- Content -->
                <div class="absolute md:top-[40%] md:left-10 text-start w-full md:w-1/2 p-5">
                    <span class="text-black text-sm">{{ Blog.status }}</span>
                    <h2 class="text-sm md:text-xl font-bold md:mt-2">{{ Blog.title }}</h2>
                    <span class="font-bold text-gray-700">By</span> {{  }}
                    <p class="text-black text-sm md:mt-2">
                        {{ Blog.description }}
                        <NuxtLink to="/blogs/Details" class="text-black font-bold cursor-pointer">See more
                        </NuxtLink>
                    </p>
                    <div class="flex items-center justify-between md:my-5">
                        <div class="flex items-center">
                            <Icon name="system-uicons:calendar-date"></Icon>
                            <p class="text-black text-sm ml-2">{{ Blog.createdAt }}</p>
                            <span class="mx-1">|</span>
                            <Icon name="lets-icons:view-fill"></Icon>
                            <p class="text-black text-sm ml-2">{{  }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- post -->
            <Posts />
        </div>
    </div>
</template>
<style scoped>
/* Add flex styles to menu items */
</style>
