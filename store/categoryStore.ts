// store/categoryStore.ts
import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('categoryStore', {
  state: () => ({
    categories: [] as Array<{ _id:string, categoryName: string, status: boolean, createdBy: string, createdDate: string }>,
    category: {} as { _id: string, categoryName: string, status: boolean },
  }),
  getters: {
    totalCategories: (state) => state.categories.length,
    activeCategories: (state) => state.categories.filter(category => category.status).length,
    inactiveCategories: (state) => state.categories.filter(category => !category.status).length,
  },
  actions: {
    //Get All Categories
    async fetchCategories() {
      try {
        const response = await fetch('/api/category/');
        const data = await response.json();
        this.categories = data;
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
    },
    //Add Category
    async addCategory(category: { categoryName: string, status: boolean, createdBy: string, createdDate: string }) {
      try {
        const response = await fetch('/api/category/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(category),
        });
        if (response.status == 200) {
          return { success: true };
        }
      } catch (error) {
        return { success: false };
      }
    },
    //Get Category By Id
    async fetchCategoryById(categoryId: string) {
        try {
          const response = await fetch(`/api/category/${categoryId}`);
          const data = await response.json();
          this.category = data.data;
        } catch (error) {
          console.error('Failed to fetch category', error);
        }
    },
    //Update Category
    async updateCategory(categoryId: string, updatedCategory: { categoryName: string, status: boolean }) {
        try {
          const response = await fetch(`/api/category/${categoryId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCategory),
          });
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Failed to update category', error);
          return { success: false };
        }
    },
    //Delete Category
    async deleteCategory(id: string) {
        try {
          const response = await fetch(`/api/category/${id}`, { method: 'DELETE' });
          if (response.ok) {
            this.categories = this.categories.filter(category => category._id !== id);
          }
          return response;
        } catch (error) {
          console.error('Failed to delete category:', error);
        }
    },
  }
});
