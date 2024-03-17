<script lang="ts" setup>
</script>
<template>
    
    <div class="w-full bg-gray-50">
        <div class="w-full border-b fixed bg-gray-50 h-10 flex justify-between items-center">
            <div class="flex">
                <img class="w-10 p-1 ml-2" src="#"/>
                <h1 class="text-2xl ml-1 mt-0 font-bold">Blog</h1>
            </div>
            <div class="flex ">
                <div class="text-xl">Welcome back <span class="italic text-sky-500">Md Majadul Islam</span></div>
                <NuxtLink class="p-1 px-2 mx-1  rounded-md" to="/dashboard">Dashboard</NuxtLink>
                <NuxtLink class="p-1 px-2 mx-1  rounded-md" to="/dashboard">Logout</NuxtLink>
            </div>
        </div>
        <div class="w-full flex">
            <div class=" min-h-screen pt-12 bg-gray-100  w-1/6 flex">asdf</div>
            <slot/>
        </div>
        <div class="footer border-t border-gray-300 fixed bottom-0 right-0 z-10 bg-gray-200 p-2  w-5/6">footer</div>
    </div>

</template>