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
  <iframe src="https://www.youtube.com/watch?v=3lTUAWOgoHs"></iframe>
  `
);
</script>

<template>
  <div class="grid grid-cols-2 view_container min-h-full">
    <textarea v-model="md" class="w-full p-4" />
    <MDC v-slot="{ data, body }" :value="md">
      <MDCRenderer v-if="body" :body="body" :data="data" :prose="true" />
    </MDC>
    <div data-youtube-video>
      <iframe src="https://www.youtube.com/watch?v=3lTUAWOgoHs"></iframe>
    </div>
  </div>
</template>
