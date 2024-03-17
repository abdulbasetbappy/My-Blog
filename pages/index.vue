<script setup lang="ts">

import Menubar from 'primevue/menubar';
import { ref } from "vue";

const items = ref([
    {
        label: 'Home' ,
        icon: 'pi pi-home',
       class :  "text-red-500"
    },
    {
        label: 'Features',  
        icon: 'pi pi-star'     
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
]);
 </script>


<template>
    <div class="card">
        <Menubar :model="items" class="bg-gray-800 text-white  flex items-center justify-between" />
    </div>
</template>
<style scoped>
/* Add flex styles to menu items */
.p-menubar-root > ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

.p-menuitem {
  display: flex;
  align-items: center;
  margin-right: 10px; /* Adjust margin as needed */
}
</style>



