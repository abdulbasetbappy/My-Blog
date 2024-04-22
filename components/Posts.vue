<script setup>
import imagepost from "../assets/postImage.jpg";
const posts = [
  {
    id: 1,
    img: imagepost,
    label: "In Label",
    title: "Ini Adalah Judul Artikel",
    user: "Ridho Satriawan",
    description:
      "Apa itu HTML? Buat Kamu yang pernah membuat sebuah website pastinya sudah tidak asing lagi dengan yang namaya HTML.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo illum aperiam in quisquam quos saepe iusto adipisci autem repellendus eius",
    datePost: "31 Agustus 2024",
    view: "22",
  },
  {
    id: 2,
    img: imagepost,
    label: "In Label",
    title: "Ini Adalah Judul Artikel",
    user: "Ridho Satriawan",
    description:
      "Apa itu HTML? Buat Kamu yang pernah membuat sebuah website pastinya sudah tidak asing lagi dengan yang namaya HTML.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo illum aperiam in quisquam quos saepe iusto adipisci autem repellendus eius",
    datePost: "31 Agustus 2024",
    view: "332",
  },
  {
    id: 3,
    img: imagepost,
    label: "In Label",
    title: "Ini Adalah Judul Artikel",
    user: "Ridho Satriawan",
    description:
      "Apa itu HTML? Buat Kamu yang pernah membuat sebuah website pastinya sudah tidak asing lagi dengan yang namaya HTML.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo illum aperiam in quisquam quos saepe iusto adipisci autem repellendus eius",
    datePost: "31 Agustus 2024",
    view: "12",
  },
  {
    id: 4,
    img: imagepost,
    label: "In Label",
    title: "Ini Adalah Judul Artikel",
    user: "Ridho Satriawan",
    description:
      "Apa itu HTML? Buat Kamu yang pernah membuat sebuah website pastinya sudah tidak asing lagi dengan yang namaya HTML.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo illum aperiam in quisquam quos saepe iusto adipisci autem repellendus eius",
    datePost: "31 Agustus 2024",
    view: "341",
  },
  {
    id: 5,
    img: imagepost,
    label: "In Label",
    title: "Ini Adalah Judul Artikel",
    user: "Ridho Satriawan",
    description:
      "Apa itu HTML? Buat Kamu yang pernah membuat sebuah website pastinya sudah tidak asing lagi dengan yang namaya HTML.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo illum aperiam in quisquam quos saepe iusto adipisci autem repellendus eius",
    datePost: "31 Agustus 2024",
    view: "531",
  },
  {
    id: 6,
    img: imagepost,
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
  if (description.length > 120) {
    return description.slice(0, 120) + "...";
  }
  return description;
};
</script>
<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5 md:mt-10"
  >
    <div
      v-for="post in posts"
      :key="post.id"
      class="bg-white shadow-md rounded-lg overflow-hidden"
    >
      <div class="rounded-t-md overflow-hidden">
        <img
          :src="post.img"
          alt="Post Image"
          class="transition-transform rounded-t-md hover:scale-110"
        />
      </div>

      <div class="p-4">
        <span class="text-primary text-sm">{{ post.label }}</span>
        <h2 class="text-xl font-bold mt-2">{{ post.title }}</h2>
        <span class="font-bold text-gray-500">By</span> {{ post.user }}
        <p class="text-gray-700 mt-2">
          {{ truncateDescription(post.description) }}
          <NuxtLink to="/blogs/Details" class="text-primary cursor-pointer"
            >See more
          </NuxtLink>
        </p>
        <div class="flex items-center justify-between my-5">
          <div class="flex items-center">
            <Icon name="system-uicons:calendar-date"></Icon>
            <p class="text-gray-600 text-sm ml-2">{{ post.datePost }}</p>
            <span class="mx-1">|</span>
            <Icon name="lets-icons:view-fill"></Icon>
            <p class="text-gray-600 text-sm ml-2">{{ post.view }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
