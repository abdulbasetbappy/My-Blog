// store/blogStore.ts
import { defineStore } from 'pinia';

export const useBlogStore = defineStore('blogStore', {
    state: () => ({
        blogs: [] as Array<{ title: string }>,
    }),
    actions: {
        async fetchBlogs() {
            try {
                const response = await fetch('/api/post');
                const data = await response.json();
                this.blogs = data;
            } catch (error) {
                console.error("Failed to fetch blogs", error);
            }
        }
    }
});
