<script setup>
definePageMeta({
  layout: "forntend",
});

// Get id from params
const route = useRoute();
const Blog = ref({});
const mdData = ref('');

// OnMounted get data from API
onMounted(async () => {
  const PostId = route.params.id;
  const response = await fetch(`/api/post/${PostId}`);
  Blog.value = await response.json();
  mdData.value = Blog.value.data.editorContent;
  console.log(Blog.value);
  console.log(mdData.value);
});

const md = ref(mdData);
</script>

<template>
  <div class="view_container">
    <div class="px-16">
      <MDC v-slot="{ data, body }" :value="mdData">
        <MDCRenderer v-if="body" :body="body" :data="data" :prose="true" />
      </MDC>
    </div>




    <div class="w-full flex my-5">
        <div class="rounded overflow-hidden shadow-lg mr-4 flex flex-col h-full bg-white col-span-full">
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
        <div class="rounded overflow-hidden shadow-lg mr-4 flex flex-col h-full bg-white col-span-full">
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
        <div class="rounded overflow-hidden shadow-lg mr-4 flex flex-col h-full bg-white col-span-full">
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
    </div>

  </div>
</template>
