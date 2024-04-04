<script setup>
import bannar from "../assets/banner.jpg";
definePageMeta({
  layout: "forntend",
});

const newpost = [
  {
    id: 6,
    img: bannar,
    label: "In Label",
    title: "Ini Adalah Judul Artikel",
    user: "Ridho Satriawan",
    description:
      "Apa itu HTML? Buat Kamu yang pernah membuat sebuah website pastinya sudah tidak asing lagi dengan yang namaya HTML.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo illum aperiam in quisquam quos saepe iusto adipisci autem repellendus eius",
    datePost: "31 Agustus 2024",
    view: "316",
  },
];
// Only show 100 letters in description
const truncateDescription = (description) => {
  if (description.length > 20) {
    return description.slice(0, 20) + "...";
  }
  return description;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  if (Math.ceil(scrolled) === scrollable) {
    console.log("You've reached the bottom!");
  }
};
</script>

<template>
  <div class="container">
    <div>
      <div
        class="relative flex justify-center items-center"
        v-for="post in newpost"
        :key="post.id"
      >
        <!-- Image -->
        <img class="rounded-lg w-full" src="../assets/banner.jpg" />
        <!-- Overlay -->
        <div
          class="absolute top-0 left-0 w-full h-full rounded-lg bg-gray-300 opacity-60"
        ></div>
        <!-- Content -->
        <div
          class="absolute md:top-[40%] md:left-10 text-start w-full md:w-1/2 p-5"
        >
          <span class="text-black text-sm">{{ post.label }}</span>
          <h2 class="text-sm md:text-xl font-bold md:mt-2">{{ post.title }}</h2>
          <span class="font-bold text-gray-700">By</span> {{ post.user }}
          <p class="text-black text-sm md:mt-2">
            {{ truncateDescription(post.description) }}
            <NuxtLink
              to="/blogs/Details"
              class="text-black font-bold cursor-pointer"
              >See more
            </NuxtLink>
          </p>
          <div class="flex items-center justify-between md:my-5">
            <div class="flex items-center">
              <Icon name="system-uicons:calendar-date"></Icon>
              <p class="text-black text-sm ml-2">{{ post.datePost }}</p>
              <span class="mx-1">|</span>
              <Icon name="lets-icons:view-fill"></Icon>
              <p class="text-black text-sm ml-2">{{ post.view }}</p>
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
