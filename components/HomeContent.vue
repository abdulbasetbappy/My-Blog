<script setup lang="ts"></script>

<template>
  <div class="container mx-auto">
    <div class="w-full">
      <!-- Feature image -->
      <div class="mb-10">
        <Card>
          <template #header>
            <img
              class="w-full"
              alt="user header"
              src="https://primefaces.org/cdn/primevue/images/usercard.png"
            />
          </template>
          <template>in Label</template>
          <template #title>Ini Adalah Judul Artikel</template>
          <template #subtitle>By Ridho Satriawan</template>
        </Card>
        <Card class="bg-[#1fb9ad] flex my-10 justify-between">
          <template #content>
            <div class="flex justify-between">
              <h1 class="text-2xl">Postingan Teraru</h1>
              <p class="m-0 underline">Lebih Banyak</p>
            </div>
          </template>
        </Card>
      </div>
    </div>

    <!-- 2nd part -->

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-y-10 justify-center items-center gap-x-10 my-10"
    >
      <!-- 1st Post image -->
      <div>
        <Card>
          <template #header>
            <img
              alt="user header"
              src="https://primefaces.org/cdn/primevue/images/usercard.png"
            />
          </template>
          <template>in Label</template>
          <template #title>Advanced Card</template>
          <template #subtitle>Card subtitle</template>
          <template #content>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
        </Card>
      </div>
      <!-- 2nd Post image -->
      <div>
        <Card>
          <template #header>
            <img
              alt="user header"
              src="https://primefaces.org/cdn/primevue/images/usercard.png"
            />
          </template>
          <template>in Label</template>
          <template #title>Advanced Card</template>
          <template #subtitle>Card subtitle</template>
          <template #content>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Add flex styles to menu items */
</style>
