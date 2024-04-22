<script setup>

definePageMeta({
  layout: "forntend",
});

const md = ref(
  `---
  title: Sam
  ---
  
  # Simple
  
  Simple paragraph
  
  Inline code \`const codeInline: string = 'highlighted code inline'\`{lang="ts"} can be contained in paragraphs.
  
  Code block:
  \`\`\`typescript[filename]{1,3-5}meta
  import { parseMarkdown } from '@nuxtjs/mdc/runtime'
  
  async function main(mdc: string) {
    const ast = await parseMarkdown(mdc)
    // Do your magic with parsed AST tree
  
    return ast // [!code ++]
    return ast // [!code --]
  }
  \`\`\`

  <ul><li>👉 one</li><li> 👉 two</li><li> 👉 three</li></ul>  <ol><li>one</li><li>one</li><li>one</li></ol>

  <h1>Code block:</h1>

\`\`\`javascript[filename]{1,3-5}meta
  import { parseMarkdown } from '@nuxtjs/mdc/runtime'
  
  async function main(mdc: string) {
    const ast = await parseMarkdown(mdc)
    // Do your magic with parsed AST tree
  
    return ast // [!code ++]
    return ast // [!code --]
  }
  \`\`\`
  <iframe width="640" height="480" allowfullscreen="true" autoplay="true" disablekbcontrols="false" enableiframeapi="false" endtime="0" ivloadpolicy="0" loop="true" modestbranding="false" origin="" playlist="" progressbarcolor="white" src="https://www.youtube.com/embed/GR2nfyWJSd4?autoplay=1&amp;controls=0&amp;loop=1&amp;color=white" start="0"></iframe>
  <iframe width=854 class="w-full py-4" height=480 src="https://www.youtube.com/embed/h9BtIWekM7s?html5=1" frameborder="0" allowfullscreen></iframe>
  <iframe width=560 height=315 src="https://www.youtube.com/embed/h9BtIWekM7s?si=3Vany1V6_Ze0Gl1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>     
  `
);


</script>

<template>
  <div class="view_container">
<!-- 
    <textarea v-model="md" class="w-full p-4" /> -->
    <div class="px-16">
        <MDC v-slot="{ data, body }" :value="md">
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
