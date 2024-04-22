<script setup>
definePageMeta({
    layout: "forntend",
});
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
    <HomeContent />
</template>
<style scoped></style>
