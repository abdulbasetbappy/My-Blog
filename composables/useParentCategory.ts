import { ref } from 'vue';
const parentCategory = ref([
    { name: "VueJs" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Nuxt" },
    { name: "React" },
    { name: "Frontend" },
    { name: "Backend" },
    { name: "NodeJs" },
    { name: "ExpressJs" },
]);
export function useParentCategory() {
    return {
        parentCategory
    };
};